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
    title: 'Dining options',
    text: 'Satisfy your hunger with a variety of dining options at the airport, including restaurants, cafes, and snack bars.',
    image: food,
    alt: 'A picture of a bustling food court or restaurant at the airport, with a variety of dining options visible',
  },
  {
    title: 'Shopping',
    text: "Find the perfect gift or treat yourself at the airport's retail options, including duty-free and souvenir shops.",
    image: shop,
    alt: 'A picture of an airport duty-free shop or souvenir store, with a variety of products visible on the shelves',
  },
  {
    title: 'Lounges',
    text: "Relax in style at the airport's lounges, with comfortable seating and refreshments available.",
    image: lounge,
    alt: 'A picture of a comfortable and modern airport lounge, with comfortable seating and refreshments visible',
  },
  {
    title: 'Special assistance',
    text: 'We offer special assistance for passengers with disabilities or special needs, including pre-booking and wheelchair assistance.',
    image: assist,
    alt: 'A picture of an airport staff member helping a passenger with a disability or special need, such as providing assistance with a wheelchair or guiding them to their gate',
  },
  {
    title: 'Traveler information',
    text: 'Get the information you need for a smooth, stress-free travel experience, including currency exchange and baggage storage.',
    image: info,
    alt: 'A picture of an airport information desk, with staff members available to assist travelers with any questions or needs they may have',
  },
  {
    title: 'Transportation and parking',
    text: 'Easily access transportation and parking options at the airport, including rental car agencies and shuttle services.',
    image: park,
    alt: 'A picture of an airport rental car agency or shuttle bus, with transportation options visible in the background; a picture of an airport parking garage or lot, with a variety of parking options visible',
  },
  {
    title: 'Wi-Fi and charging stations',
    text: 'Stay connected with free Wi-Fi and charging stations available throughout the airport. Find out more about locations and login information.',
    image: wifi,
    alt: 'A picture of an airport terminal with Wi-Fi and charging stations visible, such as outlets and USB ports',
  },
  {
    title: 'Other amenities',
    text: "Unwind and recharge at the airport with a range of amenities, including spas, gyms, and children's play areas.",
    image: spa,
    alt: 'A picture of an airport spa or gym, with a variety of amenities and equipment visible',
  },
];

export default services;
