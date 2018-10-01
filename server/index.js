import express from 'express';
import React from 'react';
import App from '../client/src/components/App.jsx';
import { renderToString } from 'react-dom/server';
import path from 'path';

const app = express();

app.use(express.static('./client/dist'));

app.get('/*', (req, res) => {
  const jsx = ( <App /> );
  const reactDom = renderToString(jsx);

  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end( htmlTemplate(reactDom) );
})

app.listen('3000', () => {
  console.log('Server listening on port 3000');
})

function htmlTemplate( reactDom ) {
  return (`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Rotten Tomatoes</title>
    </head>
    <body>
      <div id='app'>${ reactDom }</div>
    </body>
    </html>
    `
  );
}