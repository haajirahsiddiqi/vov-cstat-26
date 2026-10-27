import React from 'react';
import PageHeader from './PageHeader.jsx';
import { about, site } from '../siteContent.js';

export default function TexasIslamicConference() {
  return (
    <>
      <PageHeader title="Texas Islamic Conference" />
      <section className="container page-body">
        <h2 className="section-title">{about.title}</h2>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="body-text">{p}</p>
        ))}
        <p className="body-text"><strong>When:</strong> {site.date}<br /><strong>Where:</strong> {site.location}</p>
      </section>
    </>
  );
}
