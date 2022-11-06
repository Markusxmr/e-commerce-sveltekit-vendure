// vite.config.js
import watchAndRun from "file:///home/marko/Projects/section-1-1/apps/e-commerce/storefront/node_modules/@kitql/vite-plugin-watch-and-run/index.mjs";
import { sveltekit } from "file:///home/marko/Projects/section-1-1/apps/e-commerce/storefront/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import houdini from "file:///home/marko/Projects/section-1-1/apps/e-commerce/storefront/node_modules/houdini/build/vite-esm/index.js";
import path from "path";
var config = {
  plugins: [
    houdini(),
    sveltekit(),
    watchAndRun([
      {
        name: "Houdini",
        watch: path.resolve("src/**/*.(gql|svelte)"),
        run: "npm run gen",
        delay: 100,
        watchKind: ["ready", "add", "change", "unlink"]
      },
      {
        name: "Houdini",
        watch: path.resolve("houdini.config.js"),
        run: "npm run gen",
        delay: 100
      }
    ])
  ],
  resolve: {
    alias: {
      "~": path.resolve("./src"),
      $houdini: path.resolve(".", "$houdini")
    }
  },
  server: {
    fs: {
      allow: ["."]
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYXJrby9Qcm9qZWN0cy9zZWN0aW9uLTEtMS9hcHBzL2UtY29tbWVyY2Uvc3RvcmVmcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWFya28vUHJvamVjdHMvc2VjdGlvbi0xLTEvYXBwcy9lLWNvbW1lcmNlL3N0b3JlZnJvbnQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbWFya28vUHJvamVjdHMvc2VjdGlvbi0xLTEvYXBwcy9lLWNvbW1lcmNlL3N0b3JlZnJvbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgd2F0Y2hBbmRSdW4gZnJvbSAnQGtpdHFsL3ZpdGUtcGx1Z2luLXdhdGNoLWFuZC1ydW4nXG5pbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnXG5pbXBvcnQgaG91ZGluaSBmcm9tICdob3VkaW5pL3ZpdGUnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuY29uc3QgY29uZmlnID0ge1xuICBwbHVnaW5zOiBbXG5cdFx0aG91ZGluaSgpLFxuICAgIHN2ZWx0ZWtpdCgpLFxuICAgIHdhdGNoQW5kUnVuKFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0hvdWRpbmknLFxuICAgICAgICB3YXRjaDogcGF0aC5yZXNvbHZlKCdzcmMvKiovKi4oZ3FsfHN2ZWx0ZSknKSxcbiAgICAgICAgcnVuOiAnbnBtIHJ1biBnZW4nLFxuICAgICAgICBkZWxheTogMTAwLFxuICAgICAgICB3YXRjaEtpbmQ6IFsncmVhZHknLCAnYWRkJywgJ2NoYW5nZScsICd1bmxpbmsnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdIb3VkaW5pJyxcbiAgICAgICAgd2F0Y2g6IHBhdGgucmVzb2x2ZSgnaG91ZGluaS5jb25maWcuanMnKSxcbiAgICAgICAgcnVuOiAnbnBtIHJ1biBnZW4nLFxuICAgICAgICBkZWxheTogMTAwLFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQvLyB0aGVzZSBhcmUgdGhlIGFsaWFzZXMgYW5kIHBhdGhzIHRvIHRoZW1cblx0XHRcdCd+JzogcGF0aC5yZXNvbHZlKCcuL3NyYycpLFxuXHRcdFx0JGhvdWRpbmk6IHBhdGgucmVzb2x2ZSgnLicsICckaG91ZGluaScpXG5cdFx0fVxuXHR9LFxuICBzZXJ2ZXI6IHtcbiAgICBmczoge1xuICAgICAgYWxsb3c6IFsnLiddLFxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVyxPQUFPLGlCQUFpQjtBQUMzWCxTQUFTLGlCQUFpQjtBQUMxQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxVQUFVO0FBR2pCLElBQU0sU0FBUztBQUFBLEVBQ2IsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU8sS0FBSyxRQUFRLHVCQUF1QjtBQUFBLFFBQzNDLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLFdBQVcsQ0FBQyxTQUFTLE9BQU8sVUFBVSxRQUFRO0FBQUEsTUFDaEQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPLEtBQUssUUFBUSxtQkFBbUI7QUFBQSxRQUN2QyxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUVOLEtBQUssS0FBSyxRQUFRLE9BQU87QUFBQSxNQUN6QixVQUFVLEtBQUssUUFBUSxLQUFLLFVBQVU7QUFBQSxJQUN2QztBQUFBLEVBQ0Q7QUFBQSxFQUNDLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLE9BQU8sQ0FBQyxHQUFHO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
