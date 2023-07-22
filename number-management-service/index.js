const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'URLs not provided.' });
  }
  
  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await axios.get(url, { timeout: 500 });
          return response.data.numbers;
        } catch (error) {
          console.log(`Error fetching data from URL: ${url}`);
          return [];
        }
      })
    );

    const mergedNumbers = Array.from(new Set(results.flat())).sort((a, b) => a - b);
    return res.json({ numbers: mergedNumbers });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
