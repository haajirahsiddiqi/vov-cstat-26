import React from 'react';
import PageHeader from './PageHeader.jsx';
import { links, site } from '../siteContent.js';

export default function Donations() {
  return (
    <>
      <PageHeader title="Donations" />
      <section className="container page-body">
        <p className="body-text">
          Voices of Virtue is run by students and volunteers. Donations help cover meals, speaker travel and hospitality, and materials for attendees, so the weekend stays affordable for students.
        </p>
        {links.donation ? (
          <a href={links.donation} target="_blank" rel="noreferrer" className="btn btn--dark">Donate now</a>
        ) : (
          <div className="callout">
            <p>Online donations are not open yet. To give, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        )}
        {links.donation && (
          <p className="body-text">
            Please mention “Voices of Virtue conference” in the donation memo. Jazakum Allahu khairan for your time and consideration.
          </p>
        )}
      </section>
    </>
  );
}
