import React from 'react';

function ResumeModal() {
    return (
        <div className="resume-modal">
            <div className="container resume-modal__container">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <h3>ELVIS LEE</h3>
                        <hr />
                        <p>
                            <i className="fa fa-map-marker"></i>&nbsp;16012 Legacy Rd, Tustin, CA 92782 <br/>
                            <i className="fa fa-phone"></i>&nbsp;+1 (213) 880-5255 <br/>
                            <i className="fa fa-envelope-o"></i>&nbsp;elvislee0725@gmail.com <br/>
                        </p>
                        <hr />
                    </div>
                    <div className="col-12 col-sm-8">
                    
                    </div>
                </div>
            </div>
            <div className="resume-modal__close">X</div>
        </div>
    );
}

export default ResumeModal;