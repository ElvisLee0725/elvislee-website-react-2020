import React from 'react';
import Header from './header';
import Carousel from './carousel';
import About from './about';
import Project from './project';
import HireMe from './hire-me';
import Contact from './contact';

function App() {
    return (
        <div>
            <Header />
            <Carousel />
            <About />
            <Project />
            <HireMe />
            <Contact />
        </div>
    );
}

export default App;