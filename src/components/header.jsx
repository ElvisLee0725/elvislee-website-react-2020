import React from 'react';
import throttle from 'lodash/throttle';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.siteHeader;
        this.events();
    }
    
    componentDidMount() {
        this.siteHeader = document.getElementById('navbar-elvislee');
    }

    events() {
        window.addEventListener("scroll", throttle(() => {
            this.headerScroll();
        }, 200));
    }

    headerScroll() {
        if(window.scrollY > 70) {
            this.siteHeader.classList.add("menu-bg--dark");
        }
        else {
            this.siteHeader.classList.remove("menu-bg--dark");
        }
    }
    
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark menu-bg" id="navbar-elvislee">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#about">ABOUT</a>
                            <a className="nav-item nav-link" href="#projects">PROJECTS</a>
                            <a className="nav-item nav-link" href="#hire-me">HIRE ME</a>
                            <a className="nav-item nav-link" href="#">CONTACT</a>
                            <a className="nav-item nav-link" href="#">RESUME</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;