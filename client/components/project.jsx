import React from 'react';
import SingleProject from './single-project';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.projectData = [
      {
        id: 1,
        title: 'Super Coupon Pocket',
        description:
          'React.js, Redux, Node.js, Express and PostgreSQL full-stack project',
        url: 'https://scp.elvislee.com/',
        img:
          'https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/super-coupon-pocket.jpg',
        imgAlt: 'SCP Cover',
      },
      {
        id: 2,
        title: 'The Small Circle Blog App',
        description: 'Node.js, Express and MongoDB creating an user login blog',
        url: 'https://blog-app-elvislee.herokuapp.com',
        img:
          'https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/small-circle.jpg',
        imgAlt: 'The Small Circle Cover',
      },
      {
        id: 3,
        title: 'Flashcard',
        description: 'React.js, React context and localStorage for data saving',
        url: 'https://flashcard.elvislee.com/',
        img:
          'https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/flashcard.jpg',
        imgAlt: 'Flashcard Cover',
      },
      {
        id: 4,
        title: 'Fun Searcher',
        description:
          'JavaScript OOP, jQuery, and integration of TicketMaster and Google Maps APIs',
        url: 'https://fun-searcher.elvislee.com/',
        img:
          'https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/fun-searcher.jpg',
        imgAlt: 'Fun Searcher Cover',
      },
    ];
  }

  render() {
    return (
      <section id='projects' data-internal-link='#projects-link'>
        <div className='row no-gutters'>
          {this.projectData.map((p) => {
            return <SingleProject key={p.id} data={p} />;
          })}
        </div>
      </section>
    );
  }
}

export default Project;
