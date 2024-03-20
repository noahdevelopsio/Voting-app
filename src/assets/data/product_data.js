import imga from '../images/products/a.jpg';
import imgb from '../images/products/b.png';
import imgc from '../images/products/c.jpg';
import imgd from '../images/products/a.jpg';
import ava from '../images/avatars/a.jpg';
import avb from '../images/avatars/b.png';
import avc from '../images/avatars/c.jpg';
import avd from '../images/avatars/d.jpg';

const products = [
  {
    id: 1,
    title: 'Charles Martins',
    description: 'Full time machine learning expert for Open AI.',
    url: '#',
    votes: 41,
    submitterAvatarUrl: imga,
    productImageUrl: ava,
  },
  {
    id: 2,
    title: 'Rufus David',
    description: 'Remote Professional Software Engineer. Expert in Flutter.',
    url: '#',
    votes: 20,
    submitterAvatarUrl: imgb,
    productImageUrl: avb,
  },
  {
    id: 3,
    title: 'Harrison  BF',
    description:
      'On-demand Professional UI/UX designer. Expert in mobile development',
    url: '#',
    votes: 39,
    submitterAvatarUrl: imgc,
    productImageUrl: avc,
  },
  {
    id: 4,
    title: 'Reuben Bitch',
    description:
      'Professional Software developer with Expertise in Web App Development .',
    url: '#',
    votes: 21,
    submitterAvatarUrl: imgd,
    productImageUrl: avd,
  },
];

export default products;
