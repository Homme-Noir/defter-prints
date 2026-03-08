/**
 * Site copy – aligned with Defter Prints Word document.
 * Placeholders to replace later: contact (phone, email, address), social URLs (in SocialLinks or config),
 * testimonial attribution/real quotes, optional hero image.
 */

export const navLinks = [
  { path: '/', label: 'Home', end: true },
  { path: '/about', label: 'About', end: false },
  { path: '/services', label: 'Services', end: false },
  { path: '/contact', label: 'Contact', end: false },
]

export const contactForm = {
  submitLabel: 'Send via Email',
  hint: 'This will open your email client to send your request.',
  mailtoSubject: 'Quote Request - Defter Prints',
  mailtoBody: (name, email, message) => `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
}

export const brand = {
  name: 'Defter Prints',
  tagline: 'Defter Prints is a full-service printing and corporate branding company committed to helping businesses stand out through high-quality prints, creative branding solutions, and timely delivery. We combine creativity, technology, and craftsmanship to transform ideas into powerful visual experiences.',
}

export const hero = {
  headline: 'Bring Your Brand to Life',
  subhead: 'Premium Corporate Branding, Digital Printing & Promotional Solutions',
  body: 'At Defter Prints, we help brands communicate clearly, look professional, and leave lasting impressions. From corporate branding to custom apparel, promotional products, signage, and awards, we deliver excellence in every detail.',
  ctaLabel: 'Call to Action:',
  ctaQuote: 'Request a Quote',
  ctaServices: 'View Our Services',
}

export const whyChoose = [
  {
    title: 'Quality You Can See & Feel',
    text: 'We use modern printing technology and premium materials to deliver sharp, vibrant, and durable outputs.',
  },
  {
    title: 'End-to-End Branding Solutions',
    text: 'From concept to final delivery, we handle all your branding and printing needs under one roof.',
  },
  {
    title: 'Attention to Detail',
    text: 'We pay close attention to finishing, color accuracy, and brand consistency in every job.',
  },
  {
    title: 'Fast Turnaround & Reliability',
    text: 'We understand deadlines and deliver on time without compromising quality.',
  },
  {
    title: 'Customer-Centric Approach',
    text: 'Your satisfaction is our priority. We listen, advise, and deliver solutions tailored to your needs.',
  },
  {
    title: 'Competitive Pricing',
    text: 'Premium quality printing at fair and transparent prices.',
  },
]

export const about = {
  whoWeAre: 'Defter Prints is a creative printing and branding company providing end-to-end solutions for businesses, organizations, and individuals. We specialize in transforming concepts into tangible brand assets that communicate value, professionalism, and identity. With a passion for quality and innovation, we support startups, SMEs, and corporate organizations with printing solutions that enhance visibility and brand recognition.',
  mission: 'To deliver high-quality, creative, and reliable printing and branding solutions that help our clients stand out and grow.',
  vision: 'To be a trusted and leading printing and branding partner known for excellence, creativity, and customer satisfaction.',
  coreValues: [
    'Quality Excellence',
    'Creativity & Innovation',
    'Integrity & Professionalism',
    'Timely Delivery',
    'Customer Satisfaction',
  ],
}

export const servicesOverview = [
  { name: 'Corporate Branding', description: 'We help organizations build strong and consistent brand identities across all touchpoints.' },
  { name: 'Digital Printing Services', description: 'Our digital printing solutions ensure sharp images, vibrant colors, and professional finishing.' },
  { name: 'Monogram & Personalization', description: 'Add a personal touch to your items with our premium monogram services.' },
  { name: 'Apparel & Textile Printing', description: 'We provide high-quality apparel branding for corporate, promotional, and casual wear.' },
  { name: 'Promotional Products', description: 'Boost brand visibility with customized promotional items designed to leave lasting impressions.' },
  { name: 'Signage & Banners', description: 'We design and produce impactful signage solutions for indoor and outdoor visibility.' },
  { name: 'Awards & Recognition Items', description: 'Celebrate achievements with professionally crafted awards and plaques.' },
]

export const servicesDetail = [
  {
    title: 'Corporate Branding',
    intro: 'We help organizations build strong and consistent brand identities across all touchpoints.',
    listLabel: 'Our corporate branding solutions include:',
    items: [
      'Business cards, letterheads & envelopes',
      'Company profiles & branded stationery',
      'Brand identity materials',
      'Office branding and customized items',
    ],
  },
  {
    title: 'Digital Printing Services',
    intro: 'Our digital printing solutions ensure sharp images, vibrant colors, and professional finishing.',
    listLabel: 'Services include:',
    items: [
      'Flyers, brochures & posters',
      'Banners and roll-up stands',
      'Stickers, labels & decals',
      'Customized print materials',
    ],
  },
  {
    title: 'Monogram & Personalization',
    intro: 'Add a personal touch to your items with our premium monogram services.',
    listLabel: 'Ideal for:',
    idealFor: ['Corporate gifts', 'Personal branding items', 'Event souvenirs'],
    items: [],
  },
  {
    title: 'Apparel & Textile Printing',
    intro: 'We provide high-quality apparel branding for corporate, promotional, and casual wear.',
    wePrintOnLabel: 'We print on:',
    wePrintOn: ['T-shirts, polos & hoodies', 'Caps & hats', 'Uniforms and workwear'],
    methodsLabel: 'Printing methods include:',
    methods: ['Screen printing', 'Heat transfer', 'Embroidery'],
    items: [],
  },
  {
    title: 'Promotional Products',
    intro: 'Boost brand visibility with customized promotional items designed to leave lasting impressions.',
    listLabel: 'Examples include:',
    items: [
      'Branded mugs & drinkware',
      'Pens, notebooks & office items',
      'Gift items and giveaways',
    ],
  },
  {
    title: 'Signage & Banners',
    intro: 'We design and produce impactful signage solutions for indoor and outdoor visibility.',
    listLabel: 'Signage solutions include:',
    items: [
      'Flex and vinyl banners',
      'Directional and safety signs',
      'Event and exhibition signage',
      'Office and storefront branding',
    ],
  },
  {
    title: 'Awards & Recognition Items',
    intro: 'Celebrate achievements with professionally crafted awards and plaques.',
    listLabel: 'We offer:',
    items: [
      'Plaques and trophies',
      'Crystal and acrylic awards',
      'Customized recognition items',
    ],
  },
]

export const process = [
  { step: 'Consultation', text: 'We understand your needs and branding objectives.' },
  { step: 'Design', text: 'Creative concepts aligned with your brand identity.' },
  { step: 'Production', text: 'High-quality printing and finishing.' },
  { step: 'Delivery', text: 'Timely and reliable delivery.' },
]

export const industries = [
  'Corporate organizations',
  'SMEs & startups',
  'Schools & educational institutions',
  'NGOs & religious organizations',
  'Event planners & individuals',
]

export const testimonials = [
  { quote: '"Defter Prints delivered exceptional quality and exceeded our expectations."', attribution: '— Tripleo Consulting' },
  { quote: '"Professional service, great attention to detail, and timely delivery."', attribution: '— Pathrise Academy' },
]
export const testimonialsSectionTitle = 'Testimonials (Placeholder)'

export const ctaSection = {
  headline: 'Ready to bring your ideas to life?',
  body: 'Partner with Defter Prints for quality printing and branding solutions you can trust.',
  ctaQuote: 'Request a Quote',
  ctaContact: 'Contact Us Today',
}

export const contact = {
  heading: 'Contact Us',
  companyName: 'Defter Prints',
  phoneLabel: 'Phone:',
  emailLabel: 'Email:',
  addressLabel: 'Address:',
  phone: '',
  email: '',
  address: '',
  socialLabel: 'Follow us on social media',
}
