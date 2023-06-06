import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <img src={logo} alt="" id="mainLogo" />
                    </div>
                    <div className="nav-bar">
                        <ul className="list">
                            <Link to="/">Kreu</Link>
                            <Link to="/kandidatetLokal">Zgjedhje Lokale</Link>
                            <Link to="/about">Rreth Nesh</Link>
                            <Link to="/contact">Kontakti</Link>
                            <Link to="/article">Lajme</Link>
                            <Link to="/register">Regjistrohu</Link>
                        </ul>
                    </div>
                    <div className="toggle-switch">
                        <span className="sq">SQ</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span className="en">EN</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;