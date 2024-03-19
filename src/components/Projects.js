import React from 'react';

function Projects() {

    const navigateToContact = () => {
        window.location.href = './#contact';
    };

    return (
        <section id="projects">
        <p className="section__text__p1">Browse My</p>
        <h1 className="title">Projects & Papers</h1> 
        <div className="experience-details-container">
            <div className="centered-projects-container">
                <div className="details-container color-container imaged-projects">
                    <h2 className="experience-sub-title project-title">Odds Deviations</h2>
                    <h5 className="project-role">Software Engineer & Creator</h5>
                    <div className="article-container">
                        <img
                            src="./assets/space-invaders.jpg"
                            alt="Odds Deviations User Interface Image"
                            className="project-img"
                        />
                    </div>
                    <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Live Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-container imaged-projects">
                    <h2 className="experience-sub-title project-title">Space Invaders</h2>
                    <h5 className="project-role">Software Engineer & Creator</h5>
                    <div className="article-container">
                        <img
                            src="./assets/space-invaders.jpg"
                            alt="Space Invaders Image"
                            className="project-img"
                        />
                    </div>
                    <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Live Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className="about-containers">
                <div className="details-container color-container">
                    <h2 className="experience-sub-title project-title">PrivacyCheck</h2>
                    <h5 className="project-role">Frontend Lead</h5>
                    <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Live Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <h2 className="experience-sub-title project-title">Scalability of Blockchains</h2>
                    <h5 className="project-role">Author</h5>
                    <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Live Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <h2 className="experience-sub-title project-title">Binary Classifier Model</h2>
                    <h5 className="project-role">Machine Learning Engineer</h5>
                    <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                        >
                        Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <img 
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={navigateToContact}
        />
        </section>
    );
}

export default Projects;
