import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader.jsx';
import { vendors } from '../siteContent.js';
import { assetPath } from '../utils/assetPath.js';

const hide = (e) => (e.currentTarget.style.display = 'none');

function VendorCard({ vendor }) {
  const handle = vendor.instagram ? vendor.instagram.replace(/^@/, '') : '';
  const letter = vendor.name.trim()[0] || '?';

  return (
    <div className={`vendor-tile ${vendor.tba ? 'vendor-tile--tba' : ''}`}>
      <div className="vendor-tile__top">
        {vendor.logo ? (
          <img src={assetPath(vendor.logo)} alt={vendor.name} className="vendor-tile__logo" onError={hide} />
        ) : (
          <span className="vendor-tile__initial">{vendor.tba ? '?' : letter}</span>
        )}
      </div>
      <div className="vendor-tile__body">
        <h3 className="vendor-tile__name">{vendor.name}</h3>
        {vendor.tagline && <p className="vendor-tile__tagline">{vendor.tagline}</p>}
        {handle && (
          <a
            className="vendor-tile__ig"
            href={`https://instagram.com/${handle}`}
            target="_blank"
            rel="noreferrer"
          >
            @{handle}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Vendors() {
  return (
    <>
      <PageHeader title={vendors.title} />
      <section className="container page-body">
        {vendors.eyebrow && <p className="vendor-eyebrow">{vendors.eyebrow}</p>}
        <p className="body-text">{vendors.intro}</p>

        {vendors.list.length === 0 && (
          <p className="body-text muted">Vendors will be announced soon.</p>
        )}

        <div className="vendor-grid">
          {vendors.list.map((v) => (
            <VendorCard key={v.name} vendor={v} />
          ))}
        </div>

      </section>
    </>
  );
}