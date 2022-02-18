// libraries
require('dotenv').config();
const express = require('express');
const Geocodio = require('geocodio-library-node');

// env vars
const { API_KEY, PORT } = process.env;

// instantiations
const geocoder = new Geocodio(API_KEY);
const server = express();



server.get('/heartbeat', (req, res) => {
  geocoder
  .geocode('123 Main Street, Springfield, OR')
  .then(response => {
    res.json({
      "response": response
    })
  })
});

// catch-all so react can handle routing
server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});


server.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});