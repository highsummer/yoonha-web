import React from 'react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} {cvData.profile.name}. All rights reserved.</p>
    </footer>
  );
};
