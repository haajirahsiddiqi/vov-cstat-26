import React from 'react';
import PageHeader from './PageHeader.jsx';
import { links, site } from '../siteContent.js';

export default function Registration() {
  return (
    <>
      <PageHeader title="Registration" />
      <section className="container page-body">
        <p className="body-text"><strong>{site.date}</strong><br />{site.location}</p>
        <p className="body-text">
          PLACEHOLDER: Add ticket prices, what is included, and the registration deadline.
        </p>
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
