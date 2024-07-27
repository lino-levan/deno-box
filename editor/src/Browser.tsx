import { useComputed, useSignal } from "@preact/signals";

export function Browser({ style }: { style: Record<string, number> }) {
  const userUrl = useSignal<string>("http://localhost:80");
  const requestUrl = useComputed(() => {
    try {
      const url = new URL(userUrl.value);
      if (url.hostname !== "localhost") {
        return userUrl.value;
      }
      const port = url.port || 80;
      url.host = window.location.host;
      url.pathname = `/_boxsw/${port}${url.pathname}`;
      console.log(url.href);
      return url.href;
    } catch {
      return userUrl.value;
    }
  });

  return (
    <div class="h-full border-l border-gray-400 flex flex-col" style={style}>
      <input
        class="w-full p-2 border border-x-transparent border-t-transparent border-b-gray-400"
        value={userUrl.value}
        onInput={(e) => {
          userUrl.value = e.currentTarget.value;
        }}
      />
      <iframe
        src={requestUrl}
        class="w-full flex-grow"
      />
    </div>
  );
}
