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
                    <h2 className="project-title">Odds Deviations</h2>
                    <h5 className="project-role">Software Engineer & Creator</h5>
                    <div className="article-container">
                        <img
                            src="./assets/odds-deviations.png"
                            alt="Odds Deviations User Interface"
                            className="project-img"
                        />
                    </div>
                    <p className="project-description">
                        Crafted with React, Python, and more, Odds Deviations is a tool designed for betting enthusiasts seeking to maximize
                        their wagering value. By allowing users to select specific player props, this tool analyzes and identifies the most advantageous bets.
                        It highlights discrepancies between daily fantasy sports (DFS) apps and traditional sportsbooks, pinpointing bets that are heavily favored
                        by sportsbooks yet undervalued on DFS platforms. With the strategic insights, bettors can exploit these
                        differences to their benefit, ensuring they place bets where the value surpasses the odds offered by sportsbooks.
                    </p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href='https://github.com/LandynMoreno/OddsDeviations'}
                        >
                        Github
                        </button>
                    </div>
                </div>
                <div className="details-container color-container imaged-projects">
                    <h2 className="project-title">Space Invaders</h2>
                    <h5 className="project-role">Software Engineer</h5>
                    <div className="article-container">
                        <img
                            src="./assets/space-invaders.jpg"
                            alt="Space Invaders"
                            className="project-img"
                        />
                    </div>
                    <p className="project-description">A classic arcade game revitalized with enhanced graphics, seamless movement, and slick audio. In this C/C++ powered rendition, players navigate through
                                                        increasingly challenging levels, utilizing 3 lives to fend off speedier invaders with precision shots. A dynamic scoring system adds to the excitement. This project
                                                        merges traditional gameplay with modern microcontroller technology, offering a nostalgic yet fresh gaming experience.</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href='https://youtu.be/5iyTjH0GTiM?t=8'}
                        >
                        Live Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className="centered-projects-container">
                <div className="details-container color-container text-only-proj">
                    <h2 className="project-title">PrivacyCheck</h2>
                    <h5 className="project-role">Frontend Lead</h5>
                    <p className="smaller-description">
                        As the front-end lead on a UT honors project, I steered the development of PrivacyCheck, a Chrome extension
                        that automates the evaluation of website privacy policies. This tool empowers users by providing graphical insights
                        such as privacy trend charts, dynamic site rankings, and actionable recommendations to navigate online spaces with
                        informed consent, significantly reducing user vulnerabilities.
                    </p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href='https://chromewebstore.google.com/detail/privacycheck/poobeppenopkcbjejfjenbiepifcbclg'}
                        >
                        Chrome Extension
                        </button>
                    </div>
                </div>
                <div className="details-container color-container text-only-proj">
                    <h2 className="project-title">Scalability of Blockchains</h2>
                    <h5 className="project-role">Author</h5>
                    <p className="smaller-description">
                        This research paper examines the crucial scalability challenges facing blockchain technology. The paper explores
                        strategies like Layer 2 solutions and sharding as innovative approaches
                        to enhance scalability. The review highlights the critical balance between scalability, security, and
                        decentralization within the blockchain trilemma, underscoring the necessity of scalability enhancements
                        for the technology's future growth and broader adoption.
                    </p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.open('./assets/Scalability Of Blockchains - Landyn Moreno.pdf')}
                        >
                        View Paper
                        </button>
                    </div>
                </div>
                <div className="details-container color-container text-only-proj">
                    <h2 className="project-title">Boosting Model Optimization</h2>
                    <h5 className="project-role">Machine Learning Engineer</h5>
                    <p className="smaller-description">
                        In a hands-on data science project, I delved into optimizing boosting models like XGBoost, CatBoost, and LightGBM
                        for a Kaggle competition, focusing on hyperparameter tuning and model stacking. This initiative included pre-processing
                        data, employing strategies such as random and grid search for parameter optimization, and creatively combining model
                        predictions to enhance performance.
                    </p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.open('./assets/Kaggle Competition Report.pdf')}
                        >
                        View Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <img 
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon projects-arrow"
        onClick={navigateToContact}
        />
        </section>
    );
}

export default Projects;
