const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/movies", async (req, res) => {
  const { searchTerm, page } = req.query;
  try {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        s: searchTerm,
        apikey: "e03b34b9",
        page: page,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
