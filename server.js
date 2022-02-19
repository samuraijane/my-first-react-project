// libraries
require('dotenv').config();
const express = require('express');
const Geocodio = require('geocodio-library-node');
const path = require('path');

// env vars
const { API_KEY, PORT } = process.env;

// instantiations
const geocoder = new Geocodio(API_KEY);
const server = express();

// server-wide middleware
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());

server.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

server.post('/location', (req, res) => {
  const { location } = req.body;
  geocoder
  .geocode(location)
  .then(response => res.json({response}))
});

// catch-all so react can handle routing
server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});


server.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});