import { IMAGES, ROUTES } from "./index";

export interface PortfolioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  tags: string[];
}

export interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  images: PortfolioImage[];
  serviceLink: string;
}

export const PORTFOLIO_DATA: Record<string, PortfolioCategory> = {
  "weddings": {
    id: "weddings",
    title: "Wedding Photography",
    description: "A collection of our finest wedding photography showcasing love celebrations across Sri Lanka.",
    shortDescription: "Browse our collection of wedding photography from ceremonies across Sri Lanka. Traditional and modern wedding photography showcase.",
    heroImage: IMAGES.SERVICE_WEDDING,
    images: [
      {
        src: "/images/portfolio-1.jpg",
        alt: "Traditional Sri Lankan wedding ceremony",
        width: 800,
        height: 600,
        tags: ["Traditional", "Ceremony"]
      },
      {
        src: "/images/portfolio-2.jpg",
        alt: "Bride and groom portrait",
        width: 800,
        height: 600,
        tags: ["Portrait", "Couple"]
      },
      {
        src: "/images/portfolio-3.jpg",
        alt: "Wedding reception celebration",
        width: 800,
        height: 600,
        tags: ["Reception", "Celebration"]
      },
      {
        src: "/images/portfolio-4.jpg",
        alt: "Traditional Poruwa ceremony",
        width: 800,
        height: 600,
        tags: ["Traditional", "Poruwa"]
      },
      {
        src: "/images/portfolio-5.jpg",
        alt: "Wedding preparation",
        width: 800,
        height: 600,
        tags: ["Preparation", "Getting Ready"]
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "First dance at reception",
        width: 800,
        height: 600,
        tags: ["Reception", "Dance"]
      },
      {
        src: "/images/portfolio-7.jpg",
        alt: "Wedding party group photo",
        width: 800,
        height: 600,
        tags: ["Group", "Wedding Party"]
      },
      {
        src: "/images/portfolio-8.jpg",
        alt: "Outdoor wedding portrait",
        width: 800,
        height: 600,
        tags: ["Portrait", "Outdoor"]
      },
      {
        src: "/images/portfolio-9.jpg",
        alt: "Post-wedding couple session",
        width: 800,
        height: 600,
        tags: ["Couple", "Portrait"]
      }
    ],
    serviceLink: ROUTES.SERVICES_WEDDING
  },
  "graduations": {
    id: "graduations",
    title: "Graduation Photography",
    description: "A collection of our finest graduation photography showcasing academic achievements across Sri Lanka.",
    shortDescription: "Browse our collection of graduation photography from universities and schools across Sri Lanka. Professional graduation photography showcase.",
    heroImage: IMAGES.SERVICE_GRADUATION,
    images: [
      {
        src: "/images/portfolio-10.jpg",
        alt: "University graduation ceremony",
        width: 800,
        height: 600,
        tags: ["University", "Ceremony"]
      },
      {
        src: "/images/portfolio-11.jpg",
        alt: "Graduate portrait with diploma",
        width: 800,
        height: 600,
        tags: ["Portrait", "Diploma"]
      },
      {
        src: "/images/portfolio-12.jpg",
        alt: "Graduation group celebration",
        width: 800,
        height: 600,
        tags: ["Group", "Celebration"]
      },
      {
        src: "/images/portfolio-13.jpg",
        alt: "Graduate with family",
        width: 800,
        height: 600,
        tags: ["Family", "Portrait"]
      },
      {
        src: "/images/portfolio-14.jpg",
        alt: "Cap toss celebration",
        width: 800,
        height: 600,
        tags: ["Cap Toss", "Celebration"]
      }
    ],
    serviceLink: ROUTES.SERVICES_GRADUATION
  },
  "birthdays": {
    id: "birthdays",
    title: "Birthday Photography",
    description: "A collection of our beautiful birthday celebration photography for clients of all ages.",
    shortDescription: "Browse our collection of birthday photography from celebrations across Sri Lanka. From children's parties to milestone birthday events.",
    heroImage: IMAGES.SERVICE_BIRTHDAY,
    images: [
      {
        src: "/images/portfolio-15.jpg",
        alt: "Children's birthday party",
        width: 800,
        height: 600,
        tags: ["Children", "Party"]
      },
      {
        src: "/images/portfolio-16.jpg",
        alt: "Milestone birthday celebration",
        width: 800,
        height: 600,
        tags: ["Milestone", "Celebration"]
      },
      {
        src: "/images/portfolio-17.jpg",
        alt: "Birthday cake cutting moment",
        width: 800,
        height: 600,
        tags: ["Cake", "Moment"]
      },
      {
        src: "/images/portfolio-18.jpg",
        alt: "Family gathered for birthday",
        width: 800,
        height: 600,
        tags: ["Family", "Group"]
      }
    ],
    serviceLink: ROUTES.SERVICES_BIRTHDAY
  },
  "engagements": {
    id: "engagements",
    title: "Engagement Photography",
    description: "Capturing beautiful engagement moments and pre-wedding photography across Sri Lanka.",
    shortDescription: "Browse our engagement photography portfolio showcasing couples in love during their pre-wedding photoshoots.",
    heroImage: IMAGES.SERVICE_ENGAGEMENT,
    images: [
      {
        src: "/images/portfolio-19.jpg",
        alt: "Couple at beach engagement shoot",
        width: 800,
        height: 600,
        tags: ["Beach", "Couple"]
      },
      {
        src: "/images/portfolio-20.jpg",
        alt: "Ring detail shot",
        width: 800,
        height: 600,
        tags: ["Ring", "Detail"]
      },
      {
        src: "/images/portfolio-21.jpg",
        alt: "Romantic couple portrait",
        width: 800,
        height: 600,
        tags: ["Romantic", "Portrait"]
      }
    ],
    serviceLink: ROUTES.SERVICES_ENGAGEMENT
  },
  "corporate": {
    id: "corporate",
    title: "Corporate Photography",
    description: "Professional corporate event and business photography for companies across Sri Lanka.",
    shortDescription: "Browse our corporate photography portfolio including events, headshots, and business photography for companies.",
    heroImage: IMAGES.SERVICE_CORPORATE,
    images: [
      {
        src: "/images/portfolio-22.jpg",
        alt: "Corporate conference event",
        width: 800,
        height: 600,
        tags: ["Conference", "Event"]
      },
      {
        src: "/images/portfolio-23.jpg",
        alt: "Executive headshot",
        width: 800,
        height: 600,
        tags: ["Headshot", "Executive"]
      },
      {
        src: "/images/portfolio-1.jpg",
        alt: "Team building activity",
        width: 800,
        height: 600,
        tags: ["Team Building", "Activity"]
      },
      {
        src: "/images/portfolio-2.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600,
        tags: ["Product", "Launch"]
      }
    ],
    serviceLink: ROUTES.SERVICES_CORPORATE
  },
  "cultural": {
    id: "cultural",
    title: "Cultural Photography",
    description: "Capturing traditional Sri Lankan ceremonies and cultural events with respect and artistry.",
    shortDescription: "Browse our collection of cultural photography featuring traditional Sri Lankan ceremonies and cultural events.",
    heroImage: IMAGES.SERVICE_CULTURAL,
    images: [
      {
        src: "/images/portfolio-3.jpg",
        alt: "Traditional Poruwa ceremony",
        width: 800,
        height: 600,
        tags: ["Poruwa", "Ceremony"]
      },
      {
        src: "/images/portfolio-4.jpg",
        alt: "Sri Lankan dancers performance",
        width: 800,
        height: 600,
        tags: ["Dancers", "Performance"]
      },
      {
        src: "/images/portfolio-5.jpg",
        alt: "Religious ritual ceremony",
        width: 800,
        height: 600,
        tags: ["Religious", "Ritual"]
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "Traditional homecoming ceremony",
        width: 800,
        height: 600,
        tags: ["Homecoming", "Ceremony"]
      },
      {
        src: "/images/portfolio-7.jpg",
        alt: "Traditional Sri Lankan attire",
        width: 800,
        height: 600,
        tags: ["Attire", "Traditional"]
      }
    ],
    serviceLink: ROUTES.SERVICES_CULTURAL
  }
}; 