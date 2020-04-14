import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link className="brand-logo" to='/'>TrainingPal</Link>
                <ul className="right">
                    <li><Link className="nav-item" to="/">About</Link></li>
                    <li><Link className="nav-item" to="/activities">Activities</Link></li>
                    <li><Link className="nav-item" to="/">Login</Link></li>
                    <li><Link className="nav-item" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;