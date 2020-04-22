import React from 'react';

function SingleProgressBar(props) {
    return (
        <div>
            <span>{props.data.name}</span>
            <div className="progress">
                <div style={{ width: `${props.data.percent}%`}} className="progress-bar progress-bar--red bar-grow" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}

export default SingleProgressBar;