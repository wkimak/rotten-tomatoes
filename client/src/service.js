import axios from 'axios';
  
 export const fetchActorData = (movieId) => {
    axios.get('/api/actors', { params: { movieId: movieId }})
    .then((res) => {
      console.log('ACTOR', res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

 export const genreIds = {
   action: 28,
   comedy: 35,
   war: 10752,
   horror: 27,
   documentary: 99,
   mystery: 9648
 }
  
 export const fetchBarChartData = (genreId, callback) => {
    axios.get('/api/movies', { params: { genreId: genreId }})
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

