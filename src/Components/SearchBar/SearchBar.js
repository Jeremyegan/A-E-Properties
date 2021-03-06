import React from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';



export default function SearchBar() {
        return(
            <div className="SearchBarBody">
                <form className="container">
                    <input className="dropdown" style={{width: "110%"}} type="text" size="35" placeholder="City/Zip/MLS#/Property#"></input>
                    <div class="dropdown">
                        <button class="dropbtn">Property Type</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Price (min)</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Price (max)</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Bedrooms</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Baths</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <button class="dropdown" style={{backgroundColor: "rgb(231, 125, 143)", color: "white"}}>Search</button>
                    <button class="dropdown" style={{backgroundColor: "rgb(231, 125, 143)", color: "white"}}>Map</button>

                    
                </form>

            </div>
        )
    
}