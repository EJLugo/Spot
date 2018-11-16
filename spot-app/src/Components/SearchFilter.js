import React, { Component } from 'react';

class SearchFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input type="checkbox" name={this.props.name} onClick={this.props.filter} />
        <span>{this.props.display}</span>
      </label>
    )
  }
}

export default SearchFilter;
