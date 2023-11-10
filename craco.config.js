const path = require("path");
// const sassResourcesLoader = require("craco-sass-loader");
const cracoSassResourcesLoader = require("craco-sass-resources-loader");
module.exports = {
  webpack: {
    port: 3001,
    alias: {
      "@": path.resolve(__dirname, "frontend", "src/"),
      "@com": path.resolve(__dirname, "frontend", "src", "components"),
      "@ass": path.resolve(__dirname, "frontend", "src", "assets"),
      "@css": path.resolve(__dirname, "frontend", "src", "assets", "css"),
      "@img": path.resolve(__dirname, "frontend", "src", "assets", "img"),
    },
  },
  plugins: [
    {
      plugin: cracoSassResourcesLoader,
      options: {
        resources: path.resolve(__dirname, "src/assets/css/pVars.scss"),
      },
    },
  ],
  // style: {
  //   postcss: {
  //     mode: "extends",
  //     loaderOptions: {
  //       postcssOptions: {
  //         ident: "postcss",
  //         plugins: [
  //           [
  //             "postcss-pxtorem",
  //             {
  //               rootValue: 375 / 10, // 根元素字体大小
  //               // propList: ['width', 'height']
  //               propList: ["*"],
  //             },
  //           ],
  //         ],
  //       },
  //     },
  //   },
  // },
};
