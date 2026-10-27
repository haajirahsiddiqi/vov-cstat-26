import React from 'react';
import PageHeader from './PageHeader.jsx';
import { links, site } from '../siteContent.js';

export default function Donations() {
  return (
    <>
      <PageHeader title="Donations" />
      <section className="container page-body">
        <p className="body-text">
          PLACEHOLDER: Explain what donations support (venue, speakers, scholarships, community meals) and whether donations are tax-deductible.
        </p>
        {links.donation ? (
          <a href={links.donation} target="_blank" rel="noreferrer" className="btn btn--dark">Donate now</a>
        ) : (
          <div className="callout">
            <p>Online donations are not open yet. To give, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        )}
      </section>
    </>
  );
}
