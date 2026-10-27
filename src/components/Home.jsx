import React from 'react';
import { Link } from 'react-router-dom';
import { site, about } from '../siteContent.js';

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${site.heroImage})` }}>
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__tagline">{site.tagline}</p>
          <h1 className="hero__title">{site.name}</h1>
          <p className="hero__meta">{site.date} &middot; {site.location}</p>
          <div className="hero__actions">
            <Link to="/Registration" className="btn btn--primary">Register</Link>
            <Link to="/ProgramDetails" className="btn btn--light">Program Details</Link>
          </div>
        </div>
      </section>

      <section className="container home-intro">
        <h2 className="section-title">{about.title}</h2>
        <p className="body-text">{about.paragraphs[0]}</p>
        <Link to="/TexasIslamicConference" className="btn btn--dark">Learn more</Link>
      </section>

      <section className="home-cards">
        <div className="container home-cards__grid">
          <Link to="/Registration" className="home-card"><h3>Registration</h3><p>Reserve your spot.</p></Link>
          <Link to="/Donations" className="home-card"><h3>Donations</h3><p>Support the conference.</p></Link>
          <Link to="/Sponsors" className="home-card"><h3>Sponsors</h3><p>Meet the people behind the event.</p></Link>
        </div>
      </section>
    </>
  );
}
