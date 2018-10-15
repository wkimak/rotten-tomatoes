import React, { Component } from 'react';

class DropDown extends Component {
  
  constructor(props) {
    super(props);

    this.state={ option: 'BarChar' }
  }

  handleChange(value) {
    this.setState({ option: value }, () => {
      this.props.toggleGraph(this.state.option);
    });
  }

  render() {
    return (
      <select onChange={ (e) => this.handleChange(e.target.value)}>
        <option value='BarChart'>Bar Chat</option>
        <option value='LineGraph'>Line Graph</option>
      </select>
    )
  }
}

export default DropDown;