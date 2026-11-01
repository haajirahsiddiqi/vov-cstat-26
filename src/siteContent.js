// ============================================================
//  EDIT THIS FILE to update the website text, links and images.
//  Everything marked "PLACEHOLDER" should be replaced.
//  Image files go in /public/images and are referenced as '/images/<name>'.
// ============================================================

export const site = {
  name: 'Voices of Virtue',
  tagline: 'Texas Islamic Conference',
  date: 'November 6–7, 2026',
  location: 'Islamic Community of Bryan-College Station',
  email: 'info@yourdomain.org',                 // PLACEHOLDER
  phone: '(000) 000-0000',                      // PLACEHOLDER
  address: 'Islamic Community of Bryan-College Station, College Station, TX',  // PLACEHOLDER: add street address
  heroImage: '/images/hero.jpg',
  banner: '/images/banner.jpg',
  logo: '/logo.png',
  social: [
    // { label: 'Instagram', url: 'https://instagram.com/yourpage' },
    // { label: 'Facebook', url: 'https://facebook.com/yourpage' },
  ],
};

// Where the buttons go. Use any hosted form/payment page (Eventbrite, Google Form, Zeffy, Stripe link, etc.)
export const links = {
  registration: 'https://ummahapp.io/events/bc427691-4d34-4b09-8f16-bcd03404c521',
  donation: '',       // PLACEHOLDER e.g. 'https://donate.stripe.com/...'
  programPdf: '',     // PLACEHOLDER e.g. '/files/program.pdf' (put the file in /public/files)
  // Contact form: create a free form at formspree.io and paste its URL here, e.g. 'https://formspree.io/f/xxxxxxx'
  // If left empty, the form opens the visitor's email app addressed to site.email instead.
  contactFormEndpoint: '',
};

export const about = {
  title: 'About the Conference',
  paragraphs: [
    'Voices of Virtue is a conference for college students and young professionals who want to seek sound Islamic knowledge and take part in Suhbah, the company of good people. It is organized by students and community members in Bryan-College Station.',
    'Our hope is that attendees leave motivated to keep learning in their own cities and through reliable online sources, and that the culture of seeking knowledge keeps growing in the BCS community. VOV is organized with the Texas A&M MSA and the Islamic Community of Bryan-College Station (ICBCS), and welcomes students and young professionals from across Texas and beyond.',
  ],
};

export const homeTheme = {
  eyebrow: '2026’s theme is…',
  titleLine1: 'Rooted in Falah:',
  titleLine2: 'Growing Towards True Success',
  when: 'Friday–Saturday, November 6–7, 2026',
  where: 'Islamic Community of Bryan-College Station (ICBCS)',
  address: '417 Stasney St, College Station, TX 77840',
  paragraphs: [
    'We are often told what success looks like. This year’s theme, “Rooted in Falah: Growing Towards True Success,” invites us to slow down and ask what success really means for a believer, and to recenter our hearts and souls on our true purpose: serving Allah SWT with Ihsan.',
    'Like a seed, falah begins small and grows with care. Through the weekend, we will explore how to plant it with intention, nurture it through knowledge, prayer, and good company, and watch it blossom into our true purpose and potential. Whether you are a student, a young professional, or simply seeking direction, this conference is an invitation to grow.',
  ],
};

export const registration = {
  intro: 'Join us in College Station for a weekend of knowledge and community. Register early for the lowest price.',
  // PLACEHOLDER: confirm final prices and cutoff dates before publishing
  tiers: [
    { name: 'Early', price: '$15', note: 'Best price' },
    { name: 'Regular', price: '$20', note: 'After early registration closes' },
    { name: 'At the door', price: '$25', note: 'Pay on arrival' },
  ],
};

export const program = {
  theme: 'Rooted in Falah: Growing Towards True Success',
  themePoster: '/images/theme-poster.jpg',
  themeParagraphs: [
    'This year’s Voices of Virtue Conference aims to recenter our hearts and souls toward our true purpose: serving Allah SWT with Ihsan.',
    'Throughout the conference, attendees will be inspired to rethink their understanding of success, and leave with the knowledge of how they too can grow seeds of Falah with intention and watch how these seeds blossom into their true purpose and potential.',
  ],
  // Names are the proposed lineup. Add a short bio per speaker when ready.
  speakers: [
    { name: 'Shaykh Arsalan Haque', bio: '' },
    { name: 'Mufti Wasim Khan', bio: '' },
    { name: 'Mufti Anwer Imam', bio: '' },
    { name: 'Ustadha Sophia Khan', bio: '' },
    { name: 'Aalima Maha Feroze', bio: '' },
    { name: 'Qari Ifdal', bio: '' },
    { name: 'Aalima Artisia Susanto', bio: '' },
  ],
  reciters: [
    { name: 'Qari Abdullah Abualnaja', bio: '' },
    { name: 'Qari Rayyan Syed', bio: '' },
  ],
  reciterNote: 'Recitation sponsored by Droplets of Mercy.',
  speakerPhotos: [],
  schedule: [
    // '/images/schedule-day1.jpg', '/images/schedule-day2.jpg',
  ],
  scheduleText: [],
};

export const team = {
  photo: '/images/team.jpg',
  groups: [
    { title: 'VOV Chairs', members: [
      { name: 'Aniyah Zaman', role: 'Conference Lead' },
      { name: 'Emaan Vagher', role: 'Sisters’ Programming Chair' },
      { name: 'Hamza Akhtar', role: 'Brothers’ Programming Chair' },
      { name: 'Rinad Mohamed', role: 'Logistics Chair' },
      { name: 'Maliha Ghazi', role: 'Finance Chair' },
      { name: 'Jessica Lan-Anh', role: 'Graphic Design' },
      { name: 'Aliza Abidi', role: 'Social Media Chair' },
      { name: 'Usman Siddiqui', role: 'Volunteer Chair' },
      { name: 'Filza Rahman', role: 'Web Developer' },
      { name: 'Haajirah Siddiqui', role: 'Web Developer' },
    ]},
    { title: 'MSA Representatives', members: [
      { name: 'Ayaan Aziz', role: 'President' },
      { name: 'Humaid Mohammad', role: 'Education Vice President' },
      { name: 'Sokhna Fall', role: 'Education Officer' },
    ]},
    { title: 'ICBCS Board Representatives', members: [
      { name: 'Dr. Zahir Latheef', role: 'Brothers’ Education Chair' },
      { name: 'Sr. Keran Gaziani', role: 'Sisters’ Education Chair' },
    ]},
  ],
};

// Vendor directory. One entry per vendor. instagram = handle only, no @ and no URL.
export const vendors = {
  intro: 'Visit our vendors at the conference and support local small businesses.',
  list: [
    // { name: 'Vendor Name', tagline: 'Handmade jewelry, prayer mats and gifts', instagram: 'vendorhandle' },
  ],
};

export const sponsors = {
  intro: 'We are grateful to the sponsors who make this event possible.',
  tiers: [
    // { tier: 'Gold', items: [{ name: 'Company', logo: '/images/sponsor-company.png', url: 'https://company.com' }] },
  ],
  becomeSponsorText: 'Interested in sponsoring or becoming a vendor? Get in touch and we will send you our sponsorship packages.',
};