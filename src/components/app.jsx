import React from 'react';
import Header from './header';
import Carousel from './carousel';
import About from './about';
import Project from './project';
import HireMe from './hire-me';
import Contact from './contact';
import ResumeModal from './resume-modal';
import ScrollUpBtn from './scroll-up-btn';

function App() {
    return (
        <div>
            <Header />
            <ScrollUpBtn />
            <Carousel />
            <About />
            <Project />
            <HireMe />
            <Contact />
            <ResumeModal />
        </div>
    );
}

export default App;