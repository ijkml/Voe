import food from '@img/services/food.webp?url';
import smoothTravel from '@img/blog/smooth-travel.webp?url';
import bestAir from '@img/blog/best-airports.webp?url';
import expansion from '@img/blog/expansion.webp?url';
import paris from '@img/blog/paris.webp?url';
import secureTravel from '@img/blog/secure-travel.webp?url';

import type { BlogCard } from '@/types';

const blog: BlogCard[] = [
  {
    title: '5 Tips for Stress-Free Travel at Voe',
    text: "Feeling overwhelmed by the thought of packing, navigating unfamiliar airports, and dealing with flight delays? We've got you covered with these 5 simple tips for stress-free travel at Voe. From packing essentials to preparing for flight delays, these tips will help you stay calm and focused on your journey.",
    image: smoothTravel,
    link: '/blog',
    date: 'August 15, 2022',
  },

  {
    title: "Exploring the World's Most Beautiful Airports",
    text: "Ready to be wowed by some of the world's most breathtaking airports? From futuristic designs to stunning natural landscapes, these airports are destinations in themselves. Get ready to be inspired by our top picks for the world's most beautiful airports, including Voe!",
    image: bestAir,
    link: '/blog',
    date: 'December 4, 2022',
  },
  {
    title: 'The Best Places to Eat at Voe Airport',
    text: "When it comes to eating at Voe Airport, the options can be overwhelming. From fast food chains to fancy sit-down restaurants, how do you choose? Don't worry, we've done the legwork for you and compiled a list of the best places to eat at Voe Airport. From quick bites to sit-down meals, these options have got you covered.",
    image: food,
    link: '/blog',
    date: 'September 19, 2022',
  },
  {
    title: 'New Nonstop Flight to Paris Now Available from Voe',
    text: "Bonjour! We're excited to announce that we now offer a nonstop flight to the City of Love from Voe. Whether you're a seasoned traveler or planning your first trip abroad, this new flight makes it easier than ever to visit the stunning city of Paris. Don't wait, book your trip today and experience the romance and culture of Paris for yourself.",
    image: paris,
    link: '/blog',
    date: 'June 22, 2022',
  },
  {
    title: 'Voe Airport Unveils Major Expansion Plans',
    text: "We're excited to announce that we're embarking on a major expansion project at Voe Airport to better serve the needs of our passengers. From new terminal buildings to additional parking options, these improvements will make your travel experience more convenient and enjoyable. Keep an eye out for updates as we work towards bringing these improvements to life.",
    image: expansion,
    link: '/blog',
    date: 'November 2, 2022',
  },
  {
    title: 'Voe Airport Earns Top Safety Rating',
    text: "Safety is our top priority at Voe Airport, and we're proud to announce that we've earned a top safety rating from industry experts. From rigorous training programs for our staff to state-of-the-art security systems, we're committed to providing a safe and secure environment for our passengers. We're thrilled to have received this recognition, and we'll continue to work hard to maintain the highest safety standards.",
    image: secureTravel,
    link: '/blog',
    date: 'January 14, 2023',
  },
];

export default blog;
