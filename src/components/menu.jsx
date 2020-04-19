import React from 'react';

function Menu() {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark menu-bg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#about">ABOUT</a>
                        <a className="nav-item nav-link" href="#">PROJECTS</a>
                        <a className="nav-item nav-link" href="#">HIRE ME</a>
                        <a className="nav-item nav-link" href="#">CONTACT</a>
                        <a className="nav-item nav-link" href="#">RESUME</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;