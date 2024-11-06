// vite.config.ts
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";
var vite_config_default = mergeConfig(
  defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true
        }
      }
    }
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      coverage: {
        reportsDirectory: "./.coverage",
        reporter: ["lcov", "json", "json-summary"]
      }
    }
  })
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFlZXVuL0RvY3VtZW50cy9HaXRIdWIvZnJvbnRfM3JkX2NoYXB0ZXIzLTFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qYWVldW4vRG9jdW1lbnRzL0dpdEh1Yi9mcm9udF8zcmRfY2hhcHRlcjMtMS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvamFlZXVuL0RvY3VtZW50cy9HaXRIdWIvZnJvbnRfM3JkX2NoYXB0ZXIzLTEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIGFzIGRlZmluZVRlc3RDb25maWcsIG1lcmdlQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxuICBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHByb3h5OiB7XG4gICAgICAgICcvYXBpJzoge1xuICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgZGVmaW5lVGVzdENvbmZpZyh7XG4gICAgdGVzdDoge1xuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgICAgc2V0dXBGaWxlczogJy4vc3JjL3NldHVwVGVzdHMudHMnLFxuICAgICAgY292ZXJhZ2U6IHtcbiAgICAgICAgcmVwb3J0c0RpcmVjdG9yeTogJy4vLmNvdmVyYWdlJyxcbiAgICAgICAgcmVwb3J0ZXI6IFsnbGNvdicsICdqc29uJywgJ2pzb24tc3VtbWFyeSddLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsT0FBTyxXQUFXO0FBQzdWLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZ0JBQWdCLGtCQUFrQixtQkFBbUI7QUFFOUQsSUFBTyxzQkFBUTtBQUFBLEVBQ2IsYUFBYTtBQUFBLElBQ1gsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQUEsRUFDRCxpQkFBaUI7QUFBQSxJQUNmLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxRQUNSLGtCQUFrQjtBQUFBLFFBQ2xCLFVBQVUsQ0FBQyxRQUFRLFFBQVEsY0FBYztBQUFBLE1BQzNDO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogW10KfQo=
