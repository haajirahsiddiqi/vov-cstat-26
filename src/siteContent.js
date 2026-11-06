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
  email: 'voicesofvirtue.cstat@gmail.com',                
  address: 'Islamic Community of Bryan-College Station, College Station, TX',  
  heroImage: '/images/hero.jpg',
  banner: '/images/banner.jpg',
  logo: '/logo.png',
  social: [
    { label: 'Instagram', url: 'https://www.instagram.com/voices.of.virtue/' }
  ],
};

// Where the buttons go. Use any hosted form/payment page (Eventbrite, Google Form, Zeffy, Stripe link, etc.)
export const links = {
  registration: 'https://ummahapp.io/events/bc427691-4d34-4b09-8f16-bcd03404c521',
  donation: 'https://host.nxt.blackbaud.com/donor-form/?svcid=renxt&formId=a9990869-935e-418e-999e-f3acef90cfdb&envid=p-5bhc0QO3mk2qiv3fYkOL6w',
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
      photo: '/images/speakers/shaykh.png',
      bio: 'Shaykh Arsalan Haque is an Islamic scholar and Imam who studied Islamic sciences in Damascus and graduated from the College of Sharia at Al-Azhar University in Cairo. He has received ijazat in Qur’anic recitation, Hadith, Shafi’i Fiqh, Usul al-Fiqh, and Tasawwuf. He currently serves as the Imam of the Islamic Association of Collin County in Texas.',
    },
    {
      name: 'Mufti Wasim Khan',
      title: 'Resident Scholar, Darul Hafidheen',
      photo: '/images/speakers/mufti.png',
      bio: 'Mufti Wasim Khan is an Islamic scholar who pursued his studies across multiple countries, specializing in Qur’an, Tafsir, Hadith, and Fiqh. He is an experienced educator and international speaker who regularly participates in conferences, youth programs, and community initiatives. He is also the founder of the Khateeb Notes initiative, connecting scholars worldwide through shared khutbah resources.',
    },
    {
      name: 'Mufti Anwer Imam',
      title: 'Imam and Director of Religious Affairs, Nueces Mosque',
      photo: '/images/speakers/imam.png',
      bio: 'Mufti Anwer Imam is an Islamic scholar who graduated from Qalam Seminary’s Alimiyyah program and completed a specialization in Islamic law and issuing legal verdicts (Takhassus fi al-Ifta). He has studied under renowned scholars and holds an ijazah in Qur’anic memorization and recitation. He currently serves as the Imam and Director of Religious Affairs at Nueces Mosque in Austin, Texas.',
    },
    {
      name: 'Ustadha Sophia Khan',
      title: 'Director of Girls Tarbiyah, Islamic Center of Frisco',
      photo: '/images/speakers/ustadha.png',
      bio: 'Ustadha Sophia Khan is an Islamic educator and youth mentor with an academic background in Islamic Shariah Law and Psychology. She studied at the University of Sharjah in the UAE and has spent over fifteen years mentoring Muslim youth. Her work focuses on helping young Muslims navigate everyday challenges while strengthening their faith and identity.',
    },
    {
      name: 'Aalima Maha Feroze',
      title: 'Islamic Scholar and Educator',
      photo: '/images/speakers/aalima.png',
      bio: 'Aalima Maha Firoze is an educator and community leader from Dallas, Texas, who earned her Alimiyyah degree in 2017 from Darul Uloom in Buffalo, New York. She began her community leadership as MSA President at Collin College in 2020, then served as the female resident scholar at ISRA Foundation from 2021 to 2024.',  
    },
    {
      name: 'Qari Ifdal Yusuf',
      title: 'Quran Reciter and Hafidh',
      photo: '/images/speakers/qari.png',
      bio: 'Qari Ifdal is a Qur’an reciter and Hafiz who memorized the Holy Qur’an at the age of 14. He studied Arabic at Bayyinah Institute and has experience leading Taraweeh prayers at mosques across the United States. He is also involved in Qur’anic education and teaching.',
    },
    {
      name: 'Shaykh Qawiuddin Madani',
      title: 'National Youth Director, Dawat-e-Islami USA',
      photo: '/images/speakers/Qawiuddin.png',
      bio: 'Shaykh Qawiuddin Madani is an Islamic scholar who completed his Alimiyyah studies at Jamia-tul-Madinah USA, specializing in Arabic linguistics and classical Islamic sciences. He previously served as an instructor of Arabic and Islamic studies at Jamia-tul-Madinah campuses in Houston and Baltimore. He currently serves as the National Youth Director of Dawat-e-Islami USA, leading nationwide youth initiatives, delivering community seminars, and pursuing a degree in Psychology to support Muslim mental health and well-being.',
    },
    {
      name: 'Imam Qasim Madani',
      title: 'Principal, Jamia-tul-Madinah Houston USA',
      photo: '/images/speakers/Qasim.png',
      bio: 'Imam Qasim Madani is a Hafiz and Islamic scholar who completed his Alimiyyah studies at Jamia-tul-Madinah USA, specializing in Quranic studies, Hadith, Fiqh, and classical Arabic. He has served the community as an Imam, instructor, and educational administrator. He currently serves as the Principal of Jamia-tul-Madinah Houston USA, guiding student academic development and nurturing the next generation of Islamic scholars.',
    },
  ],
  // reciters: [
  //   {
  //     name: 'Qari Abdullah Abualnaja',
  //     title: '',
  //     photo: '',
  //     bio: 'Qari Abdullah Abualnaja is a Qur’an reciter known for his participation in Qur’anic recitation events and competitions. He secured first place in the 2024 North America Imam Al-Shatibi Qur’an Competition, showcasing his dedication to the art of Qur’anic recitation.',
  //   },
  //   {
  //     name: 'Qari Rayyan Syed',
  //     title: '',
  //     photo: '',
  //     bio: '',   // add once he sends his own bio
  //   },
  // ],
  // reciterNote: 'Recitation sponsored by Droplets of Mercy.',
  speakerPhotos: [],
  scheduleEmbeds: [
    {
      day: 'Day 1',
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQX7D-vsxyGQz2r2QSYVh5pJV_sG19odu4KzIP0tL7NRcLTYlN0qbdjCt60iPY5N51O3SrXA9HjpjVQ/pubhtml?gid=1078576098&single=true&widget=true&headers=false',
    },
    {
      day: 'Day 2',
      src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQX7D-vsxyGQz2r2QSYVh5pJV_sG19odu4KzIP0tL7NRcLTYlN0qbdjCt60iPY5N51O3SrXA9HjpjVQ/pubhtml?gid=1212384833&single=true&widget=true&headers=false',
    },
  ],
  schedule: [],
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
      { name: 'Haajirah Siddiqi', role: 'Web Developer' },
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
    { name: 'The Cove', tagline: 'Discover The Cove, your destination for high-end accessories and jewelry. Explore a curated collection of elegant, timeless pieces designed to elevate your style and add a touch of sophistication to any occasion.', instagram: 'thecove.inc', logo: '/images/vendors/the-cove.png' },
    { name: 'Ari’s Bakery', tagline: 'Ari’s Bakery brings the warmth of homemade baking to every treat. From freshly baked delights to sweet creations made with love, there’s something special waiting for every dessert lover.', instagram: 'arisatelier_', logo: '/images/vendors/aris-bakery.png' },
    { name: 'Craft.Hsi', tagline: 'Add a personal touch to your everyday style with Craft.Hsi! Explore a charming collection of bracelets and accessories, featuring unique charms and thoughtful details that make every piece your own.', instagram: 'craft.hsi', logo: '/images/vendors/craft-hsi.png' },
    { name: 'Heavenly Creations', tagline: 'From beautifully crafted cakes to savory delights, Heavenly Creations has something for everyone! Stop by to enjoy a delicious selection of biryani, chicken rolls, kebabs, and sliders, all made with care. Whether youre craving something sweet or savory, there is a little something heavenly waiting for you at Souq al-Layl!', instagram: 'madebyheavenly', logo: '/images/vendors/heavenly.jpg' },
    { name: 'The Savor Art', tagline: 'Indulge in the art of gourmet desserts with The Savor Art. Featuring homemade sweet creations crafted with care, each dessert brings together delicious flavors and a touch of artistry for a truly special treat.', instagram: 'thesavorart', logo: '/images/vendors/the-savor-art.png' },
    { name: 'Toki Cookies', tagline: 'Freshly baked, irresistibly delicious, and made with love! Toki Cookies brings you homemade cookies that are perfect for satisfying your sweet tooth and sharing a little sweetness with those around you.', instagram: 'tokicookiess', logo: '/images/vendors/toki-cookies.png' },
    { name: 'Timeless Oud', tagline: 'Discover the captivating world of oud with Timeless Oud. Explore a collection of rich, aromatic oud oils inspired by the timeless tradition of Middle Eastern perfumery. Find a fragrance that leaves a lasting impression.', instagram: 'timeless.oud', logo: '/images/vendors/timeless-oud.png' },
    { name: 'Timber', tagline: 'Where artistry meets tradition. Timber brings the beauty of Arabic calligraphy to life through elegant wood-crafted designs. Discover meaningful pieces that celebrate the timeless beauty of Arabic lettering and craftsmanship.', instagram: 'timbercalligraphy', logo: '/images/vendors/timber.png'},
  ],
};
