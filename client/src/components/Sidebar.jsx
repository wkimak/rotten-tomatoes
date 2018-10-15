import React, { Component } from 'react';
import axios from 'axios';

class Sidebar extends Component {

  constructor() {
    super();

    this.state = { title: '' }
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchBarChartData(this.state.title);
  }

  render() {

    return (
      <div className='sidebar_container'>
        <form className='form_container' onSubmit={ (e) => this.handleSubmit(e) }>
          <label htmlFor='title'>
            Search Movie:
          </label>
          <input id='title' type='text' value={ this.state.title } onChange={ (e) => this.handleChange(e) } />
          <input type='submit' value='Submit' />
        </form>
      </div> 
    );
  }
}

export default Sidebar;