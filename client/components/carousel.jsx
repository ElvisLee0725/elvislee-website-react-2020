import React from 'react';

function Carousel() {
    return (
        <section id="cover">
            <div className="container-fluid">
                <div className="row">
                    <div id="elvisCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#elvisCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#elvisCarousel" data-slide-to="1"></li>
                            <li data-target="#elvisCarousel" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <picture>
                                    <source srcSet="images/cover-large.jpg" media="(min-width: 1380px)" />
                                    <source srcSet="images/cover-medium.jpg" media="(min-width: 990px)" />
                                    <source srcSet="images/cover-small.jpg" media="(min-width: 640px)" />
                                    <img src="images/cover-xs.jpg" className="d-block w-100" alt="Elvis Lee Site Cover" />
                                </picture>
                            </div>
                
                            <div className="carousel-item">
                                <picture>
                                    <source srcSet="images/rocker_cover-large.jpg" media="(min-width: 1380px)" />
                                    <source srcSet="images/rocker_cover-medium.jpg" media="(min-width: 990px)" />
                                    <source srcSet="images/rocker_cover-small.jpg" media="(min-width: 640px)" />
                                    <img src="images/rocker_cover-xs.jpg" className="d-block w-100" alt="Elvis Lee Rocker Cover" />
                                </picture>
                                <div>
                                    <div className="carousel-caption">
                                        <h3 className="large-hero__title">A Belief to Shine One Day</h3>
                                        <h4 className="large-hero__subtitle">Efforts weighs more than talents.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <picture>
                                    <source srcSet="images/coding_cover-large.jpg" media="(min-width: 1380px)" />
                                    <source srcSet="images/coding_cover-medium.jpg" media="(min-width: 990px)" />
                                    <source srcSet="images/coding_cover-small.jpg" media="(min-width: 640px)" />
                                    <img src="images/coding_cover-xs.jpg" className="d-block w-100" alt="Elvis Lee Coding Cover" />
                                </picture>
                                <div>
                                    <div className="carousel-caption">
                                        <h3 className="large-hero__title">A Programmer Life Style</h3>
                                        <h4 className="large-hero__subtitle">Code with passion and perseverance.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#elvisCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#elvisCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;