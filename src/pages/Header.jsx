import React from 'react'
import NavListItem from '../components/NavListItem';
import NavListData from '../data/NavListData'
import './header.css';
import Search from '../components/Search';
import Button from '../components/Button';

function Header() {
    return  (
        <header>
            <a href="/" className="logo">CENTURY CINEMAX</a> 
            <ul className='nav'> 
            {
                // Add NavListItem components here
                NavListData.map(nav => {
                    return <NavListItem key={nav._id} nav={nav} />;
                })
            }
            <Search /> 
            <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign in"/>    
                </ul>
        </header>
    )
}

export default Header; 