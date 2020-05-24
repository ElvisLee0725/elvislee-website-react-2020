import React from 'react';
import SingleProject from './single-project';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.projectData = [
            {
                id: 1,
                title: 'PalPilot International Corp',
                description: '',
                url: '//www.palpilot.com',
                img: '/images/palpilot.jpg',
                imgAlt: 'PalPilot Cover'
            },
            {
                id: 2,
                title: 'The Small Circle Blog App',
                description: 'Node.js, Express and MongoDB creating an user login blog.',
                url: 'https://blog-app-elvislee.herokuapp.com',
                img: '/images/small-circle.jpg',
                imgAlt: 'The Small Circle Cover'
            },
            {
                id: 3,
                title: 'Flash Cards',
                description: 'React.js, context and localStorage for data saving.',
                url: 'https://www.elvislee.com/FlashCards',
                img: '/images/flash-cards.jpg',
                imgAlt: 'Flash Cards Cover'
            },
            {
                id: 4,
                title: 'Fun Searcher',
                description: 'OOP javascript with integration of 3rd party apis.',
                url: 'https://elvislee.com/FunSearcher',
                img: '/images/fun-searcher.jpg',
                imgAlt: 'Fun Searcher Cover'
            }
        ];
    }

    render() {

        return (
            <section id="projects" data-internal-link="#projects-link">
                <div className="row no-gutters">
                    { this.projectData.map((p) => {
                        return <SingleProject key={p.id} data={p} />;
                    }) }
                </div>
            </section>
        );
    }
}

export default Project;