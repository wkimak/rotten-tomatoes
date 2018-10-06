import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';


class App extends Component {


  fetchMovie(movieTitle) {
    axios.get('/api/movie', { params: { title: movieTitle }})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className='main_container'>
        <Navbar />
        <Sidebar fetchMovie={ this.fetchMovie } />
      </div>
    )
  }
}

export default App;