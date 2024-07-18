import { DenoBox } from "./mod.ts";

function toBase64(content: Uint8Array) {
  return btoa(content.reduce(
    (data, byte) => data + String.fromCharCode(byte),
    "",
  ));
}

export class DenoWorker {
  #box: DenoBox;
  #worker: Worker;
  onprint: (content: string) => void = () => {};

  constructor(box: DenoBox, src: string) {
    this.#box = box;
    const source = new TextEncoder().encode(`
      const __print = console.log;

      globalThis.Deno = {
        async readTextFile(file) {
          self.postMessage({
            type: "readTextFile",
            content: file
          });
          return new Promise((res)=>{
            self.addEventListener("message", (e) => {
              res(e.data);
            }, { once: true });
          })
        },
        exit(num) {
          self.postMessage({
            type: "exit",
            content: num ?? 0
          });
          while(true) {}
        }
      };

      console.log = (...args) => {
        self.postMessage({
          type: "print",
          content: args
        })
      };
      ${src}
    `);
    const base64 = toBase64(source);
    this.#worker = new Worker(`data:text/javascript;base64,${base64}`, {
      type: "module",
    });
    this.#worker.addEventListener("message", (e) => {
      const type: string = e.data.type;
      if (type === "print") {
        this.onprint(e.data.content.join(" "));
      } else if (type === "readTextFile") {
        const file = new TextDecoder().decode(
          this.#box.fs.readFile(e.data.content),
        );
        this.#worker.postMessage(file);
      } else if (type === "exit") {
        this.#worker.terminate();
      }
    });
  }

  terminate() {
    this.#worker.terminate();
  }
}
