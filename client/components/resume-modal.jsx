import React from 'react';

function ResumeModal() {
  return (
    <div className='resume-modal'>
      <div className='container resume-modal__container'>
        <div className='row'>
          <div className='col-12 col-sm-4'>
            <section className='mb-4'>
              <h3>ELVIS LEE</h3>
              <hr />
              <p>
                <i className='fa fa-map-marker fa-fw'></i>&nbsp;Orange County,
                CA
                <br />
                <i className='fa fa-phone fa-fw'></i>&nbsp;+1 (213) 880-5255
                <br />
                <i className='fa fa-envelope-o fa-fw'></i>
                &nbsp;elvislee0725@gmail.com
                <br />
              </p>
              <hr />
            </section>

            <section className='mb-5'>
              <h5>TECHNICAL SKILLS</h5>
              <div>
                <p>
                  <b>Programming Languages</b> <br />
                  JAVA, JavaScript (ES5/ES6), PHP, Python, C/C++, Ruby
                </p>
              </div>
              <div>
                <p>
                  <b>Libraries / Frameworks</b> <br />
                  React.js, Redux, Node.js, Express, PM2, Webpack, NPM, jQuery,
                  HTML5, CSS3, Bootstrap 4, SASS/SCSS, RESTful APIs, JSON,
                  MySQL, PostgreSQL, MongoDB, Firebase
                </p>
              </div>
              <div>
                <p>
                  <b>Tools</b> <br />
                  AWS, Nginx, WordPress, GitHub, VS Code, IntelliJ IDEA,
                  Postman, Meistertask, Figma, DB Designer
                </p>
              </div>
            </section>

            <section className='mb-5'>
              <h5>EDUCATION</h5>
              <div>
                <p>
                  <b>University of Southern California</b>
                  <span className='float-right'>Los Angeles, CA, USA</span>
                  <br />
                  Master of Science in Computer Science
                </p>
              </div>
              <div>
                <p>
                  <b>LearningFuze</b>
                  <span className='float-right'>Irvine, CA, USA</span>
                  <br />
                  Accelerated Web Development Program
                </p>
              </div>
            </section>
          </div>
          <div className='col-12 col-sm-8'>
            <section className='mb-5'>
              <h5>PROFESSIONAL EXPERIENCE</h5>
              <div>
                <p>
                  <b>PalPilot International Corp.</b>
                  <span className='float-right'>Tustin, CA, USA</span>
                  <br />
                  Web Developer / IT
                  <i>
                    <span className='float-right'>January 2016 – present</span>
                  </i>
                </p>
                <ul>
                  <li>
                    Redesign and construct a WordPress website for PalPilot
                    International Corp. to fulfill business requirements while
                    maintaining and updating the contents of the current WIX
                    version company website
                  </li>
                  <li>
                    Develop a front-end post managing function in WordPress
                    allowing users to create, update and delete a post without
                    logging into the WordPress CMS through RESTful APIs and Ajax
                  </li>
                  <li>
                    Refer the WordPress Codex to program customized post types
                    such as events and products with PHP
                  </li>
                  <li>
                    Implement sharing posts to Facebook with the Facebook API
                    and Web Dialog tools
                  </li>
                  <li>
                    Apply SendGrid API Libraries to send emails when user leaves
                    contact, notifying a new lead to follow up
                  </li>
                  <li>
                    Design a Unit Converter App to calculate units like length,
                    area, volume, weight, pressure and temperature according to
                    the user's inputs programmed in JAVA and apply JavaFX for
                    the UI and run on Windows OS
                  </li>
                  <li>
                    Assist the IT to manage employee accounts, email, and FTP to
                    maintain web hosting and database backups
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <h5>APPLICATIONS DEVELOPED</h5>
              <div>
                <p>
                  <b>Super Coupon Pocket</b> <br />A web app that users can keep
                  track of all coupons they have received easily so they will
                  never miss a deal
                </p>
                <ul>
                  <li>
                    Implemented a back-end server with Node.js and Express to
                    define RESTful API endpoints waiting for requests from the
                    user with a PostgreSQL database to store app data
                  </li>
                  <li>
                    Constructed the front-end of the app with React.js, styled
                    with SCSS and Bootstrap 4 utilizing Hooks such as useState
                    and useEffect from React 16.8 to use state without writing
                    class components
                  </li>
                  <li>
                    Applied JSON Web Token to realize user authentication which
                    is stored in localStorage after login
                  </li>
                  <li>
                    Configured Redux for managing app state with dispatched
                    actions and reducers
                  </li>
                  <li>
                    Implemented client side routing and private routes for
                    logged in users only with React Router DOM
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <b>Flashcard</b> <br />A flashcard app that users can manage
                  cards, review them one by one, and mark specific cards for
                  reviewing
                </p>
                <ul>
                  <li>
                    Utilized localStorage to store flashcards created by the
                    user on the user’s web browser
                  </li>
                  <li>
                    Demonstrated the front-end of the app with React.js and
                    provided user interaction and progress tracking
                  </li>
                  <li>
                    Adapted React Context to facilitate the passing of props
                    within the component tree
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <b>Fun Searcher</b> <br />
                  An event searching app for users to make customized search and
                  show results in a list and markers on the map
                </p>
                <ul>
                  <li>
                    Developed with JavaScript OOP, jQuery and applied
                    Ticketmaster API and Google Maps API
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className='resume-modal__close'>X</div>
    </div>
  );
}

export default ResumeModal;
