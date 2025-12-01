import React from 'react';
import type { Experience } from '../data/cvData';

interface ExperienceItemProps {
  data: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
  return (
    <div className="experience-item">
      <div className="exp-header">
        <h4>{data.role} <span className="separator">|</span> <span className="company">{data.company}</span></h4>
        <span className="date">{data.period}</span>
      </div>
      <ul className="exp-details">
        {data.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};
