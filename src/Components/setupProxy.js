const proxy = require("http-proxy-middleware");
module.export = (app) => {
  app.use(
    "/getDb",
    proxy({
      target: "http://localhost:9000",
      changeOrigin: true,
    })
    );
    app.use("/v2/quotes", proxy({
        target: "https://ron-swanson-quotes.herokuapp.com",
        changeOrigin:true,
    }));
};
