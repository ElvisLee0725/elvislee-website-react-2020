import React from 'react';

function SingleProject(props) {
    return (
        <div className="col-12 col-sm-6">
            <a className="portfolio-box" href={`\\${props.data.url}`} target="_blank">
                <img src={props.data.img} className="img-fluid" alt={props.data.imgAlt} />
                <div className="portfolio-box__overlay portfolio-box__overlay--bgDarkGrey">              
                    <div className="portfolio-box__caption">
                    <p>{props.data.title}</p>
                    </div>
                </div>  
            </a>  
        </div>
    );
}

export default SingleProject;
