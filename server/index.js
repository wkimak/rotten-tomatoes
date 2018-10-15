const express = require('express');

// import React from 'react';
// import App from '../client/src/components/App.jsx';
// import { renderToString } from 'react-dom/server';
const path = require('path');
const axios = require('axios');
const keys = require('../config.js');




const app = express();

app.use(express.static('./client/dist'));


app.get('/api/movie', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${keys.APIkey}&query=${req.query.title}`)
  .then((response) => {
    res.send(response.data.results);
  })
  .catch((err) => {
    console.log('ERROR fetching movie', err);
  })
})


// app.get('/*', (req, res) => {
//   const jsx = ( <App /> );
//   const reactDom = renderToString(jsx);

//   res.writeHead( 200, { "Content-Type": "text/html" } );
//   res.end( htmlTemplate(reactDom) );
// })

app.listen('3000', () => {
  console.log('Server listening on port 3000');
})

// function htmlTemplate( reactDom ) {
//   return (`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Rotten Tomatoes</title>
//       <link type="text/css" rel="stylesheet" href="style.css"/>
//     </head>
//     <body>
//       <div id='app'>${ reactDom }</div>
//       <script src='bundle.js'></script>
//     </body>
//     </html>
//     `
//   );
// }