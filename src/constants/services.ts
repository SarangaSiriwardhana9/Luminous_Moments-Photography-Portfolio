import { IMAGES } from './images';
import { ROUTES } from './routes';

export interface ServiceType {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  price: string;
}

export const SERVICES: ServiceType[] = [
  {
    title: "Wedding Photography",
    description: "Comprehensive coverage of your wedding day, from preparation to reception, capturing all the important moments and details.",
    imageSrc: IMAGES.SERVICE_WEDDING,
    href: ROUTES.SERVICES_WEDDING,
    price: "LKR 150,000"
  },
  {
    title: "Graduation Photography",
    description: "Professional graduation photos to commemorate your academic achievements, including individual portraits and group shots.",
    imageSrc: IMAGES.SERVICE_GRADUATION,
    href: ROUTES.SERVICES_GRADUATION,
    price: "LKR 45,000"
  },
  {
    title: "Birthday Celebrations",
    description: "Capture the joy and excitement of birthday celebrations, from kids' parties to milestone birthdays with friends and family.",
    imageSrc: IMAGES.SERVICE_BIRTHDAY,
    href: ROUTES.SERVICES_BIRTHDAY,
    price: "LKR 35,000"
  },
  {
    title: "Engagement Sessions",
    description: "Beautiful pre-wedding photoshoots to celebrate your engagement and create stunning images for your invitations.",
    imageSrc: IMAGES.SERVICE_ENGAGEMENT,
    href: ROUTES.SERVICES_ENGAGEMENT,
    price: "LKR 35,000"
  },
  {
    title: "Corporate Events",
    description: "Professional photography for corporate events, conferences, product launches, and team gatherings.",
    imageSrc: IMAGES.SERVICE_CORPORATE,
    href: ROUTES.SERVICES_CORPORATE,
    price: "LKR 50,000"
  },
  {
    title: "Cultural Ceremonies",
    description: "Specialized photography for traditional Sri Lankan ceremonies, including Poruwa, Homecoming, and religious rituals.",
    imageSrc: IMAGES.SERVICE_CULTURAL,
    href: ROUTES.SERVICES_CULTURAL,
    price: "LKR 45,000"
  },
]; 