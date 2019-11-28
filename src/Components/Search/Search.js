import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';

import './Search.css';

class Search extends Component {
  render() {
    return (
        <div className="searchbody">
          <Nav />
          <br />
          <SearchBar />
        </div>
      );
  }
}

export default Search;