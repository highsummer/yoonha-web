import React, { type ReactNode } from 'react';

interface SectionProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, className = '', children }) => {
  const isAbout = className.includes('about');

  if (isAbout) {
    return (
      <section className={`section ${className}`}>
        <h3 className="section-title">{title}</h3>
        {children}
      </section>
    );
  }

  return (
    <div className={`section-wrapper ${className}`}>
      <h3 className="section-title-outside">{title}</h3>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};
