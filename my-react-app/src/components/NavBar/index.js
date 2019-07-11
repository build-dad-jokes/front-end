import React from 'react'
import SearchBar from '../SearchBar';

const NavBar = () => {
    return (
        <div className='navbar'>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>Login</a>
                <a href='#'>Register</a>
                <a href='#'>Post</a>
            </nav>
            <SearchBar />
        </div>
    );
};

export default NavBar;