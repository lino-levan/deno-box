interface Symlink {
  name: string;
  link: string;
}

interface File {
  name: string;
  content: Uint8Array;
}

interface Folder {
  name: string;
  files: (File | Symlink | Folder)[];
}

export class FileSystem {
  #root: (File | Symlink | Folder)[] = [];

  ls(path?: string) {
    if (!path) {
      return this.#root;
    }
    throw "unga";
  }

  writeFile(path: string, content: Uint8Array) {
    const file = this.#root.find((f) => f.name === path);
    if(file) {
      if("content" in file) {
        file.content = content;
      } else {
        throw "aaaaa";
      }
    } else {
      this.#root.push({
        name: path,
        content
      })
    }
  }

  readFile(path: string) {
    const file = this.#root.find((f) => f.name === path);
    if (!file) {
      throw "ooga";
    }
    if ("content" in file) {
      return file.content;
    }
    throw "booga";
  }
}

// for(const x of Deno.readDirSync("./src")) {
//   console.log(x)
// }
