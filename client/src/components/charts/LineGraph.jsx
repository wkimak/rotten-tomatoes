import React, { Component } from 'react';
import * as d3 from 'd3';

class LineGraph extends Component {

 componentDidMount() {
  this.drawGraph();
 }

 drawGraph() {

  const svg = d3.select('.line_graph').attr('height', '500px').attr('width', '50%');
  
  const xRange = d3.scaleLinear().range([40, 360]);
  const yRange = d3.scaleLinear().range([360, 40]);
  const xAxis = d3.axisBottom(xRange).tickFormat(function(d){ return d.x;});
  const yAxis = d3.axisLeft(yRange);

  svg.append('g').call(xAxis);
  svg.append('g').call(yAxis);
 }
   
  render() {
    return (
      <div>
        <svg className='line_graph'>
        </svg> 
      </div>
    )
  }
}


export default LineGraph;