import React from 'react';
//import { Link } from 'react-router-dom';

import './Home.css';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';

function Home() {
  return (
    <div className="homebody">
      <header className="header">
          <Nav />
          <SearchBar />
      </header>
    </div>
  );
}

export default Home;