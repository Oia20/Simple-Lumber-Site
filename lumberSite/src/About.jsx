import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
    <section id="about" className="about">
      <img src={"./pixelcut-export.jpeg"} alt="About Us" className="about-image" />
      <div className="about-content">
        <h2>About</h2>
        <p>Hi, I'm Rob Shaw, husband and father of 6. We are a small, family-owned lumber business dedicated to providing high-quality lumber for all your building projects. We are committed to excellent customer service and fair prices.</p>
      </div>
    </section>
    <div className='divider'></div>

    </>
  );
};

export default About;
