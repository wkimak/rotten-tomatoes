import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.title !== prevProps.title) {
      this.drawChart();
    }
  }

  componentDidMount() {
    if(this.props.title) {
      this.drawChart();
    }
  }

  drawChart() {
    const { barChartData } = this.props;

    const data = [{ label: 'popularity', stat: barChartData.popularity }, 
                  { label: 'vote count', stat: barChartData.vote_count }, 
                  { label: 'vote average', stat: barChartData.vote_average }];

    const svg = d3.select('.chart').attr('height', 500).attr('width', '50%');

/* ---- While rects already exist ----- */
    svg.selectAll("rect")
      .data(data)
      .transition()
      .duration(750)
      .style('fill', 'orange')
      .attr('x', (d, i) => i * 150)
      .attr('y', ({ stat }, i) => {
        if(stat < 30) {
         return 500 - 10 * stat;
        } else {
          return 500 - 3 * stat;
        }
       })
      .attr('width', 50)
      .attr('height', ({ stat }, i) => stat * 10);

    svg.selectAll('text')
      .data(data)
      .transition()
      .delay(750)
      .text(({ label, stat }) => label + ': ' + stat)
      .attr('x', (d,i) => i * 150)
      .attr('y', ({ stat },i) => {
        if(stat < 30) {
          return 500 - 12 * stat
        } else {
          return 500 - 3.2 * stat;
        }
      });


/* ----- Updating rects.. if the rects do not exist yet --- */
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .transition()
      .duration(750)
      .style('fill', 'orange')
      .attr('x', (d, i) => i * 150)
      .attr('y', ({ stat }, i) => {
        if(stat < 30) {
         return 500 - 10 * stat;
        } else {
          return 500 - 3 * stat;
        }
       })
      .attr('width', 50)
      .attr('height', ({ stat }, i) => stat * 10)
     

    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .transition()
      .delay(750)
      .text(({ label, stat }) => label + ': ' + stat)
      .attr('x', (d,i) => i * 150)
      .attr('y', ({ stat },i) => {
        if(stat < 30) {
          return 500 - 12 * stat
        } else {
          return 500 - 3.2 * stat;
        }
      });

  }
 
   
  render() {
    return (
      <div>
        <svg className='chart'>
        </svg> 
      </div>
    )
  }
}


export default BarChart;
