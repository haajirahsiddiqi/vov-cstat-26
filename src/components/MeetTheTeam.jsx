import React from 'react';
import './MeetTheTeam.css';
import { team } from '../siteContent.js';
import { assetPath } from '../utils/assetPath.js';

export default function MeetTheTeam() {
  return (
    <div className="meet-the-team-container">
      <div className="meet-the-team">
        <h1 className="team-title">MEET THE TEAM</h1>
        <img
          src={assetPath(team.photo)}
          alt="The organizing team"
          className="team-photo"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        {team.groups.map((g) => (
          <section key={g.title} className="team-group">
            <h2 className="team-group__title">{g.title}</h2>
            <div className="team-cards">
              {g.members.map((m) => (
                <div key={m.name} className="team-card">
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
