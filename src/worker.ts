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
        },
        serve(callback) {
          const port = 80; // TODO(@lino-levan): Randomize port or make it configurable
          const bc = new BroadcastChannel("box_sw_network_request");
          bc.addEventListener("message", async (e) => {
            if(e.data.type === "request") {
              const reqPayload = e.data.data;
              const url = new URL(reqPayload.url);
              const requestPort = parseInt(reqPayload.url.split("/")[4]);
              __print("Request port", requestPort, port, requestPort === port)
              if(requestPort !== port) {
                return;
              }
              url.port = requestPort;
              url.hostname = "localhost";
              url.pathname = url.pathname.split("/").slice(3).join("/");

              const res = await callback(new Request(url, {
                method: reqPayload.method,
                headers: reqPayload.headers,
                body: reqPayload.body,
              }));
              bc.postMessage({
                id: e.data.id,
                type: "response",
                data: {
                  body: await res.arrayBuffer(),
                  status: res.status,
                  statusText: res.statusText,
                  headers: {... res.headers.entries() },
                }
              });
            }
          });
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
