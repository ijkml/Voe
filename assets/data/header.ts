import timer2 from '@icons/timer-2.svg?component';
import timer10 from '@icons/timer-10.svg?component';
import rentCar from '@icons/rent-car.svg?component';
import priceTag from '@icons/price-tag.svg?component';
import globeEarth from '@icons/globe-earth.svg?component';
import map from '@icons/map.svg?component';
import compass from '@icons/compass.svg?component';
import calendar from '@icons/calendar.svg?component';
import premium from '@icons/premium.svg?component';
import paris from '@icons/paris.svg?component';
import sticky from '@icons/sticky.svg?component';
import terms from '@icons/terms.svg?component';
import airport from '@icons/airport.svg?component';
import support from '@icons/support.svg?component';
import about from '@icons/about.svg?component';

// import  from '@icons/.svg?component';
import type { MenuItem } from '@/types/header';

const menuData = {
  tour: {
    id: 'tour',
    items: <MenuItem[]>[
      {
        name: 'city',
        description: 'city-text',
        link: '/city-tours',
        icon: paris,
      },
      {
        name: 'custom',
        description: 'custom-text',
        link: '/customized-tours',
        icon: sticky,
      },
      {
        name: 'package',
        description: 'package-text',
        link: '/all-inclusive-packages',
        icon: premium,
      },
    ],
  },
  flight: {
    id: 'flight',
    items: <MenuItem[]>[
      {
        name: 'schedule',
        description: 'schedule-text',
        link: '/flight-schedule',
        icon: calendar,
      },
      {
        name: 'destinations',
        description: 'destinations-text',
        link: '/destinations',
        icon: compass,
      },
      {
        name: 'domestic',
        description: 'domestic-text',
        link: '/domestic-flights',
        icon: map,
      },
      {
        name: 'international',
        description: 'international-text',
        link: '/international-flights',
        icon: globeEarth,
      },
    ],
  },
  park: {
    id: 'park',
    items: <MenuItem[]>[
      {
        name: 'short',
        description: 'short-text',
        link: '/short-term-parking',
        icon: timer2,
      },
      {
        name: 'long',
        description: 'long-text',
        link: '/long-term-parking',
        icon: timer10,
      },
      {
        name: 'rate',
        description: 'rate-text',
        link: '/parking-rates',
        icon: priceTag,
      },
      {
        name: 'rent',
        description: 'rent-text',
        link: '/rental-options',
        icon: rentCar,
      },
    ],
  },
  about: {
    id: 'about',
    items: <MenuItem[]>[
      {
        name: 'about',
        description: 'about-text',
        link: '/about-us',
        icon: about,
      },
      {
        name: 'customer',
        description: 'customer-text',
        link: '/customer-service',
        icon: support,
      },
      {
        name: 'terms',
        description: 'terms-text',
        link: '/terms-of-service',
        icon: terms,
      },
      {
        name: 'contact',
        description: 'contact-text',
        link: '/contact-us',
        icon: airport,
      },
    ],
  },
};

export { menuData };
