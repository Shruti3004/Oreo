const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running...");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});