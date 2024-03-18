import React from 'react';

function About() {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
          <div class="section__pic-container">
            <img
                src="./assets/about-pic.png"
                alt = "Profile Picture"
                class="about-pic"
            />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
                <div class="details-container">
                    <img src="./assets/experience.png" alt="experience icon"
                    class="icon"
                    />
                    <h3>Work Experience</h3>
                    <div>
                        <p>
                            <ul class="experience-list">
                                <li class="experience-list-item">OpenLending - <p>Junior Software Developer Intern</p></li>
                                <li class="experience-list-item">Socies - <p>Co-Founder / Software Engineer</p></li>    
                            </ul>
                        </p>                              
                    </div>
                </div>
                <div class="details-container">
                    <img src="./assets/grad-cap.png" alt="education icon"
                    class="icon"
                    />
                    <div class="education-text">
                        <p class="school">The University of Texas, Austin</p>
                        <p class="degree">B.S. Electrical & Computer Engineering</p>
                    </div>
                </div>
            </div>
            <div class="text-container">
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
          class="icon arrow"
          onclick="location.href='./#experience'"
      />
    </section>
  );
}

export default About;
