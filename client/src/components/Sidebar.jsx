import React, { Component } from 'react';
import { fetchBarChartData, genreIds } from '../service.js';
import axios from 'axios';

function Sidebar({ fetchFromService }) {


 const handleSubmit = (e) => {
   fetchFromService(genreIds[e.target.value]);
 }

  return (
    <div className='sidebar_container'>
      <div className='form_container'>
        <label htmlFor='genre'>
          Search Genre:
        </label>
        <select id='genre' onChange={ handleSubmit }>
          <option value='action'>Action</option>
          <option value='comedy'>Comedy</option>
          <option value='mystery'>Mystery</option>
          <option value='war'>War</option>
          <option value='horror'>Horror</option>
          <option value='documentary'>Documentary</option>
        </select>
      </div>  
    </div> 
  );
  
}

export default Sidebar;