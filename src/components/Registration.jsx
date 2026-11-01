import React from 'react';
import PageHeader from './PageHeader.jsx';
import { links, site, registration } from '../siteContent.js';

export default function Registration() {
  return (
    <>
      <PageHeader title="Registration" />
      <section className="container page-body">
        <p className="body-text"><strong>{site.date}</strong><br />{site.location}</p>
        <p className="body-text">{registration.intro}</p>
        <div className="price-grid">
          {registration.tiers.map((t) => (
            <div key={t.name} className="price-card">
              <h3>{t.name}</h3>
              <div className="price">{t.price}</div>
              <p>{t.note}</p>
            </div>
          ))}
        </div>
        {links.registration ? (
          <a href={links.registration} target="_blank" rel="noreferrer" className="btn btn--dark">Register now</a>
        ) : (
          <div className="callout">
            <p>Registration opens soon. Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        )}
      </section>
    </>
  );
}
