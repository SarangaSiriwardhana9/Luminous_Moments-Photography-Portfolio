import { IMAGES } from './images';

export interface TestimonialType {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "1",
    quote: "Our wedding photos are absolutely stunning. Hasaranga captured all the important moments and traditions of our Sri Lankan wedding perfectly. We couldn't be happier with the results!",
    author: "Kavindi & Rajeev",
    role: "Wedding Clients",
    avatar: IMAGES.TESTIMONIAL_1
  },
  {
    id: "2",
    quote: "Hasaranga did an amazing job with my graduation photos. His attention to detail and creativity made these photos something I'll cherish forever. Highly recommend!",
    author: "Dinesh Perera",
    role: "Graduation Client",
    avatar: IMAGES.TESTIMONIAL_2
  },
  {
    id: "3",
    quote: "Not only is the photography exceptional, but Hasaranga's service was outstanding. Always professional, on time, and made everyone feel comfortable during our corporate event.",
    author: "Malini Fernando",
    role: "Corporate Event Manager",
    avatar: IMAGES.TESTIMONIAL_3
  },
  {
    id: "4",
    quote: "My daughter's 1st birthday photos came out beautifully! Hasaranga has a special talent for capturing those spontaneous, joyful moments that make childhood so special.",
    author: "Priyanka & Suresh",
    role: "Birthday Party Clients",
    avatar: IMAGES.TESTIMONIAL_4
  },
]; 