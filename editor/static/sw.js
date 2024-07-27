const bc = new BroadcastChannel("box_sw_network_request");

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith("/_boxsw/")) {
    // wait until response back
    event.respondWith(
      new Promise((resolve) => {
        const requestObj = {
          id: crypto.randomUUID(),
          type: "request",
          data: {
            url: event.request.url,
            method: event.request.method,
            headers: { ...event.request.headers.entries() },
            body: event.request.body,
          },
        };
        const responseCb = (event) => {
          if (event.data.id === requestObj.id) {
            bc.removeEventListener("message", responseCb);
            resolve(
              new Response(event.data.data.body, {
                status: event.data.data.status,
                statusText: event.data.data.statusText,
                headers: event.data.data.headers,
              }),
            );
          }
        };
        bc.addEventListener("message", responseCb);
        bc.postMessage(requestObj);
      }),
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
