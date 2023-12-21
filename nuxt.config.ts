import { resolve } from "node:path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  },
  ignore: ["**/mongodb-data/*", "./mongodb-data"],
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie"),
  },
  devtools: { enabled: true },
  css: ["~/assets/globals.css"],
  modules: [
    "nuxt-icon",
    "nuxt-mongoose",
    "@hebilicious/authjs-nuxt",
    "nuxt-plotly",
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: "models",
  },
  runtimeConfig: {
    authJs: {
      secret: process.env.AUTH_SECRET,
    },
  },
  //@ts-ignore
  authJs: {
    verifyClientOnEveryRequest: true,
    guestRedirectTo: "/",
    authenticatedRedirectTo: "/dashboard",
    baseUrl: process.env.AUTH_ORIGIN,
  },
});
