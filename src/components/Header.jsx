import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="container-header">
            <NavLink to="/" className="horizontal-menu">
                <span class> <strong> Home</strong></span>
            </NavLink>
            <NavLink to="/about" className="horizontal-menu">
                <span>About</span>
            </NavLink>
            <NavLink to="/news" className="horizontal-menu">
                <span>News</span>
            </NavLink>
            <NavLink to="/quiz" className="horizontal-menu">
                <span>Quiz</span>
            </NavLink>
            <NavLink to="/contact" className="horizontal-menu">
                <span>Contact</span>
            </NavLink>
        </div>
    );
}

export default Header;
