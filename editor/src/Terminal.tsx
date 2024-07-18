import { useEffect } from "preact/hooks";
import { type Signal, useSignal } from "@preact/signals";

import { box } from "../lib/box.ts";

export function Terminal({ style }: { style: Record<string, number> }) {
  const log = useSignal<string[]>([]);
  const command = useSignal("");
  const blinker = useSignal(true);

  useEffect(() => {
    setTimeout(() => {
      blinker.value = !blinker.value;
    }, 1000);
  }, [blinker.value]);

  function addToLog(line: string) {
    if (log.value.length > 1000) {
      log.value = [
        ...log.value.slice(1),
        line,
      ];
    } else {
      log.value = [
        ...log.value,
        line,
      ];
    }
  }

  function executeCommand(cmd: string): string | undefined {
    const [program, ...args] = cmd.split(" ");

    if (program === "deno") {
      if (args[0] === "run") {
        const worker = box.runScript(args[1]);
        worker.onprint = (stuff) => {
          addToLog(stuff);
        };
      }
    } else if (program === "touch") {
      for (const arg of args) {
        box.fs.writeFile(arg, new Uint8Array());
      }
    } else {
      return `Program "${program}" is not recognized`;
    }
  }

  return (
    <button
      class="w-full bg-white border-t border-gray-400 p-2 outline-none text-left flex flex-col overflow-y-auto"
      style={style}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          addToLog(`$ ${command.value}`);
          const exec = executeCommand(command.value);
          if (exec) {
            addToLog(exec);
          }
          command.value = "";
        } else if (e.key === "Backspace") {
          command.value = command.value.slice(0, -1);
        } else if (e.key.length > 1) {
          console.warn(e.key, "is not handled yet");
        } else {
          command.value += e.key;
        }
      }}
    >
      {log.value.map((val) => <p>{val}</p>)}
      <p>$ {command}{blinker.value ? "⎸" : ""}</p>
    </button>
  );
}
