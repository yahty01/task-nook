import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  base: "/task-nook/",
  server: {
    port: 3000,
    open: true,
  },
})
