interface LinkInterface {
  title: string;
  translate?: boolean;
  links: {
    text: string;
    link: string;
    external?: boolean;
  }[];
}

const ijkml = 'https://ijkml.bio.link';

const links: LinkInterface[] = [
  {
    title: 'connect',
    links: [
      { text: 'Twitter', link: ijkml, external: true },
      { text: 'Facebook', link: ijkml, external: true },
      { text: 'Instagram', link: ijkml, external: true },
      { text: 'LinkedIn', link: ijkml, external: true },
      { text: 'WhatsApp', link: ijkml, external: true },
    ],
  },
  {
    title: 'about',
    translate: true,
    links: [
      { text: 'admin', link: '/admin' },
      { text: 'partner', link: '/partners' },
      { text: 'tos', link: '/terms-of-service' },
      { text: 'career', link: '/careers' },
    ],
  },
  {
    title: 'service',
    translate: true,
    links: [
      { text: 'contact', link: '/contact' },
      { text: 'special', link: '/special-needs' },
      { text: 'faq', link: '/faqs' },
      { text: 'lost', link: '/lost-and-found' },
    ],
  },
];

export default links;
