import React, { useState } from 'react';
import './ProgramDetails.css';
import { program, links, site } from '../siteContent.js';
import { assetPath } from '../utils/assetPath.js';

const hide = (e) => (e.currentTarget.style.display = 'none');

function SectionTitle({ eyebrow, children }) {
  return (
    <div className="pd-heading">
      {eyebrow && <p className="pd-heading__eyebrow">{eyebrow}</p>}
      <h2 className="pd-heading__title">{children}</h2>
      <div className="pd-heading__ornament"><span /><i /><span /></div>
    </div>
  );
}

function SpeakerCard({ person }) {
  const [open, setOpen] = useState(false);
  const initials = person.name
    .split(' ')
    .filter((w) => !/^(Shaykh|Mufti|Ustadha|Aalima|Qari|Dr\.|Sr\.)$/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <div className={`spk-card ${open ? 'spk-card--open' : ''}`}>
      <div className="spk-card__portrait">
        {person.photo ? (
          <img src={assetPath(person.photo)} alt={person.name} onError={hide} />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      <h3 className="spk-card__name">{person.name}</h3>
      {person.title && <p className="spk-card__title">{person.title}</p>}
      <button
        type="button"
        className="spk-card__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? 'Close' : 'Read introduction'}
      </button>
      {open && (
        <p className="spk-card__bio">
          {person.bio ? person.bio : 'Introduction coming soon.'}
        </p>
      )}
    </div>
  );
}

export default function ProgramDetails() {
  return (
    <div className="program-details-container">
      <section
        className="pd-hero"
        style={{ backgroundImage: `url(${site.banner}), linear-gradient(135deg, #2f4a3a 0%, #5d7a5f 55%, #a5683f 100%)` }}
      >
        <div className="pd-hero__wash" />
        <div className="pd-hero__content">
          <p className="pd-hero__eyebrow">Voices of Virtue 2026</p>
          <h1 className="pd-hero__title">Program Details</h1>
          <p className="pd-hero__meta">{site.date} &middot; {site.location}</p>
        </div>
      </section>

      <div className="main-content">
        {program.theme && (
          <section className="theme-section">
            <SectionTitle eyebrow="This year’s theme">{program.theme}</SectionTitle>
            <div className="theme-grid">
              <div className="theme-image-column">
                <img src={assetPath(program.themePoster)} alt="Theme poster" className="theme-poster" onError={hide} />
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
          <SectionTitle eyebrow="Meet our">Speakers</SectionTitle>
          <div className="spk-grid">
            {program.speakers.map((s) => (
              <SpeakerCard key={s.name} person={s} />
            ))}
          </div>
        </section>

        {program.speakerPhotos.length > 0 && (
          <section className="speakers-photos-section">
            <div className="speakers-grid">
              {program.speakerPhotos.map((src) => (
                <img key={src} src={assetPath(src)} alt="Speaker" className="speaker-photo" onError={hide} />
              ))}
            </div>
          </section>
        )}

        <section className="content-section">
          <SectionTitle eyebrow="Two days of knowledge">Schedule</SectionTitle>
          {program.scheduleEmbeds.length > 0 && (
            <div className="schedule-grid">
              {program.scheduleEmbeds.map((schedule) => (
                <div key={schedule.src} className="schedule-item">
                  <h3 className="schedule-day">{schedule.day}</h3>
                  <iframe
                    src={schedule.src}
                    title={`${schedule.day} schedule`}
                    className="schedule-embed"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
          {program.scheduleEmbeds.length === 0 && program.schedule.length === 0 && program.scheduleText.length === 0 && (
            <p className="pd-empty">The full schedule will be posted soon.</p>
          )}
          {program.scheduleEmbeds.length === 0 && program.schedule.length === 0 && program.scheduleText.map((d) => (
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