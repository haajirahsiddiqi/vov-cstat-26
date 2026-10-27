import React from 'react';
import './MeetTheTeam.css';
import { team } from '../siteContent.js';

export default function MeetTheTeam() {
  return (
    <div className="meet-the-team-container">
      <div className="meet-the-team">
        <h1 className="team-title">MEET THE TEAM</h1>
        <img
          src={team.photo}
          alt="The organizing team"
          className="team-photo"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        {team.members.length > 0 && (
          <ul className="team-list">
            {team.members.map((m) => (
              <li key={m.name}><strong>{m.name}</strong>{m.role ? ` - ${m.role}` : ''}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
