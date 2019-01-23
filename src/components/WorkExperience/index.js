import React from 'react';

import WorkExperienceList from '../WorkExperienceList';
import { workingExperience } from '../../data';

import './index.css';

const WorkExperience = _ => {
  const experienceList = workingExperience.map((experience, index) => (
    <WorkExperienceList
      key={index}
      title={experience.title}
      position={experience.position}
      description={experience.description}
    />
  ));
  
  return (
    <div className="work-experience">
      <h2 className="work-experience__title">Work Experience</h2>
      {experienceList}
    </div>
  );
}

export default WorkExperience;
