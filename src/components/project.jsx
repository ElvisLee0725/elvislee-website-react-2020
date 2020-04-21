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
                title: 'JavaScript Snake Game',
                description: '',
                url: '//codepen.io/elvislee/pen/jKLKGq',
                img: '/images/snake.jpg',
                imgAlt: 'Snake Game Cover'
            },
            {
                id: 3,
                title: 'Weather Master',
                description: '',
                url: '//www.elvislee.com/WeatherMaster',
                img: '/images/weathermaster.jpg',
                imgAlt: 'Weather Master Cover'
            },
            {
                id: 4,
                title: 'JavaScript Ping-Pong Game',
                description: '',
                url: '//codepen.io/elvislee/pen/qxoBYj',
                img: '/images/ping-pong.jpg',
                imgAlt: 'Ping-Pong Cover'
            }
        ];
    }

    render() {

        return (
            <section id="projects" data-internal-link="#projects-link">
                <div class="row no-gutters">
                    { this.projectData.map((p) => {
                        return <SingleProject key={p.id} data={p} />;
                    }) }
                </div>
            </section>
        );
    }
}

export default Project;