import React from 'react';

import './index.css';

const Icon = ({path, children}) => (
  <a
    className="icons"
    rel="noopener noreferrer"
    target="_blank"
    href={path}>

    {children}
  </a>
);

export default Icon;
