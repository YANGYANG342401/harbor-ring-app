import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/harbor-ring-app/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // 监听所有网络接口
    port: 5174, // 使用5174端口
    strictPort: false, // 如果端口被占用则自动换端口
  },
});
