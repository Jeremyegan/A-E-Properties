import React from 'react';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Home.css';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';


const FrontPageSearch = styled.div`
height: 8vh;
width: 100vw;
background-color: rgba(32, 49, 33, 0.863);
box-shadow: 10px 0px 12px #17171fe3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;



function Home() {
  return (
    <div className="homebody">
      <header className="header">
          <Nav />

          <SearchForm />
            <section class="col-2 ss-style-halfcircle">
                <div class="column">

                </div>
                <div class="column text">

                </div>
            </section>
          <FrontPageSearch />
        
      </header>
    </div>
  );
}

export default Home;