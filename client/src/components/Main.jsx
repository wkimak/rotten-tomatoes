import React from 'react';
import BarChart from './charts/BarChart.jsx';

function Main(props) {
  return (
    <div className='main_container'>
      { props.children }
    </div>
  )
}

export default Main;