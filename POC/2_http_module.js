// http module allows u to create a basic http server
// server handles incomming request and sedn response
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  // this cb is going to be called for eeach incomming http request
  console.log(req);
  if (req.url == "/about") {
    res.setHeader("content-type", "text/plain");
    res.write("hello this is about page");
  } else if (req.url == "/home") {
    res.setHeader("content-type", "text/html");
    fs.readFile("./index.html", "utf-8", (err, data) => {
      if (err) {
        res.write("internal server error , ${err.message}");
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/favicon.ico") {
    res.setHeader("content-Type", "image/x-icon");
    res.end();
    return;
  } else {
    res.setHeader("content-Type", "text/plain");
    res.end("this url does not exist 404");
  }
//   res.end();
});

const port = 3000;
const host = "localhost";
server.listen(port, host, () => {
  console.log("setver is liting on http://${host}:${port}");
});
