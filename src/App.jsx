// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import TexasIslamicConference from './components/TexasIslamicConference.jsx';
import MeetTheTeam from './components/MeetTheTeam.jsx';
import Donations from './components/Donations.jsx';
import Registration from './components/Registration.jsx';
import ProgramDetails from './components/ProgramDetails.jsx';
import Vendors from './components/Vendors.jsx';
import ContactUs from './components/ContactUs.jsx';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TexasIslamicConference" element={<TexasIslamicConference />} />
          <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
          <Route path="/Donations" element={<Donations />} />
          <Route path="/Vendors" element={<Vendors />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/ProgramDetails" element={<ProgramDetails />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* Unknown routes fall back to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
