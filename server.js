const express = require('express');
const path = require('path');
const axios = require('axios');

const port = 3000

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(express.static(PUBLIC_DIR))
// app.get('/api/reviews', (req, res) => {
//   axios.get('http://localhost:3002/api/reviews')
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});