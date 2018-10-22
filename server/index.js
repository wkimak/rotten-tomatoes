const express = require('express');
const path = require('path');
const axios = require('axios');
const keys = require('../config.js');

const app = express();

app.use(express.static('./client/dist'));


app.get('/api/movies', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/discover/movie?include_video=false&sort_by=popularity.desc&with_genres=${req.query.genreId}&api_key=${keys.APIkey}&`)
  .then((response) => {

    const movies = response.data.results.filter((movie) => {
      return movie.vote_average !== 0;
    })
    
    res.send(movies);
  })
  .catch((err) => {
    console.log('ERROR fetching movies', err);
  })
})

app.get('/api/actors', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/${req.query.movieId}/credits?api_key=${keys.APIkey}`)

  .then((response) => {
    const promises = [];
    const cast = response.data.cast;
   
    for(let i = 0; i < 10; i++) {
      var p = new Promise((resolve, reject) => {
        axios.get(`https://api.themoviedb.org/3/person/${cast[i].cast_id}?api_key=${keys.APIkey}&language=en-US`)
         .then((res) => {
           resolve({ name: res.data.name }, { popularity: res.data.popularity });
         })
         .catch((err) => {
           resolve();
         })
      })
      
      promises.push(p);
    }

    Promise.all(promises)
      .then((data) => {
        const results = data.filter((actor) => {
          return actor;
        })
        
        res.send(results);
      })
    
  })
  .catch((err) => {
    console.log('ERROR fetching actors', err);
  })
})






app.listen(process.env.PORT || '3000', () => {
  console.log('Server listening on port 3000');
})
