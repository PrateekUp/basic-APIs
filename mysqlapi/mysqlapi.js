require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();

const inst_routes = require("./routes/route.js");

const PORT = process.env.PORT_TWO || 3002;

app.get("/", (req, res) => {
  res.send("Hey! The server is LIVE.");
});

//middleware
app.use(express.json());
app.use("/api", inst_routes);

const server = async () => {
  try {
    await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
