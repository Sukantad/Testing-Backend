const express = require("express");
const cors = require("cors");
const ConnectionFn = require("./db");

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.get("*", (req, res) => {
  res.send("Not found");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  ConnectionFn();
  console.log(`Server running on port ${port}`);
});
