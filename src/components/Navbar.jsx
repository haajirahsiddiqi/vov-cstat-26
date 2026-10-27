import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site } from '../siteContent.js';

const menu = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'Texas Islamic Conference', to: '/TexasIslamicConference' },
      { label: 'Meet the Team', to: '/MeetTheTeam' },
      { label: 'Sponsors', to: '/Sponsors' },
    ],
  },
  {
    label: 'Participate',
    children: [
      { label: 'Donations', to: '/Donations' },
      { label: 'Registration', to: '/Registration' },
      { label: 'Program Details', to: '/ProgramDetails' },
    ],
  },
  { label: 'Contact Us', to: '/ContactUs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);       // mobile menu
  const [openSub, setOpenSub] = useState(null);  // which dropdown is open
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menus on navigation
  useEffect(() => { setOpen(false); setOpenSub(null); }, [pathname]);

  return (
    <header className={`navbar ${scrolled || pathname !== '/' ? 'navbar--solid' : ''}`}>
      <Link to="/" className="navbar__brand">
        <img src={site.logo} alt="" className="navbar__logo" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <span>{site.name}</span>
      </Link>

      <button
        className="navbar__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <nav className={`navbar__menu ${open ? 'is-open' : ''}`}>
        {menu.map((item) =>
          item.children ? (
            <div
              key={item.label}
              className={`navbar__item has-sub ${openSub === item.label ? 'is-open' : ''}`}
            >
              <button
                className="navbar__link"
                aria-expanded={openSub === item.label}
                onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
              >
                {item.label} <span className="caret" aria-hidden="true">&#9662;</span>
              </button>
              <div className="navbar__sub">
                {item.children.map((c) => (
                  <NavLink key={c.to} to={c.to} className="navbar__sublink">{c.label}</NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} end className="navbar__link navbar__item">
              {item.label}
            </NavLink>
          )
        )}
      </nav>
    </header>
  );
}
