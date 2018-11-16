import React, { Component } from 'react';
import SearchFilter from './SearchFilter';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <SearchFilter filter={this.props.filter} value="Senior" display="Senior"  />
        <SearchFilter filter={this.props.filter} value="Adult"  display="adult" />
        <SearchFilter filter={this.props.filter} value="Young"  display="young" />
        <SearchFilter filter={this.props.filter} value="Baby"   display="puppy" />
      </div>
    )
  }
}

export default Search;
