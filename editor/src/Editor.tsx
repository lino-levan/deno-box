import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import loader from "@monaco-editor/loader";
import { box } from "../lib/box.ts";

type EditorType = ReturnType<Awaited<typeof monacoPromise>["editor"]["create"]>;

const monacoPromise = loader.init();

export function Editor({ openFile }: { openFile: string }) {
  const editor = useSignal<EditorType | null>(null);

  useEffect(() => {
    monacoPromise.then((monaco) => {
      editor.value = monaco.editor.create(document.getElementById("editor")!, {
        value: new TextDecoder().decode(box.fs.readFile(openFile)),
        language: "javascript",
        minimap: { enabled: false },
      });
    });
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        const content = editor.value?.getValue();
        if (content) {
          box.fs.writeFile(
            openFile,
            new TextEncoder().encode(content),
          );
        }
      }
    });
  }, []);

  useEffect(() => {
    if (!editor.value) return;
    editor.value.setValue(new TextDecoder().decode(box.fs.readFile(openFile)));
  }, [openFile, editor.value]);

  return (
    <div id="editor" class="flex-grow-[1] border-0 outline-none">
    </div>
  );
}

// <textarea
//   class="flex-grow-[1] p-2 border-0 outline-none"
//   value={new TextDecoder().decode(
//     box.fs.readFile(openFile.value),
//   )}
//   onInput={(e) => {
//     box.fs.writeFile(
//       openFile.value!,
//       new TextEncoder().encode(e.currentTarget.value),
//     );
//   }}
// />
