// ============================================================
//  EDIT THIS FILE to update the website text, links and images.
//  Everything marked "PLACEHOLDER" should be replaced.
//  Image files go in /public/images and are referenced as '/images/<name>'.
// ============================================================

export const site = {
  name: 'Voices of Virtue',
  tagline: 'Texas Islamic Conference',
  date: 'DATE TO BE ANNOUNCED',                 // PLACEHOLDER
  location: 'VENUE, City, TX',                  // PLACEHOLDER
  email: 'info@yourdomain.org',                 // PLACEHOLDER
  phone: '(000) 000-0000',                      // PLACEHOLDER
  address: 'Street address, City, TX 00000',    // PLACEHOLDER
  heroImage: '/images/hero.jpg',
  logo: '/logo.png',
  social: [
    // { label: 'Instagram', url: 'https://instagram.com/yourpage' },
    // { label: 'Facebook', url: 'https://facebook.com/yourpage' },
  ],
};

// Where the buttons go. Use any hosted form/payment page (Eventbrite, Google Form, Zeffy, Stripe link, etc.)
export const links = {
  registration: '',   // PLACEHOLDER e.g. 'https://www.eventbrite.com/e/...'
  donation: '',       // PLACEHOLDER e.g. 'https://donate.stripe.com/...'
  programPdf: '',     // PLACEHOLDER e.g. '/files/program.pdf' (put the file in /public/files)
  // Contact form: create a free form at formspree.io and paste its URL here, e.g. 'https://formspree.io/f/xxxxxxx'
  // If left empty, the form opens the visitor's email app addressed to site.email instead.
  contactFormEndpoint: '',
};

export const about = {
  title: 'About the Conference',
  paragraphs: [
    'PLACEHOLDER: Write two or three paragraphs about the conference here: who organizes it, how long it has run, and who it is for.',
    'PLACEHOLDER: Describe what attendees can expect, such as lectures, family sessions, a bazaar, and community meals.',
  ],
};

export const program = {
  theme: 'THEME TITLE',                        // PLACEHOLDER
  themePoster: '/images/theme-poster.jpg',
  themeParagraphs: [
    'PLACEHOLDER: Describe this year\'s theme and why it matters.',
  ],
  speakers: [
    { name: 'Speaker Name', bio: 'PLACEHOLDER: short description' },
    { name: 'Speaker Name', bio: 'PLACEHOLDER: short description' },
  ],
  speakerPhotos: [
    // '/images/speaker1.jpg', '/images/speaker2.jpg', '/images/speaker3.jpg',
  ],
  schedule: [
    // Schedule can be images (like last year) ...
    // '/images/schedule-day1.jpg', '/images/schedule-day2.jpg',
  ],
  scheduleText: [
    // ... or plain text rows
    { day: 'Day 1', items: [{ time: '0:00 PM', title: 'PLACEHOLDER session' }] },
  ],
};

export const team = {
  photo: '/images/team.jpg',   // group photo like last year
  members: [
    // { name: 'Full Name', role: 'Chair' },
  ],
};

export const sponsors = {
  intro: 'We are grateful to the sponsors who make this event possible.',
  tiers: [
    // { tier: 'Gold', items: [{ name: 'Company', logo: '/images/sponsor-company.png', url: 'https://company.com' }] },
  ],
  becomeSponsorText: 'Interested in sponsoring? Get in touch and we will send you our sponsorship packages.',
};
