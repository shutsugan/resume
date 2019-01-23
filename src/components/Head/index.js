import React from 'react';

import Logo from '../Logo';
import Hero from '../Hero';
import video from '../../assets/vids/dev.mp4';

import './index.css';

const Head = _ => (
  <header className="header">
    <video
      className="header__video"
      src={video}
      preload="true"
      autoPlay
      loop>

      Sorry, your browser doesn't support embedded videos.
    </video>
    <Logo />
    <Hero />
  </header>
);

export default Head;
