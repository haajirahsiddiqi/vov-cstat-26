import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader.jsx';
import { sponsors } from '../siteContent.js';

export default function Sponsors() {
  return (
    <>
      <PageHeader title="Sponsors" />
      <section className="container page-body">
        <p className="body-text">{sponsors.intro}</p>

        {sponsors.tiers.length === 0 && (
          <p className="body-text muted">Sponsors will be announced soon.</p>
        )}

        {sponsors.tiers.map((t) => (
          <div key={t.tier} className="sponsor-tier">
            <h2 className="section-title">{t.tier}</h2>
            <div className="sponsor-grid">
              {t.items.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="sponsor-logo">
                  <img src={s.logo} alt={s.name} />
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="callout">
          <p>{sponsors.becomeSponsorText}</p>
          <Link to="/ContactUs" className="btn btn--dark">Become a sponsor</Link>
        </div>
      </section>
    </>
  );
}
