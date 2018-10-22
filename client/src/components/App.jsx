import React, { Component } from 'react';
import { fetchBarChartData, fetchActorData, genreIds } from '../service.js'
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';
import BarChart from './charts/BarChart.jsx';
import LineGraph from './charts/LineGraph.jsx';


class App extends Component {

  state = { 
      genreId: genreIds.action,
      movieList: [],
      showGraph: 'BarChart'
  }

  componentDidMount() {
    this.fetchFromService(genreIds.action);
  }

  fetchFromService = (genreId) => {
    fetchBarChartData(genreId, (data) => {
      this.setState({ movieList: data, genreId: genreId })
    })
  }

  fetchActors = (movieId) => {
    fetchActorData(movieId, (data) => {
      console.log(data);
    })
  }

  toggleGraph = (graphOption) => {
    this.setState({ showGraph: graphOption });
  }

  renderGraph = () => {
    if(this.state.showGraph === 'BarChart') {
      return <BarChart genreId={ this.state.genreId } 
                       movieList={ this.state.movieList } 
                       fetchActors={ this.fetchActors} />
    } else if(this.state.showGraph === 'LineGraph') {
      return <LineGraph />
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='flex_container'>
          <Sidebar fetchFromService={ this.fetchFromService } />
          <Main>
            <h1 className='movie_title'>{ this.state.title }</h1>
           { this.state.movieList.length ? this.renderGraph() : null }
          </Main>
        </div>
      </div>
    )
  }
}

export default App;