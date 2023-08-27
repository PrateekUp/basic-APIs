require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const connectDB = require("./db/db");

const inst_routes = require("./routes/inst");

const PORT = process.env.PORT_ONE || 3000;

app.get("/", (req, res) => {
  res.send("Hey! The server is LIVE.");
});

//middleware
app.use(express.json());
app.use("/api", inst_routes);

const server = async () => {
  try {
    await connectDB();
    await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
