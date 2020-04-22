import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles/styles.scss';
import RevealOnScroll from './modules/revealOnScroll';

ReactDOM.render(<App />, document.getElementById('root'));

// Run reveal effects at selected items after DOM is rendered
new RevealOnScroll(document.querySelectorAll('.about__photo'), 75);
new RevealOnScroll(document.querySelectorAll('.skill-set'), 75)