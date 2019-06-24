const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const fs = require("fs");
const path = require("path");

app.prepare().then(() => {
  createServer(async (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    try {
      const folder = await verifyRoute(pathname);
      res.filesFound = folder;
      console.log("oi", res.filesFound);
      app.render(req, res, pathname, query);
    } catch (err) {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});

const verifyRoute = async route => {
  var folder = undefined;
  if (route == "/files") {
    folder = fs.readdirSync(path.resolve(__dirname, "files"));
    console.log(folder);
  }

  return folder || [];
};
