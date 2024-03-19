import React from 'react';

function About() {

    const navigateToExperience = () => {
        window.location.href = './#experience';
    };


  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
          <div className="section__pic-container">
            <img
                src="./assets/about-pic.jpg"
                alt = "Profile Picture"
                className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
                <div className="details-container">
                    <img src="./assets/experience.png" alt="experience icon"
                    className="icon"
                    />
                    <h3>Work Experience</h3>
                    <div>
                        <p>
                            <ul className="experience-list">
                                <li className="experience-list-item">OpenLending - <p>Junior Software Developer Intern</p></li>
                                <li className="experience-list-item">Socies - <p>Co-Founder / Software Engineer</p></li>    
                            </ul>
                        </p>                              
                    </div>
                </div>
                <div className="details-container">
                    <img src="./assets/grad-cap.png" alt="education icon"
                    className="icon"
                    />
                    <div className="education-text">
                        <p className="school">The University of Texas, Austin</p>
                        <p className="degree">B.S. Electrical & Computer Engineering</p>
                    </div>
                </div>
            </div>
            <div className="text-container">
                <p>
                    Throughout my time as a Longhorn, I worked to build multiple web apps with 
                    the mentorship of professors and internship programs. These experiences led me to begin
                    a start-up venture with my best friends. Feel free to learn more by viewing my CV/Resume.
                </p>
            </div>
          </div>
      </div>
      <img 
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={navigateToExperience}
      />
    </section>
  );
}

export default About;
