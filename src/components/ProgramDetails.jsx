import React from 'react';
import './ProgramDetails.css';
import { program, links, site } from '../siteContent.js';

const hide = (e) => (e.currentTarget.style.display = 'none');

export default function ProgramDetails() {
  return (
    <div className="program-details-container">
      <section className="program-hero-section" style={{ backgroundImage: `url(${site.heroImage}), linear-gradient(135deg, #2f4a3a 0%, #5d7a5f 55%, #a5683f 100%)` }}>
        <div className="program-overlay" />
        <div className="program-content">
          <div className="program-title-section">
            <h1 className="program-page-title">PROGRAM DETAILS</h1>
          </div>
        </div>
      </section>

      <div className="main-content">
        {program.theme && (
        <section className="theme-section">
          <h2 className="section-title">Theme: {program.theme}</h2>
          <div className="theme-grid">
            <div className="theme-image-column">
              <img src={program.themePoster} alt="Theme poster" className="theme-poster" onError={hide} />
            </div>
            <div className="theme-text-column">
              {program.themeParagraphs.map((p, i) => (
                <p key={i} className="theme-description">{p}</p>
              ))}
            </div>
          </div>
        </section>
        )}

        <section className="content-section">
          <h2 className="section-title">Speakers</h2>
          <ul className="speakers-list">
            {program.speakers.map((s, i) => (
              <li key={i}><em>{s.name}</em>{s.bio ? <> &ndash; {s.bio}</> : null}</li>
            ))}
          </ul>
        </section>

        {program.reciters.length > 0 && (
          <section className="content-section">
            <h2 className="section-title">Reciters</h2>
            <ul className="speakers-list">
              {program.reciters.map((r, i) => (
                <li key={i}><em>{r.name}</em>{r.bio ? <> &ndash; {r.bio}</> : null}</li>
              ))}
            </ul>
            {program.reciterNote && <p className="theme-description">{program.reciterNote}</p>}
          </section>
        )}

        {program.speakerPhotos.length > 0 && (
          <section className="speakers-photos-section">
            <div className="speakers-grid">
              {program.speakerPhotos.map((src) => (
                <img key={src} src={src} alt="Speaker" className="speaker-photo" onError={hide} />
              ))}
            </div>
          </section>
        )}

        <section className="content-section">
          <h2 className="section-title">Schedule</h2>
          {program.schedule.length > 0 && (
            <div className="schedule-grid">
              {program.schedule.map((src) => (
                <div key={src} className="schedule-item">
                  <img src={src} alt="Schedule" className="schedule-image" onError={hide} />
                </div>
              ))}
            </div>
          )}
          {program.schedule.length === 0 && program.scheduleText.length === 0 && (
            <p className="theme-description">The full schedule will be posted soon.</p>
          )}
          {program.schedule.length === 0 && program.scheduleText.map((d) => (
            <div key={d.day}>
              <h3>{d.day}</h3>
              <ul className="speakers-list">
                {d.items.map((it, i) => (<li key={i}><strong>{it.time}</strong> &ndash; {it.title}</li>))}
              </ul>
            </div>
          ))}
        </section>

        {links.programPdf && (
          <section className="program-link-section">
            <p className="program-link-text">Download the full program.</p>
            <a href={links.programPdf} target="_blank" rel="noreferrer" className="program-document-btn">Open program</a>
          </section>
        )}
      </div>
    </div>
  );
}
