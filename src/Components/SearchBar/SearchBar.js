import React from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';



export default function SearchBar() {
        return(
            <div className="SearchBarBody">
                <form className="container">
                    <input className="input" type="text" size="35" placeholder="city/zip/MLS#/Property# /lkjsdfg"></input>
                    <div class="dropdown">
                        <button class="dropbtn">Property Type</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Property Type</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Property Type</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Property Type</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Property Type</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Property Type</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div>
                    <button>Search</button>
                    <button>Map</button>

                    
                </form>

            </div>
        )
    
}