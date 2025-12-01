import React from 'react';
import { ExperienceItem } from './components/ExperienceItem';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { TitleBar } from './components/TitleBar';
import { cvData } from './data/cvData';

const App: React.FC = () => {
  const { about, experience, education } = cvData;

  return (
    <div className="container">
      <TitleBar title="Yoonha Hwang" />
      
      <main>
        <Header />
        <Section title="About Me..." className="about">
          <p><span>{about}</span></p>
        </Section>

        <Section title="Latest News" className="news">
          {cvData.news.map((item) => (
            <div key={item.id} className="news-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                <h4 style={{ margin: 0 }}>{item.title}</h4>
                <span className="date" style={{ margin: 0 }}>{item.date}</span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </Section>

        <Section title="Publications" className="publications">
          {cvData.publications.map((item) => (
            <div key={item.id} className="publication-item">
              {item.imageUrl && (
                <div className="pub-image-container">
                  <img src={item.imageUrl} alt={item.title} className="pub-image" />
                </div>
              )}
              <div className="pub-content">
                <h4>{item.title}</h4>
                <div className="authors" style={{ marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>
                  {item.authors && item.authors.map((author, index) => (
                    <React.Fragment key={index}>
                      {author === "Yoonha Hwang" ? <strong>{author}</strong> : author}
                      {index < item.authors.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </div>
                <div className="pub-meta">
                  <span className="venue">{item.venue}</span>
                  <span className="separator">|</span>
                  <span className="date">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </Section>

        <Section title="Experience" className="experience">
          {experience.map((item) => (
            <ExperienceItem key={item.id} data={item} />
          ))}
        </Section>

        <Section title="Education" className="education">
          {education.map((item) => (
            <div key={item.id} className="education-item">
              <h4>{item.degree}</h4>
              <div className="edu-meta">
                <span className="institution">{item.institution}</span>
                <span className="date">{item.period}</span>
              </div>
            </div>
          ))}
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
