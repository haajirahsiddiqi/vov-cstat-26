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
  email: 'voicesofvirtue.cstat@gmail.com',                 // PLACEHOLDER
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
  speakers: [
    {
      name: 'Shaykh Arsalan Haque',
      title: 'Imam, Islamic Association of Collin County',
      photo: '',
      bio: 'Shaykh Arsalan Haque is an Islamic scholar and Imam who studied Islamic sciences in Damascus and graduated from the College of Sharia at Al-Azhar University in Cairo. He has received ijazat in Qur’anic recitation, Hadith, Shafi’i Fiqh, Usul al-Fiqh, and Tasawwuf. He currently serves as the Imam of the Islamic Association of Collin County in Texas.',
    },
    {
      name: 'Mufti Wasim Khan',
      title: 'Resident Scholar, Darul Hafidheen',
      photo: '',
      bio: 'Mufti Wasim Khan is an Islamic scholar who pursued his studies across multiple countries, specializing in Qur’an, Tafsir, Hadith, and Fiqh. He is an experienced educator and international speaker who regularly participates in conferences, youth programs, and community initiatives. He is also the founder of the Khateeb Notes initiative, connecting scholars worldwide through shared khutbah resources.',
    },
    {
      name: 'Mufti Anwer Imam',
      title: 'Imam and Director of Religious Affairs, Nueces Mosque',
      photo: '',
      bio: 'Mufti Anwer Imam is an Islamic scholar who graduated from Qalam Seminary’s Alimiyyah program and completed a specialization in Islamic law and issuing legal verdicts (Takhassus fi al-Ifta). He has studied under renowned scholars and holds an ijazah in Qur’anic memorization and recitation. He currently serves as the Imam and Director of Religious Affairs at Nueces Mosque in Austin, Texas.',
    },
    {
      name: 'Ustadha Sophia Khan',
      title: 'Director of Girls Tarbiyah, Islamic Center of Frisco',
      photo: '',
      bio: 'Ustadha Sophia Khan is an Islamic educator and youth mentor with an academic background in Islamic Shariah Law and Psychology. She studied at the University of Sharjah in the UAE and has spent over fifteen years mentoring Muslim youth. Her work focuses on helping young Muslims navigate everyday challenges while strengthening their faith and identity.',
    },
    {
      name: 'Aalima Maha Feroze',
      title: 'Islamic Scholar and Educator',
      photo: '',
      bio: '',   // add once she sends her own bio
    },
    {
      name: 'Qari Ifdal',
      title: 'Quran Reciter and Hafidh',
      photo: '',
      bio: 'Qari Ifdal is a Qur’an reciter and Hafiz who memorized the Holy Qur’an at the age of 14. He studied Arabic at Bayyinah Institute and has experience leading Taraweeh prayers at mosques across the United States. He is also involved in Qur’anic education and teaching.',
    },
    {
      name: 'Aalima Artisia Susanto',
      title: 'Islamic Educator',
      photo: '',
      bio: '',   // add once she sends her own bio
    },
  ],
  reciters: [
    {
      name: 'Qari Abdullah Abualnaja',
      title: '',
      photo: '',
      bio: 'Qari Abdullah Abualnaja is a Qur’an reciter known for his participation in Qur’anic recitation events and competitions. He secured first place in the 2024 North America Imam Al-Shatibi Qur’an Competition, showcasing his dedication to the art of Qur’anic recitation.',
    },
    {
      name: 'Qari Rayyan Syed',
      title: '',
      photo: '',
      bio: '',   // add once he sends his own bio
    },
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
  eyebrow: 'Souq al Layl',
  title: 'Vendors',
  intro: 'Join us for Souq al Layl, our night market, and support these small businesses.',
  // name is required. Everything else is optional.
  // instagram = handle only (no @, no link). logo = e.g. '/images/vendors/the-cove.png'
  list: [
    { name: 'The Cove', tagline: '', instagram: 'thecove.inc', logo: '' },
    { name: 'Ari’s Bakery', tagline: '', instagram: '', logo: '' },
    { name: 'Craft.Hsi', tagline: '', instagram: '', logo: '' },
    { name: 'The Savor Art', tagline: '', instagram: 'thesavorart', logo: '' },
    { name: 'Toki Cookies', tagline: '', instagram: 'tokicookiess', logo: '' },
    { name: 'Timeless Oud', tagline: '', instagram: 'timeless.oud', logo: '' },
    { name: 'One more vendor to be announced', tagline: 'Stay tuned!', instagram: '', logo: '', tba: true },
  ],
};

export const sponsors = {
  intro: 'We are grateful to the sponsors who make this event possible.',
  tiers: [
    // { tier: 'Gold', items: [{ name: 'Company', logo: '/images/sponsor-company.png', url: 'https://company.com' }] },
  ],
  becomeSponsorText: 'Interested in sponsoring? Get in touch and we will send you our sponsorship packages.',
};