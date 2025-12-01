import React from 'react';
import type { SkillCategory } from '../data/cvData';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  return (
    <div className="skills-grid">
      {categories.map((category) => (
        <div key={category.id} className="skill-category">
          <h5>{category.title}</h5>
          <div className="tags">
            {category.skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
