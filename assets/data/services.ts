import assist from '@img/services/assist.webp?url';
import food from '@img/services/food.webp?url';
import info from '@img/services/info.webp?url';
import lounge from '@img/services/lounge.webp?url';
import park from '@img/services/park.webp?url';
import shop from '@img/services/shop.webp?url';
import spa from '@img/services/spa.webp?url';
import wifi from '@img/services/wifi.webp?url';

const services = [
  {
    id: 1,
    image: food,
    link: '/services/dining',
  },
  {
    id: 2,
    image: shop,
    link: '/services/shopping',
  },
  {
    id: 3,
    image: lounge,
    link: '/services/lounge',
  },
  {
    id: 4,
    image: assist,
    link: '/services/assistance',
  },
  {
    id: 5,
    image: info,
    link: '/services/info-hub',
  },
  {
    id: 6,
    image: park,
    link: '/services/transportation',
  },
  {
    id: 7,
    image: wifi,
    link: '/services/wi-fi',
  },
  {
    id: 8,
    image: spa,
    link: '/services',
  },
];

export default services;
