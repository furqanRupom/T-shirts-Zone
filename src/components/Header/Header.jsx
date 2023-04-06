import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center py-5 max-w-7xl mx-auto">
            <h2 className="text-xl font-bold">
                T - Shirts
            </h2>
            <nav className="flex space-x-4 items-center">

            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            </nav>

        </div>
    );
};

export default Header;