import React from 'react';
import { Link } from 'react-router-dom';
import { site } from '../siteContent.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <h3 className="footer__title">{site.name}</h3>
          <p>{site.tagline}</p>
          <p>{site.date} &middot; {site.location}</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><Link to="/Registration">Registration</Link></li>
            <li><Link to="/ProgramDetails">Program Details</Link></li>
            <li><Link to="/Donations">Donate</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p>{site.phone}</p>
          {site.social.map((s) => (
            <p key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></p>
          ))}
        </div>
      </div>
      <p className="footer__copy">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
