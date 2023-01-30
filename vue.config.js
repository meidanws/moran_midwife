module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/moran_midwife/" : "/",
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
