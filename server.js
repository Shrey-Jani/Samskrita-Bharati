const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const hostname = "localhost";
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://${hostname}:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
