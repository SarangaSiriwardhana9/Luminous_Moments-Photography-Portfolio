import { IMAGES, ROUTES } from "./index";
import { 
  PortfolioCategory as PortfolioCategoryEnum,
  PortfolioCategoryData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  GalleryImage
} from "./types";

export const PORTFOLIO_DATA: Record<string, PortfolioCategoryData> = {
  [PortfolioCategoryEnum.WEDDINGS]: {
    id: PortfolioCategoryEnum.WEDDINGS,
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
        src: "/images/portfolio-4.jpg",
        alt: "Bride and groom portrait",
        width: 800,
        height: 600,
        tags: ["Portrait", "Couple"]
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "Wedding reception celebration",
        width: 800,
        height: 600,
        tags: ["Reception", "Celebration"]
      },
      {
        src: "/images/portfolio-13.jpg",
        alt: "Traditional Poruwa ceremony",
        width: 800,
        height: 600,
        tags: ["Traditional", "Poruwa"]
      },
      {
        src: "/images/portfolio-17.jpg",
        alt: "Wedding preparation",
        width: 800,
        height: 600,
        tags: ["Preparation", "Getting Ready"]
      },
      {
        src: "/images/portfolio-14.jpg",
        alt: "First dance at reception",
        width: 800,
        height: 600,
        tags: ["Reception", "Dance"]
      },
     
    ],
    serviceLink: ROUTES.SERVICES_WEDDING
  },
  [PortfolioCategoryEnum.GRADUATIONS]: {
    id: PortfolioCategoryEnum.GRADUATIONS,
    title: "Graduation Photography",
    description: "A collection of our finest graduation photography showcasing academic achievements across Sri Lanka.",
    shortDescription: "Browse our collection of graduation photography from universities and schools across Sri Lanka. Professional graduation photography showcase.",
    heroImage: IMAGES.SERVICE_GRADUATION,
    images: [
      {
        src: "/images/portfolio-8.jpg",
        alt: "University graduation ceremony",
        width: 800,
        height: 600,
        tags: ["University", "Ceremony"]
      },
      {
        src: "/images/portfolio-15.jpg",
        alt: "Graduate portrait with diploma",
        width: 800,
        height: 600,
        tags: ["Portrait", "Diploma"]
      },
      {
        src: "/images/portfolio-18.jpg",
        alt: "Graduation group celebration",
        width: 800,
        height: 600,
        tags: ["Group", "Celebration"]
      },
      {
        src: "/images/portfolio-22.jpg",
        alt: "Graduate with family",
        width: 800,
        height: 600,
        tags: ["Family", "Portrait"]
      },
      
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
        src: "/images/portfolio-16.jpg",
        alt: "Children's birthday party",
        width: 800,
        height: 600,
        tags: ["Children", "Party"]
      },
      {
        src: "/images/portfolio-24.jpg",
        alt: "Milestone birthday celebration",
        width: 800,
        height: 600,
        tags: ["Milestone", "Celebration"]
      },
      {
        src: "/images/portfolio-25.jpg",
        alt: "Birthday cake cutting moment",
        width: 800,
        height: 600,
        tags: ["Cake", "Moment"]
      },
      {
        src: "/images/portfolio-26.jpg",
        alt: "Family gathered for birthday",
        width: 800,
        height: 600,
        tags: ["Family", "Group"]
      },
      {
        src: "/images/portfolio-27.jpg",
        alt: "Birthday party with balloons",
        width: 800,
        height: 600,
        tags: ["Balloons", "Party"]
      },
      {
        src: "/images/portfolio-28.jpg",
        alt: "Birthday party with candles",
        width: 800,
        height: 600,
        tags: ["Candles", "Party"]
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
        src: "/images/portfolio-2.jpg",
        alt: "Couple at beach engagement shoot",
        width: 800,
        height: 600,
        tags: ["Beach", "Couple"]
      },
      {
        src: "/images/portfolio-3.jpg",
        alt: "Ring detail shot",
        width: 800,
        height: 600,
        tags: ["Ring", "Detail"]
      },
      {
        src: "/images/portfolio-10.jpg",
        alt: "Romantic couple portrait",
        width: 800,
        height: 600,
        tags: ["Romantic", "Portrait"]
      },
      {
        src: "/images/portfolio-12.jpg",
        alt: "Couple at sunset engagement shoot",
        width: 800,
        height: 600,
        tags: ["Sunset", "Couple"]
      },
      {
        src: "/images/portfolio-19.jpg",
        alt: "Couple at sunset engagement shoot",
        width: 800,
        height: 600,
        tags: ["Sunset", "Couple"]
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
        src: "/images/portfolio-5.jpg",
        alt: "Corporate conference event",
        width: 800,
        height: 600,
        tags: ["Conference", "Event"]
      },
      {
        src: "/images/portfolio-9.jpg",
        alt: "Executive headshot",
        width: 800,
        height: 600,
        tags: ["Headshot", "Executive"]
      },
      {
        src: "/images/portfolio-29.jpg",
        alt: "Team building activity",
        width: 800,
        height: 600,
        tags: ["Team Building", "Activity"]
      },
      {
        src: "/images/portfolio-30.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600,
        tags: ["Product", "Launch"]
      },
      {
        src: "/images/portfolio-31.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600,
        tags: ["Product", "Launch"]
      },
      {
        src: "/images/portfolio-32.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600,
        tags: ["Product", "Launch"]
      },
      {
        src: "/images/portfolio-33.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600,
        tags: ["Product", "Launch"]
      },
      {
        src: "/images/portfolio-34.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600,
        tags: ["Product", "Launch"]
      },
      {
        src: "/images/portfolio-35.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600,
        tags: ["Product", "Launch"]
      },
      {
        src: "/images/portfolio-36.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600,
        tags: ["Product", "Launch"]
      },

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
        src: "/images/portfolio-11.jpg",
        alt: "Traditional Poruwa ceremony",
        width: 800,
        height: 600,
        tags: ["Poruwa", "Ceremony"]
      },
      {
        src: "/images/portfolio-21.jpg",
        alt: "Sri Lankan dancers performance",
        width: 800,
        height: 600,
        tags: ["Dancers", "Performance"]
      },
      {
        src: "/images/portfolio-37.jpg",
        alt: "Religious ritual ceremony",
        width: 800,
        height: 600,
        tags: ["Religious", "Ritual"]
      },
      {
        src: "/images/portfolio-38.jpg",
        alt: "Traditional homecoming ceremony",
        width: 800,
        height: 600,
        tags: ["Homecoming", "Ceremony"]
      },
      {
        src: "/images/portfolio-39.jpg",
        alt: "Traditional Sri Lankan attire",
        width: 800,
        height: 600,
        tags: ["Attire", "Traditional"]
      },
      {
        src: "/images/portfolio-40.jpg",
        alt: "Traditional Sri Lankan attire",
        width: 800,
        height: 600,
        tags: ["Attire", "Traditional"]
      }
      ,
      {
        src: "/images/portfolio-41.jpg",
        alt: "Traditional Sri Lankan attire",
        width: 800,
        height: 600,
        tags: ["Attire", "Traditional"]
      }
    ],
    serviceLink: ROUTES.SERVICES_CULTURAL
  }
}; 