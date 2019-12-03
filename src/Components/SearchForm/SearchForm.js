import React from 'react';
import styled from 'styled-components';


const Box = styled.div`
background-color: white;
height: 55vh;
width: 30vw;
margin-right: 25vw;
color: rgba(32, 49, 33, 0.863);
border-radius: 10px;
box-shadow: 0px 0px 15px #17171fe3;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 15px 0px 15px 0px;
`;

const Title = styled.h1`
font-family: Arial, Helvetica, sans-serif;
font-weight: 100;
font-size: 25px;
color: rgba(24, 24, 32, 0.89);
`



export default function SearchForm() {
    return (
        <div>
            <Box>
              <Title>Search for Real Estate</Title>
            <form className="frontpageform">
                    <input className="frontpagedropdown" type="text" size="35" placeholder="City/Zip/MLS#/Property#"></input>
                    <div class="frontpagedropdown">
                        <button class="dropbtn">Property Type</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div className="section1">
                    <div class="frontpagedropdown">
                        <button class="dropbtn">Price (min)</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="frontpagedropdown">
                        <button class="dropbtn">Price (max)</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    </div>
                    <div className="section1">
                    <div class="frontpagedropdown">
                        <button class="dropbtn">Bedrooms</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="frontpagedropdown">
                        <button class="dropbtn">Baths</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    </div>
                    <button class="frontpagedropdown" style={{backgroundColor: "rgb(231, 125, 143)", color: "white"}}>Search</button>
                    <button class="frontpagedropdown" style={{backgroundColor: "rgb(231, 125, 143)", color: "white"}}>Map</button>

                    
                </form>
            </Box>

        </div>
    )
}