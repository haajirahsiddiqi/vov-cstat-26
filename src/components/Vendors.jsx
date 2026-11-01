import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader.jsx';
import { vendors } from '../siteContent.js';

export default function Vendors() {
  return (
    <>
      <PageHeader title="Vendors" />
      <section className="container page-body">
        <p className="body-text">{vendors.intro}</p>

        {vendors.list.length === 0 && (
          <p className="body-text muted">Vendors will be announced soon.</p>
        )}

        <div className="vendor-grid">
          {vendors.list.map((v) => (
            <div key={v.name} className="vendor-card">
              <h3>{v.name}</h3>
              <p>{v.tagline}</p>
              {v.instagram && (
                <a
                  className="vendor-ig"
                  href={`https://instagram.com/${v.instagram.replace(/^@/, '')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{v.instagram.replace(/^@/, '')}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="callout">
          <p>Want to be a vendor at Voices of Virtue? Get in touch and we will share the details.</p>
          <Link to="/ContactUs" className="btn btn--dark">Become a vendor</Link>
        </div>
      </section>
    </>
  );
}
