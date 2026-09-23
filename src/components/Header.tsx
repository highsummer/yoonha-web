import React from "react";
import { cvData } from "../data/cvData";

export const Header: React.FC = () => {
  const { profile } = cvData;

  return (
    <header className="header">
      <div className="profile-header">
        <img
          src="/assets/portrait.png"
          alt="Portrait of Yoonha Hwang"
          className="profile-initials"
        />
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p className="tagline">
            {profile.tagline.split(", ").map((part, index, array) => (
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
            <img src="/icons/email.png" alt="Email" className="contact-icon" />{" "}
            {profile.email}
          </a>
        )}
        {profile.phone && (
          <a href={`tel:${profile.phone}`} className="contact-link">
            <i className="fas fa-phone"></i> {profile.phone}
          </a>
        )}
        {profile.blog && (
          <a
            href={`https://${profile.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <img src="/icons/blog.png" alt="Blog" className="contact-icon" />{" "}
            {profile.blog}
          </a>
        )}
        {profile.location && (
          <span className="contact-link">
            <img
              src="/icons/earth.png"
              alt="Location"
              className="contact-icon"
            />{" "}
            {profile.location}
          </span>
        )}
      </div>
    </header>
  );
};
