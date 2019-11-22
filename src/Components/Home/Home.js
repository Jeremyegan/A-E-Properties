import React from 'react';
//import { Link } from 'react-router-dom';

import './Home.css';
import Nav from '../Nav/Nav';

function Home() {
  return (
    <div className="homebody">
      <header className="header">
          <Nav />
      </header>
    </div>
  );
}

export default Home;