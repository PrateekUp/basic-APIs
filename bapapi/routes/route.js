// routes/unified.js
const express = require("express");
const axios = require("axios");
const mysqlApiBaseUrl = "http://localhost:3001/api"; // mysql API URL
const mongoApiBaseUrl = "http://localhost:3002/api"; // mongo API URL

const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    // Send the same query to both individual APIs
    const queryParams = req.query; //query parameters
    const [mysqlResponse, mongoResponse] = await Promise.all([
      axios.get(`${mysqlApiBaseUrl}/course`, { params: queryParams }),
      axios.get(`${mongoApiBaseUrl}/course`, { params: queryParams }),
    ]);

    // Combine the responses into a unified format
    const unifiedResponse = {
      traininginstituteA: mysqlResponse.data,
      traininginstituteB: mongoResponse.data,
    };

    res.status(200).json(unifiedResponse);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from databases" });
  }
});

module.exports = router;
