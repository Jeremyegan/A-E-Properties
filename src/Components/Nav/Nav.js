import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';



export default function Nav() {
        return(
            <ul className="navBody">
                <li className="link"><Link to="/">Home</Link></li>
                <li className="link"><Link to="/search">Search</Link></li>
                <li className="link"><Link to="/favorites">Favorites</Link></li>
                <p className="logo"> A<span className="span">&</span>E <span className="span">Properties</span> </p>
                <li className="link"><Link to="/mortgages">Mortgages</Link></li>
                <li className="link"><Link to="/blog">Blog Posts</Link></li>
                <li className="link"><Link to="/contact">Contact</Link></li>
            </ul>
        )
    
}