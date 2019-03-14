import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import morgan from "morgan";
import path from "path";

import { html, Hello, Second } from "../views";

const app = express();

app.use(morgan("short"));
const staticPath = path.join(__dirname, "..", "public");
console.log(staticPath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  const body = ReactDOMServer.renderToString(<Hello title="success ssr" />);
  res.send(
    html({
      title: "top",
      body,
      scripts: [{ src: "hello.js", loadType: "async" }]
    })
  );
});

app.get("/second", (req, res) => {
  const body = ReactDOMServer.renderToString(
    <Second comments={["hoge", "fuga", "poo"]} />
  );
  res.send(
    html({
      title: "second",
      body,
      scripts: [{ src: "second.js", loadType: "async" }]
    })
  );
});

app.listen(3000, () => {
  console.log("app listening on port 3000!");
});
