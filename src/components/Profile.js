import React from 'react';

function Profile() {

  const addElfsightScript = () => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);
  };

  addElfsightScript();

  return (
    <section id="profile">
      <div className="section__pic-container profile-pic-container">
          <img src="./assets/landyn-image4.jpg" alt="Landyn Moreno profile picture"/>
      </div>

      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Landyn Moreno</h1>
        <p className="section__text__p2">Software Engineer</p>
        <div className="btn-container">
            <button 
              className="btn btn-color-2"
              onClick="window.open('./assets/Landyn_Moreno_Resume_2024.pdf')"
            >
              Download CV
            </button>
            <button 
              className="btn btn-color-1"
              onClick="location.href='./#contact'"
            >
              Contact Info
            </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onclick="location.href='https://www.linkedin.com/in/landyn-moreno/'">
          </img>
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onclick="location.href='https://github.com/LandynMoreno'">
          </img>
        </div>
        <div className="visitor-counter">
          <div className="elfsight-app-1030b1a8-ef30-4bcb-acbf-eefe6073c648" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
