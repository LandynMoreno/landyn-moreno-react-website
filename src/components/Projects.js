import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My</p>
      <h1 class="title">Projects</h1> 
      <div class="experience-details-container">
          <div class="about-containers">
              <div class="details-container color-container">
                  <div class="article-container">
                      <img
                          src="./assets/project-1.png"
                          alt="Project 1"
                          class="project-img"
                      />
                  </div>
                  <h2 class="experience-sub-title project-title">Project One</h2>
                  <div class="btn-container">
                      <button
                          class="btn btn-color-2 project-btn"
                          onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                      >
                      Github
                      </button>
                      <button
                          class="btn btn-color-2 project-btn"
                          onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                      >
                      Live Demo
                      </button>
                  </div>
              </div>
              <div class="details-container color-container">
                  <div class="article-container">
                      <img
                          src="./assets/project-2.png"
                          alt="Project 2"
                          class="project-img"
                      />
                  </div>
                  <h2 class="experience-sub-title project-title">Project Two</h2>
                  <div class="btn-container">
                      <button
                          class="btn btn-color-2 project-btn"
                          onClick="location.href='https://github.com/LandynMoreno?tab=projects'"
                      >
                      Github
                      </button>
                      <button
                          class="btn btn-color-2 project-btn"
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
      class="icon arrow"
      onclick="location.href='./#contact'"
      />
    </section>
  );
}

export default Projects;