import path from "path";
import { oraPromise } from "ora";
import { ui } from "../registry/ui";
// import { lib } from "../registry/lib";

const registryPath = path.resolve(__dirname, "../registry.json");

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "opulen",
  homepage: "https://opulen.com",
  items: [...ui],
};

// const spinner = ora("Building registry...").start();
// Bun.write(registryPath, JSON.stringify(registry, null, 2) + "\n")
//   .then(() => {
//     spinner.succeed("Registry built successfully.");
//   })
//   .catch(() => {
//     spinner.fail("Failed to build registry");
//     process.exit(1);
//   });

await oraPromise(
  Bun.write(registryPath, JSON.stringify(registry, null, 2) + "\n"),
  {
    text: "Building registry...",
    successText: "Registry built successfully.",
    failText: "Failed to build registry.",
  }
);
