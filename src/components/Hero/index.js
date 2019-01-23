import React from 'react';

import resume from '../../assets/resume/resume.pdf';

import './index.css';

const Hero = _ => (
  <div className="header__hero">
    <small className="header__small">fint out more about me in the resume</small>
    <h1 className="header__title">get to know me a little deeper</h1>
    <a className="button" href={resume} download>DOWNLOAD RESUME</a>
  </div>
);

export default Hero;
