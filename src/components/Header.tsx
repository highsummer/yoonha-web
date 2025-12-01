import React from 'react';
import { cvData } from '../data/cvData';

export const Header: React.FC = () => {
  const { profile } = cvData;

  return (
    <header className="header">
      <div className="profile-header">
        <img src="/portrait.png" alt="Portrait of Alex Doe" className="profile-initials" />
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p className="tagline">
            {profile.tagline.split(', ').map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && (
                  <>
                    , <br className="mobile-break" />
                  </>
                )}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="contact-info">
        {profile.email && (
          <a href={`mailto:${profile.email}`} className="contact-link">
            <img src="/email.png" alt="Email" className="contact-icon" /> {profile.email}
          </a>
        )}
        {profile.phone && (
          <a href={`tel:${profile.phone}`} className="contact-link">
            <i className="fas fa-phone"></i> {profile.phone}
          </a>
        )}
        {profile.github && (
          <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src="/github.png" alt="GitHub" className="contact-icon" /> {profile.github}
          </a>
        )}
        {profile.linkedin && (
          <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-linkedin"></i> {profile.linkedin}
          </a>
        )}
        {profile.location && (
          <span className="contact-link">
            <img src="/earth.png" alt="Location" className="contact-icon" /> {profile.location}
          </span>
        )}
      </div>
    </header>
  );
};
