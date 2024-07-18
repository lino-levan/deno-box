import { FileSystem } from "./fs.ts";
import { DenoWorker } from "./worker.ts";

export class DenoBox {
  readonly fs = new FileSystem();

  runScript(path: string) {
    const content = new TextDecoder().decode(this.fs.readFile(path));
    return new DenoWorker(this, content);
  }
}
