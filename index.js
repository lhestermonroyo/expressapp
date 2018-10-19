const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  // res.status(200).send("Hello World!");
  res.status(200).json({ greeting: "Hello, world!" });
});

app.post("/", (req, res) => {
  // res.sDckeatus(200).send(`Hello, ${req.body.username}!`);
  res.status(200).json({ greeting: `Hello, ${req.body.username}!  x` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
