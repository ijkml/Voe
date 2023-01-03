import assist from '@img/services/assist.webp?url';
import food from '@img/services/food.webp?url';
import info from '@img/services/info.webp?url';
import lounge from '@img/services/lounge.webp?url';
import park from '@img/services/park.webp?url';
import shop from '@img/services/shop.webp?url';
import spa from '@img/services/spa.webp?url';
import wifi from '@img/services/wifi.webp?url';

import type { ServicesCard } from '@/types';

const services: ServicesCard[] = [
  {
    title: 'Dining options',
    text: 'Satisfy your hunger with a variety of dining options at the airport, including restaurants, cafes, and snack bars.',
    image: food,
    link: '/services',
  },
  {
    title: 'Shopping',
    text: "Find the perfect gift or treat yourself at the airport's retail options, including duty-free and souvenir shops.",
    image: shop,
    link: '/services',
  },
  {
    title: 'Lounges',
    text: "Relax in style at the airport's lounges, with comfortable seating and refreshments available.",
    image: lounge,
    link: '/services',
  },
  {
    title: 'Special assistance',
    text: 'We offer special assistance for passengers with disabilities or special needs, including pre-booking and wheelchair assistance.',
    image: assist,
    link: '/services',
  },
  {
    title: 'Traveler information',
    text: 'Get the information you need for a smooth, stress-free travel experience, including currency exchange and baggage storage.',
    image: info,
    link: '/services',
  },
  {
    title: 'Transportation and parking',
    text: 'Easily access transportation and parking options at the airport, including rental car agencies and shuttle services.',
    image: park,
    link: '/services',
  },
  {
    title: 'Wi-Fi and charging stations',
    text: 'Stay connected with free Wi-Fi and charging stations available throughout the airport. Find out more about locations and login information.',
    image: wifi,
    link: '/services',
  },
  {
    title: 'Other amenities',
    text: "Unwind and recharge at the airport with a range of amenities, including spas, gyms, and children's play areas.",
    image: spa,
    link: '/services',
  },
];

export default services;
