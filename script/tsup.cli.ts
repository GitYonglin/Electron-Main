import { build } from "tsup";

(() => {
  build({
    name: "cli",
    // entry: ['src/plugin/**/*.ts'],
    entry: ['src/cli/cli.ts'],
    splitting: false,
    sourcemap: false,
    clean: true,
    format: ["cjs"],
    outDir: "./lib/cli",
    // external: [
    //   "electron",
    //   "app-root-path",
    //   "bytenode",
    //   'electron-builder',
    //   'esbuild',
    //   'commander',
    //   'inquirer',
    //   "tsup",
    //   "child_process",
    //   "electron",
    //   "bytenode",
    //   'chalk',
    //   'electron-builder',
    //   "fs-extra",
    //   'vite',
    // ],
    platform: "node",
    bundle: false,
    dts: false
  })
})()
