import React from 'react';

function Profile() {
  return (
    <section id="profile">
      <div class="section__pic-container profile-pic-container">
          <img src="./assets/landyn-image4.jpg" alt="Landyn Moreno profile picture"/>
      </div>

      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Landyn Moreno</h1>
        <p class="section__text__p2">Software Engineer</p>
        <div class="btn-container">
            <button 
              class="btn btn-color-2"
              onClick="window.open('./assets/Landyn_Moreno_Resume_2024.pdf')"
            >
              Download CV
            </button>
            <button 
              class="btn btn-color-1"
              onClick="location.href='./#contact'"
            >
              Contact Info
            </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://www.linkedin.com/in/landyn-moreno/'">
          </img>
          <img
            src="./assets/github.png"
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/LandynMoreno'">
          </img>
        </div>
      </div>
    </section>
  );
}

export default Profile;
