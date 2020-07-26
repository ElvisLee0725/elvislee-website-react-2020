import React from 'react';

function ResumeModal() {
  return (
    <div className='resume-modal'>
      <div className='container resume-modal__container'>
        <div className='row'>
          <div className='col-12 col-sm-4'>
            <h3>ELVIS LEE</h3>
            <hr />
            <p>
              <i className='fa fa-map-marker'></i>&nbsp;Orange County, CA
              <br />
              <i className='fa fa-phone'></i>&nbsp;+1 (213) 880-5255 <br />
              <i className='fa fa-envelope-o'></i>&nbsp;elvislee0725@gmail.com{' '}
              <br />
            </p>
            <hr />
          </div>
          <div className='col-12 col-sm-8'>
            <section className='mb-5'>
              <h5>EDUCATION</h5>
              <div>
                <p>
                  <b>UNIVERSITY of SOUTHERN CALIFORNIA</b>{' '}
                  <span className='float-right'>Los Angeles, CA, USA</span>
                  <br />
                  Master of Science in Computer Science{' '}
                  <i>
                    <span className='float-right'>January 2015</span>
                  </i>
                </p>
              </div>
              <div>
                <p>
                  <b>NATIONAL TSING HUA UNIVERSITY</b>
                  <span className='float-right'>Hsinchu, Taiwan</span>
                  <br />
                  Continuing Education in Computer Science{' '}
                  <i>
                    <span className='float-right'>June 2012</span>
                  </i>
                </p>
              </div>
            </section>

            <section className='mb-5'>
              <h5>SKILLS</h5>
              <div>
                <p>
                  <b>Programming Languages</b> <br />
                  JavaScript, JAVA, PHP, Python, C/C++
                </p>
              </div>
              <div>
                <p>
                  <b>Web Frameworks</b> <br />
                  Node.js, React, Express, Webpack
                </p>
              </div>
              <div>
                <p>
                  <b>Web Development</b> <br />
                  HTML5, CSS3, Bootstrap, jQuery, JSON, AJAX
                </p>
              </div>
              <div>
                <p>
                  <b>Database</b> <br />
                  MySQL, PostgreSQL, MongoDB, Firebase
                </p>
              </div>
              <div>
                <p>
                  <b>Other Tools</b> <br />
                  GitHub, Bitbucket, AWS, WordPress
                </p>
              </div>
            </section>
            <section className='mb-5'>
              <h5>EXPERIENCE</h5>
              <div>
                <p>
                  <b>PalPilot International Corp.</b>{' '}
                  <span className='float-right'>Tustin, CA, USA</span>
                  <br />
                  Web Developer / IT
                  <i>
                    <span className='float-right'>January 2016 – present</span>
                  </i>
                </p>
                <ul>
                  <li>
                    Assisted design and implemented company website. Maintaining
                    and updating the contents after its finished.
                  </li>
                  <li>
                    Integrated SendGrid email API to the company website to get
                    email notification when visitors showing interests to get in
                    touch.
                  </li>
                  <li>
                    Implemented front-end animations and user interactions such
                    as product carousel, cookies setup and check for improving
                    user experience, and real-time search using customized CSS3,
                    JavaScript, jQuery, and PHP.
                  </li>
                  <li>
                    Implemented a managing blog posts function on the website
                    front-end. Users can do Create, Update and Delete without
                    going to the back-end by RESTful APIs and Ajax. Verifying
                    logged in users with Nonce.
                  </li>
                  <li>
                    Generated customized post types such as events and products
                    with PHP and referring WordPress Codex.
                  </li>
                  <li>
                    Installed, modified, and created WordPress plugins for the
                    website to implement customized functions such as image
                    lightbox and product portfolio.
                  </li>
                  <li>
                    Implemented sharing website posts to Facebook function with
                    the Facebook API and Web Dialog tools.
                  </li>
                  <li>
                    Applied media queries and Bootstrap grid system to reach the
                    RWD on all kinds of web browsing devices.
                  </li>
                  <li>
                    Created a Converter App to calculate all related units in
                    length, area, volume, weight, pressure or temp when user
                    makes an input. Programmed in JAVA, applied JavaFX for UI
                    and run on Windows OS.
                  </li>
                  <li>
                    Analyzed the HTTP requests made while website connecting and
                    optimized the loading speed of the website to reduce the
                    waiting time and improve the fully loaded time by 40%,
                    taking around 3 seconds.
                  </li>
                  <li>
                    Solving website loading speed slow issue in China by
                    migrating site to a new host and applying CDN.
                  </li>
                  <li>
                    Implemented SEO with related keywords for each page and
                    sufficient contents, uploaded XML Sitemap to Google Search
                    Console, added external links from major social media sites
                    to the company website.
                  </li>
                  <li>
                    Complied with EU GDPR and other Internet user privacy
                    policies by updating cookies policy, privacy policy and
                    terms of use. Installed SSL providing visitors a more secure
                    connection when submitting info.
                  </li>
                  <li>
                    Assisted the IT department for managing employee accounts,
                    Intranet domain, email, and FTP. Installed and troubleshot
                    hardware and software within the office. Maintained web host
                    and database backups.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <b>Information Science Institute</b>{' '}
                  <span className='float-right'>Los Angeles, CA, USA</span>
                  <br />
                  Android Development Intern
                  <i>
                    <span className='float-right'>
                      January 2015 – July 2015
                    </span>
                  </i>
                </p>
                <ul>
                  <li>
                    Assisted developing an Android app facilitating the share of
                    news in countries with limited Internet access.
                  </li>
                  <li>
                    Added functions such as downloading only popular news, and
                    enable news being shared on another device.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <b>My Eye Media</b>{' '}
                  <span className='float-right'>Los Angeles, CA, USA</span>
                  <br />
                  Web Developer Summer Intern
                  <i>
                    <span className='float-right'>June 2014 – August 2014</span>
                  </i>
                </p>
                <ul>
                  <li>
                    Built a PHP and JavaScript based online quiz for Quality
                    Control department interns. User profile and answers are
                    saved in MySQL database on AWS EC-2. It saves manpower from
                    manually checking answers paper by paper and speeds up the
                    recruitment process.
                  </li>
                  <li>
                    Built a website for registered users to log in to the
                    database and search for information through keywords or a
                    range of time period. It facilitates company staff and
                    clients to retrieve data and monitor jobs done online.
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <h5>PROJECTS</h5>
              <div>
                <p>
                  <b>Personal Website Re-modal:</b> Updated my site with
                  Node.js, React for front-end, Express for back-end and Git for
                  version control.
                </p>
                <ul>
                  <li>
                    Applied Node.js as the web development tool to implement
                    automation and organization of my website. Utilized NPM to
                    facilitate web development packages installation and version
                    control.
                  </li>
                  <li>
                    Wrote OOP JavaScript to realize effects such as scroll to
                    fade-in and modal. Installed Babel to write ES6 JavaScript.
                  </li>
                  <li>
                    Utilized Webpack to bundle all JS and SCSS files into one
                    file for JavaScript and CSS in production.{' '}
                  </li>
                  <li>
                    Implemented a mobile-first website that loads faster on
                    mobile devices by serving smaller size images. Built website
                    responsive to different sizes of screens.
                  </li>
                  <li>
                    Applied CSS naming method B.E.M. and wrote organized CSS
                    files with SCSS.
                  </li>{' '}
                </ul>
              </div>
              <div>
                <p>
                  <b>Show Me Restaurants:</b> An Android app lists restaurants
                  nearby the current location of user’s mobile phone.
                </p>
                <ul>
                  <li>
                    Imported and parsed restaurants information including image,
                    rating, address and style from Yelp API.
                  </li>
                  <li>
                    Implemented an Android app to provide a list view and a map
                    view of the restaurant when it’s selected.
                  </li>
                  <li>
                    Built another demo version of this app with a database
                    (MySQL) hosted on Amazon EC-2. This web service will sort
                    and provide restaurant list according to the user’s visit
                    history and favorite.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <b>Weather Master Web App:</b> Aimed to provide weather
                  information for web and Android users.
                </p>
                <ul>
                  <li>
                    Built a website backend with PHP/Java Servlet to parse
                    weather information from Yahoo Weather RSS.
                  </li>
                  <li>
                    Implemented a front-end demonstrating result from retrieved
                    JSON object and applied JavaScript to parse the local time
                    and showing day or night background images accordingly.
                  </li>
                  <li>
                    Designed an Android app version to perform similar tasks and
                    support Facebook share with its SDK.
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
