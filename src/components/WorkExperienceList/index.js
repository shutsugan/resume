import React from 'react';

import './index.css';

const WorkExperienceList = ({title, position, description}) => (
  <div className="work-experience__section">
    <h3 className="work-experience__section-title">{title}</h3>
    <div className="work-experience__description">
      <div className="work-experience__company">{position}</div>
      {description}
    </div>
  </div>
);

export default WorkExperienceList;
