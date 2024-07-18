import * as esbuild from "npm:esbuild@0.20.2";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@0.10.3";
import { serveDir } from "jsr:@std/http@0.221.0/file-server";

import { compileCss } from "./css.ts";

Deno.serve(async (req) => {
  const path = new URL(req.url).pathname;

  if(path === "/tailwind.css") {
    return new Response(compileCss(), {
      headers: {
        "Content-Type": "text/css"
      }
    });
  }

  if (path === "/bundle.js") {
    const result = await esbuild.build({
      platform: "browser",
      plugins: [...denoPlugins({ configPath: Deno.cwd() + "/deno.json" })],
      entryPoints: ["./editor/bundle.tsx"],
      write: false,
      bundle: true,
      format: "esm",
      treeShaking: false,
      minify: false,
      jsx: "automatic",
      jsxImportSource: "preact",
    });
    return new Response(result.outputFiles[0].contents);
  }

  return serveDir(req, {
    fsRoot: "./editor/static",
    quiet: true,
  });
});
