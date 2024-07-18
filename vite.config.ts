import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "./lib/index.ts"),
        icons: resolve(__dirname, "./lib/icons/index.tsx"),
      },
      name: "mimui",
      fileName: (format) => `[name].${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mui/icons-material"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true })],
});