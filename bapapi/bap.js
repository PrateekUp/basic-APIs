require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const unified = require("./routes/route.js");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hey! The server is LIVE.");
});

//middleware
app.use(express.json());
app.use("/bap", unified);

const server = async () => {
  try {
    // await connectDB();
    await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
