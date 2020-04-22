import React from 'react';
import Header from './header';
import Carousel from './carousel';
import About from './about';
import Project from './project';
import HireMe from './hire-me';

function App() {
    return (
        <div>
            <Header />
            <Carousel />
            <About />
            <Project />
            <HireMe />
        </div>
    );
}

export default App;