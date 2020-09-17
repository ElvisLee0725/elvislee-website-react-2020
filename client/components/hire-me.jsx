import React from 'react';
import SingleProgressBar from './single-progress-bar';

class HireMe extends React.Component {
  constructor(props) {
    super(props);

    this.languages = [
      {
        name: 'JavaScript (ES5/ES6)',
        percent: '90',
      },
      {
        name: 'Java',
        percent: '80',
      },
      {
        name: 'Python',
        percent: '60',
      },
      {
        name: 'PHP',
        percent: '70',
      },
    ];

    this.frameworks = [
      {
        name: 'React.js',
        percent: '85',
      },
      {
        name: 'Express',
        percent: '80',
      },
      {
        name: 'Node.js',
        percent: '90',
      },
      {
        name: 'Bootstrap 4',
        percent: '95',
      },
    ];

    this.tools = [
      {
        name: 'MySQL / PostgreSQL',
        percent: '90',
      },
      {
        name: 'MongoDB / Firebase',
        percent: '85',
      },
      {
        name: 'GitHub',
        percent: '85',
      },
      {
        name: 'AWS',
        percent: '80',
      },
    ];
  }

  render() {
    return (
      <section id='hire-me' className='pt-5 pb-5 page-section--grey'>
        <div className='container'>
          <h2 className='text-center'>Hire Me!</h2>
          <div className='row'>
            <div className='col-10 offset-1 pt-4 pb-4'>
              <p>
                I am capable building a website that meets your need. From small
                scale websites with a built-in CMS such as WordPress, to large
                scale websites that require a development team with both
                front-end and back-end engineers working togehter. With version
                control tool experience like github / bitbucket, and knowledge
                from my MS Computer Science degree, I am ready to work with
                other experienced developers since I care not only to get things
                work, but also work efficiently with high performance!
              </p>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-4 skill-set'>
              <h4>Programming Languages</h4>
              {this.languages.map((lang) => (
                <SingleProgressBar key={lang.name} data={lang} />
              ))}
            </div>

            <div className='col-12 col-md-4 skill-set'>
              <h4>Frameworks</h4>
              {this.frameworks.map((frame) => (
                <SingleProgressBar key={frame.name} data={frame} />
              ))}
            </div>
            <div className='col-12 col-md-4 skill-set'>
              <h4>Dev Tools</h4>
              {this.tools.map((tool) => (
                <SingleProgressBar key={tool.name} data={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HireMe;
