import { type Registry } from "shadcn/schema";

export const ui: Registry["items"] = [
  {
    name: "button",
    type: "registry:ui",
    registryDependencies: ["utils"],
    dependencies: ["@radix-ui/react-slot", "motion"],
    title: "Button",
    description: "Button component for the Opulen UI library.",
    files: [
      {
        path: "components/ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
];
