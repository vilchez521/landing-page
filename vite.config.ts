import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: { host: "192.168.68.18", port: 5312, allowedHosts: ["manuelvilchezrpa.ddns.net"]},
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));