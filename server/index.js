const express = require('express');
const path = require('path');
const axios = require('axios');
const morgan = require('morgan');

const port = 3000

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
console.log(PUBLIC_DIR)
const app = express();

app.use(express.static(PUBLIC_DIR));

app.get('/api/reviews/:id', (req, res) => {
  axios.get(`http://18.221.226.62:3002/api/reviews/${5}`)
    .then((response) => res.send(response.data))
})

app.get('/api/item/:itemID', (req, res) => {
  axios.get(`http://3.140.252.86:3003/api/item/${5}`)
    .then((response) => res.send(response.data));
});

app.get('/api/relatedItems/:id', (req, res) => {
  axios.get(`http://3.23.86.72:3001/api/relatedItems/${5}`)
    .then((response) => res.send(response.data));
});

app.get('/api/items/:itemID', (req, res) => {
  axios.get(`http://3.140.248.238:3004/api/items/${5}`)
    .then((response) => res.send(response.data));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});