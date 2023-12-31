const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const router = require("./routers/index");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

mongoose
  .connect(config.mongo_url)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "https://funhub-dc92c.web.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(config.port, () => {
  console.log("server is started at port " + config.port);
});
