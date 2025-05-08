await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "esm",
  minify: process.argv.includes("--minify"),
  sourcemap: "linked",
  external: ["*"],
});