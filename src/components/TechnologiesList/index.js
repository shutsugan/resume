import React from 'react';

import './index.css';

const TechnologiesList = ({title, list}) => {
  const sectionList = list.map(item => <li key={item}>{item}</li>);

  return (
    <div className="technologies__section">
      <h3 className="technologies__section-title">{title}</h3>
      <ul className="technologies__list">{sectionList}</ul>
    </div>
  );
};

export default TechnologiesList;
