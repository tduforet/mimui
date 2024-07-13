import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "lib/index.ts",
        icons: "lib/icons/index.ts"
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts({rollupTypes: true})],
});