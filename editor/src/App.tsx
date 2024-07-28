import { useSignal } from "@preact/signals";

import { Editor } from "./Editor.tsx";
import { Browser } from "./Browser.tsx";
import { Terminal } from "./Terminal.tsx";

import IconLayoutSidebar from "icons/layout-sidebar.tsx";
import IconTerminal2 from "icons/terminal-2.tsx";
import IconBrowser from "icons/browser.tsx";

import { box } from "../lib/box.ts";

export function App() {
  const openFile = useSignal<string | null>(null);
  const sidebarWidth = useSignal<number | null>(200);
  const terminalHeight = useSignal<number | null>(250);
  const websiteWidth = useSignal<number | null>(600);

  return (
    <div class="flex flex-col w-screen h-screen dark:text-white dark:bg-black">
      <div class="flex flex-grow-[1]">
        {sidebarWidth.value !== null && (
          <div
            class="h-full bg-gray-100 flex flex-col border-r border-gray-400"
            style={{ width: sidebarWidth.value }}
          >
            <p class="px-2 py-1">Deno Box</p>
            {box.fs.ls().map((file) => (
              <button
                class={`text-left pl-4 py-1 hover:bg-gray-200 ${
                  file.name === openFile.value ? "bg-gray-300" : ""
                }`}
                onClick={() => {
                  openFile.value = file.name;
                }}
              >
                {file.name}
              </button>
            ))}
          </div>
        )}
        <div class="h-full flex-grow-[1] flex flex-col">
          {openFile.value
            ? <Editor openFile={openFile.value} />
            : (
              <div class="flex-grow-[1] p-2">
                No file selected.
              </div>
            )}
          {terminalHeight.value !== null && (
            <Terminal style={{ height: terminalHeight.value }} />
          )}
        </div>
        {websiteWidth.value !== null && (
          <Browser style={{ width: websiteWidth.value }} />
        )}
      </div>
      <div class="w-full flex gap-2 p-1 border-t border-gray-400 bg-gray-200">
        <button
          class="text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={() => {
            if (sidebarWidth.value === null) {
              sidebarWidth.value = 200;
            } else {
              sidebarWidth.value = null;
            }
          }}
        >
          <IconLayoutSidebar />
        </button>
        <button
          class="ml-auto text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={() => {
            if (terminalHeight.value === null) {
              terminalHeight.value = 250;
            } else {
              terminalHeight.value = null;
            }
          }}
        >
          <IconTerminal2 />
        </button>
        <button
          class="text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={() => {
            if (websiteWidth.value === null) {
              websiteWidth.value = 600;
            } else {
              websiteWidth.value = null;
            }
          }}
        >
          <IconBrowser />
        </button>
      </div>
    </div>
  );
}
