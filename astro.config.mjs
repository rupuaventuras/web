
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://rupuaventuras.github.io",

  base: "/web-expediciones",

  output: "static",

  integrations: [
    icon()
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});
