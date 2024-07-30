const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/movies", async (req, res) => {
  const { searchTerm, page } = req.query;
  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: searchTerm,
        apikey: import.meta.env.VITE_API_KEY,
        page: page,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error Fetching Data");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
