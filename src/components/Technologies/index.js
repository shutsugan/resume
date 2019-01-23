import React from 'react';

import TechnologiesList from '../TechnologiesList';
import { dataToDayComfort, experienceWith } from '../../data';

import './index.css';



const Technologies = _ => (
  <div className="technologies">
    <h2 className="technologies__title">Technologies</h2>
    <TechnologiesList title="Day-to-day comfort" list={dataToDayComfort} />
    <TechnologiesList title="Experience With" list={experienceWith} />
  </div>
);

export default Technologies;
