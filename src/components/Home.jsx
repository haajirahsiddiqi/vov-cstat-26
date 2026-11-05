import React from 'react';
import { Link } from 'react-router-dom';
import { site, about, homeTheme } from '../siteContent.js';

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${site.banner}), linear-gradient(135deg, #2f4a3a 0%, #5d7a5f 55%, #a5683f 100%)` }}>
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__tagline">{site.tagline}</p>
          <h1 className="hero__title">{site.name}</h1>
          <p className="hero__meta">{site.date} &middot; {site.location}</p>
          <div className="hero__actions">
            <Link to="/Registration" className="btn btn--primary">Register</Link>
            <Link to="/ProgramDetails" className="btn btn--light">Program Details</Link>
            <Link to="/Vendors" className="btn btn--light">Check Out Vendors</Link>
          </div>
        </div>
      </section>

      <section className="container home-intro">
        <h2 className="section-title">{about.title}</h2>
        <p className="body-text">{about.paragraphs[0]}</p>
        <Link to="/TexasIslamicConference" className="btn btn--dark">Learn more</Link>
      </section>

      <section className="home-theme">
        <div className="container home-theme__inner">
          <p className="home-theme__eyebrow">{homeTheme.eyebrow}</p>
          <h2 className="home-theme__title">
            {homeTheme.titleLine1}<br />{homeTheme.titleLine2}
          </h2>
          <p className="home-theme__details">
            <strong>{homeTheme.when}</strong><br />
            {homeTheme.where}<br />
            {homeTheme.address}
          </p>
          {homeTheme.paragraphs.map((p, i) => (
            <p key={i} className="home-theme__text">{p}</p>
          ))}
          <div className="hero__actions">
            <Link to="/Registration" className="btn btn--primary">Register</Link>
            <Link to="/ProgramDetails" className="btn btn--light">Program Details</Link>
          </div>
        </div>
      </section>

      <section className="home-cards">
        <div className="container home-cards__grid">
          <Link to="/Registration" className="home-card"><h3>Registration</h3><p>Reserve your spot.</p></Link>
          <Link to="/Donations" className="home-card"><h3>Donations</h3><p>Support the conference.</p></Link>
          <Link to="/Vendors" className="home-card"><h3>Vendors</h3><p>Shop small and local.</p></Link>
        </div>
      </section>
    </>
  );
}