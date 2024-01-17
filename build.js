#!/bin/env bun

Bun.build({
  entrypoints: ["src/index.js"],
  outdir: "dist",
});

Bun.spawn("node dist/index");
