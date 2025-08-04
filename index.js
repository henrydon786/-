
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/code', (req, res) => {
  const { number, type } = req.query;
  if (!number || !type) {
    return res.status(400).json({ message: "Missing parameters" });
  }
  const fakeCode = type === "file" ? "creds_123456789.json" : "eyJhbGciOiJIUzI1NiIsInR...";
  res.json({ code: fakeCode });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
