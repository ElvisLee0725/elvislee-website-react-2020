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
          'Users can keep track of all coupons they have received easily so they will never miss a good deal',
        skills:
          'React.js, Redux, Node.js, Express and PostgreSQL full-stack project',
        sourceCode: 'https://github.com/ElvisLee0725/super-coupon-pocket',
        url: 'https://scp.elvislee.com/',
        img:
          'https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/super-coupon-pocket.jpg',
        imgAlt: 'SCP Cover',
      },
      {
        id: 2,
        title: 'The Small Circle',
        description:
          'Users can create, edit, delete posts and follow other users in this blog app',
        skills: 'Node.js, Express and MongoDB with personal account to login',
        sourceCode: 'https://github.com/ElvisLee0725/blog-app',
        url: 'https://blog-app-elvislee.herokuapp.com',
        img:
          'https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/small-circle.jpg',
        imgAlt: 'The Small Circle Cover',
      },
      {
        id: 3,
        title: 'Flashcard',
        description:
          'Users can create, update, delete, mark important and review his flashcards',
        skills: 'React.js, React context and localStorage for data saving',
        sourceCode: 'https://github.com/ElvisLee0725/flashcard',
        url: 'https://flashcard.elvislee.com/',
        img:
          'https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/flashcard.jpg',
        imgAlt: 'Flashcard Cover',
      },
      {
        id: 4,
        title: 'Fun Searcher',
        description:
          'Users can do customized search for events in the US that they can buy tickets to enjoy a great time',
        skills:
          'JavaScript OOP, jQuery, AJAX, TicketMaster and Google Maps APIs',
        sourceCode: 'https://github.com/ElvisLee0725/fun-searcher',
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
