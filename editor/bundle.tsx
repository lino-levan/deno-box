/// <reference lib="dom" />
import "preact/debug";
import { render } from "preact";
import { App } from "./src/App.tsx";

navigator.serviceWorker.register("/sw.js");

render(<App />, document.body);
