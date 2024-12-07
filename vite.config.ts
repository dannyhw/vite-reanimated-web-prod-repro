// https://stereobooster.com/posts/react-native-web-with-vite/
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const extensions = [
  ".web.tsx",
  ".tsx",
  ".web.ts",
  ".ts",
  ".web.jsx",
  ".jsx",
  ".web.js",
  ".js",
  ".css",
  ".json",
  ".mjs",
];

const development = process.env.NODE_ENV === "development";

export default defineConfig({
  clearScreen: true,
  plugins: [
    react({
      babel: {
        plugins: [
          // "react-native-web",
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-reanimated/plugin",
        ],
      },
    }),
  ],
  define: {
    __DEV__: development,
    DEV: development,
    "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
    "global.__x": {},
    _frameTimestamp: undefined,
    _WORKLET: false,
  },
  resolve: {
    extensions,
    alias: {
      "react-native": "react-native-web",
    },
    mainFields: ["browser", "module", "main", "react-native"],
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
      jsx: "automatic",
      loader: { ".js": "jsx" },
    },
  },
});
