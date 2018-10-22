import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {

 

  componentDidUpdate(prevProps, prevState) {
    if(this.props.genreId !== prevProps.genreId) {
      this.drawChart();
    }
  }

  componentDidMount() {
      this.drawChart();
  }

  drawChart() {
    const svg = d3.select('.chart').attr('height', 800).attr('width', '90%').attr('transform', 'rotate(180)');
    
    const data = [];

    this.props.movieList.map((movie) => {
      data.push({ movieId: movie.id, title: movie.original_title, vote_average: movie.vote_average });
    });
 
    const g = svg.selectAll("g")
                   .data(data);

    const initialG = g.enter()
           .append('g')
           .attr("transform", function({ vote_average }, i) { 
            return "translate" + "(" + (i * 60) + ", 0)"; 
          });

    const rect = initialG.append('rect')
       .style('fill', 'orange')
       .attr('width', 50)
       .attr('height', ({ vote_average }) => vote_average * 60);

    const text = initialG.append('text')
        .text(({ title }) => title)
        .style('transform', 'rotate(-90deg)')
        .attr('x', (d, i) => -250)
        .attr('y', (d, i) => i + 30)
        .on('click', ({ movieId }) => {
          this.props.fetchActors(movieId)
      }); 
      
      d3.selectAll('rect').data(data).attr('height', ({ vote_average }) => vote_average * 60)
      d3.selectAll('text').data(data).text(({ title }) => title) 

      d3.selectAll('g').data(data).exit().remove();
  }
 
   
  render() {
    return (
      <div style={{ overflow: 'scroll'}}>
        <svg className='chart'>
        </svg> 
      </div>
    )
  }
}


export default BarChart;
