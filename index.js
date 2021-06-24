const express = require("express");
const users = require("./users");
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Hello home");
});

app.use("/users", users);

app.listen(process.env.PORT || 3000, () => {
  console.log("connected to server");
});
