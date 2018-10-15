import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';
import DropDown from './DropDown.jsx';
import BarChart from './charts/BarChart.jsx';
import LineGraph from './charts/LineGraph.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      movieTitle: null,
      barChartData: { popularity: null, 
                      vote_count: null, 
                      vote_average: null },
      showGraph: 'BarChart'
    }
  }
  

  fetchBarChartData(movieTitle) {
    axios.get('/api/movie', { params: { title: movieTitle }})
    .then((res) => {
      this.setState({
        title: res.data[0].title,
        barChartData: { 
          popularity: res.data[0].popularity,
          vote_count: res.data[0].vote_count,
          vote_average: res.data[0].vote_average
        }
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  toggleGraph(graphOption) {
    this.setState({ showGraph: graphOption });
  }

  renderGraph() {
    if(this.state.showGraph === 'BarChart') {
      return <BarChart title={ this.state.title } barChartData={ this.state.barChartData } />
    } else if(this.state.showGraph === 'LineGraph') {
      return <LineGraph title={ this.state.title } />
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='flex_container'>
          <Sidebar fetchBarChartData={ this.fetchBarChartData.bind(this) } />
          <Main>
            <DropDown toggleGraph={ this.toggleGraph.bind(this) } />
            <h1 className='movie_title'>{ this.state.title }</h1>
           { this.renderGraph() }
          </Main>
        </div>
      </div>
    )
  }
}

export default App;