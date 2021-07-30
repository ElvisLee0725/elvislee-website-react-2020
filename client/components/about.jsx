import React from 'react';
import DownloadCV from './downloadCV-btn';

function About() {
  return (
    <section id='about' className='py-5 page-section--grey'>
      <div className='container'>
        <h2 className='text-center'>About Me</h2>
        <div className='row'>
          <div className='col-10 offset-1'>
            <div className='about__photo'>
              <img
                src='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/elvislee-profile.png'
                alt='Elvis Lee profile picture'
              />
            </div>
            <div>
              <p>
                Originally from Taipei, Taiwan, Elvis (Po Yi) Lee is working
                conscientiously to become a web developer. Yes, I am a fan of
                Elvis Presley and Rock 'n' Roll, and I do coding as well. I live
                in Irvine, California currently, and I'm interested in web
                technologies and very excited about being a web developer in the
                United States. Besides studying algorithm coding questions and developing
                my own website for experiment, I am also using new
                technologies such as Node.js, Express, React, Redux and MongoDB. I'm
                looking forward to entering this amazing industry and
                contributing my skills to create useful apps for everyone.
              </p>
              <DownloadCV />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
