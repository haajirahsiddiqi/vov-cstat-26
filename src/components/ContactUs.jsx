import React, { useState } from 'react';
import PageHeader from './PageHeader.jsx';
import { site, links } from '../siteContent.js';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    // No form service set up: open the visitor's email app instead
    if (!links.contactFormEndpoint) {
      const subject = encodeURIComponent(`Message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(links.contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="container page-body contact-grid">
        <div>
          <h2 className="section-title">Get in touch</h2>
          <p className="body-text"><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p className="body-text"><strong>Address:</strong> {site.address}</p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>Name
            <input name="name" value={form.name} onChange={update} required />
          </label>
          <label>Email
            <input name="email" type="email" value={form.email} onChange={update} required />
          </label>
          <label>Message
            <textarea name="message" rows="6" value={form.message} onChange={update} required />
          </label>
          <button type="submit" className="btn btn--dark" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'sent' && <p className="form-msg ok">Thank you. We received your message and will reply by email.</p>}
          {status === 'error' && <p className="form-msg err">The message did not send. Please email us at {site.email}.</p>}
        </form>
      </section>
    </>
  );
}
