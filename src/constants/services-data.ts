import { IMAGES, ROUTES } from "./index";

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface ServiceGalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  detailImage: string;
  additionalImages: string[];
  galleryImages: ServiceGalleryImage[];
  features: ServiceFeature[];
  packages: ServicePackage[];
  portfolioLink: string;
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "wedding-photography": {
    id: "wedding-photography",
    title: "Wedding Photography",
    description: "Capturing the love, joy, and unique moments of your special day with artistic elegance.",
    shortDescription: "Comprehensive coverage of your wedding day, from preparation to reception, capturing all the important moments and details.",
    heroImage: IMAGES.SERVICE_WEDDING,
    detailImage: IMAGES.PORTFOLIO_1,
    additionalImages: [IMAGES.SERVICE_WEDDING_1, IMAGES.SERVICE_WEDDING_2],
    galleryImages: [
      {
        src: "/images/portfolio-1.jpg",
        alt: "Traditional Sri Lankan wedding ceremony",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-2.jpg",
        alt: "Bride and groom portrait",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-3.jpg",
        alt: "Wedding reception decorations",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-4.jpg",
        alt: "First dance at reception",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-5.jpg",
        alt: "Wedding party group photo",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "Traditional ceremony details",
        width: 800,
        height: 600
      }
    ],
    features: [
      {
        icon: "Calendar",
        title: "Pre-Wedding Consultation",
        description: "Detailed planning to understand your vision"
      },
      {
        icon: "Clock",
        title: "Full-Day Coverage",
        description: "From preparation to reception"
      },
      {
        icon: "Camera",
        title: "Multiple Photographers",
        description: "Capturing every angle and moment"
      },
      {
        icon: "Heart",
        title: "Beautifully Edited",
        description: "Professional retouching for perfect memories"
      }
    ],
    packages: [
      {
        name: "Essential",
        price: "LKR 150,000",
        description: "Perfect for intimate weddings with essential coverage of your special day.",
        features: [
          "8 hours of photography coverage",
          "1 professional photographer",
          "200+ professionally edited digital images",
          "Online gallery for 6 months",
          "Pre-wedding consultation",
          "High-resolution digital files"
        ],
        highlighted: false
      },
      {
        name: "Premium",
        price: "LKR 250,000",
        description: "Our most popular package with comprehensive coverage of your wedding day.",
        features: [
          "12 hours of photography coverage",
          "2 professional photographers",
          "500+ professionally edited digital images",
          "Online gallery for 1 year",
          "Pre-wedding consultation and venue visit",
          "Engagement photoshoot session",
          "Premium photo album (40 pages)",
          "High-resolution digital files"
        ],
        highlighted: true
      },
      {
        name: "Deluxe",
        price: "LKR 350,000",
        description: "The ultimate wedding photography experience with extended coverage and premium products.",
        features: [
          "Full weekend coverage (pre-wedding events and wedding day)",
          "2 professional photographers",
          "Assistant photographer for crowd shots",
          "700+ professionally edited digital images",
          "Online gallery for 2 years",
          "Pre-wedding consultation and venue visits",
          "Engagement photoshoot session",
          "Luxury photo album (60 pages)",
          "20 mounted prints (8×10″)",
          "2 parent albums",
          "High-resolution digital files"
        ],
        highlighted: false
      }
    ],
    portfolioLink: ROUTES.PORTFOLIO_WEDDINGS
  },
  "graduation-photography": {
    id: "graduation-photography",
    title: "Graduation Photography",
    description: "Commemorate your academic achievements with professional photography that captures this important milestone.",
    shortDescription: "Professional graduation photos to commemorate your academic achievements, including individual portraits and group shots.",
    heroImage: IMAGES.SERVICE_GRADUATION,
    detailImage: IMAGES.PORTFOLIO_2,
    additionalImages: [IMAGES.SERVICE_GRADUATION_1, IMAGES.SERVICE_GRADUATION_2],
    galleryImages: [
      {
        src: "/images/portfolio-10.jpg",
        alt: "University graduation ceremony",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-11.jpg",
        alt: "Graduate with diploma",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-12.jpg",
        alt: "Graduate with family members",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-13.jpg",
        alt: "Cap toss celebration",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-14.jpg",
        alt: "Group of graduates celebrating",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-7.jpg",
        alt: "Professional graduation portrait",
        width: 800,
        height: 600
      }
    ],
    features: [
      {
        icon: "Award",
        title: "Formal Portraits",
        description: "Professional cap and gown portraits"
      },
      {
        icon: "Camera",
        title: "Ceremony Coverage",
        description: "Capture the processional and receiving your degree"
      },
      {
        icon: "Users",
        title: "Group Photos",
        description: "With classmates, faculty, and family"
      },
      {
        icon: "Download",
        title: "Digital Gallery",
        description: "High-resolution images for sharing"
      }
    ],
    packages: [
      {
        name: "Basic",
        price: "LKR 45,000",
        description: "Essential graduation photography coverage for individuals and small groups.",
        features: [
          "Pre-ceremony portraits (1 hour)",
          "Ceremony coverage (processional, degree conferral)",
          "50+ professionally edited digital images",
          "Online gallery for 3 months",
          "High-resolution digital files"
        ],
        highlighted: false
      },
      {
        name: "Standard",
        price: "LKR 65,000",
        description: "Our most popular package with comprehensive coverage of your graduation day.",
        features: [
          "Pre-ceremony portraits (2 hours)",
          "Full ceremony coverage",
          "Post-ceremony celebration photos",
          "Group photos with classmates and faculty",
          "100+ professionally edited digital images",
          "Online gallery for 6 months",
          "High-resolution digital files",
          "1 mounted print (8×10″)"
        ],
        highlighted: true
      },
      {
        name: "Premium",
        price: "LKR 85,000",
        description: "The complete graduation photography experience with additional services and products.",
        features: [
          "Pre-ceremony portraits (3 hours)",
          "Full ceremony coverage",
          "Post-ceremony celebration photos",
          "Group photos with classmates and faculty",
          "Family formal portraits",
          "200+ professionally edited digital images",
          "Online gallery for 1 year",
          "Graduation photo album (20 pages)",
          "3 mounted prints (8×10″)",
          "High-resolution digital files"
        ],
        highlighted: false
      }
    ],
    portfolioLink: ROUTES.PORTFOLIO_GRADUATIONS
  },
  "birthday-photography": {
    id: "birthday-photography",
    title: "Birthday Photography",
    description: "Preserve the joy and excitement of birthday celebrations with our professional photography services.",
    shortDescription: "Capture the joy and excitement of birthday celebrations, from kids' parties to milestone birthdays with friends and family.",
    heroImage: IMAGES.SERVICE_BIRTHDAY,
    detailImage: IMAGES.PORTFOLIO_4,
    additionalImages: [IMAGES.SERVICE_BIRTHDAY_1, IMAGES.SERVICE_BIRTHDAY_2],
    galleryImages: [
      {
        src: "/images/portfolio-15.jpg",
        alt: "Children's birthday party",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-16.jpg",
        alt: "Milestone birthday celebration",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-17.jpg",
        alt: "Birthday cake cutting moment",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-18.jpg",
        alt: "Family gathered for birthday",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-8.jpg",
        alt: "Surprise birthday party",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-9.jpg",
        alt: "Birthday decorations",
        width: 800,
        height: 600
      }
    ],
    features: [
      {
        icon: "Party",
        title: "Event Coverage",
        description: "Capturing the entire celebration"
      },
      {
        icon: "Gift",
        title: "Special Moments",
        description: "Cake cutting, gift opening, and speeches"
      },
      {
        icon: "UserPlus",
        title: "Guest Photos",
        description: "Individual and group shots with attendees"
      },
      {
        icon: "ImagePlus",
        title: "Themed Photography",
        description: "Matching your party theme and decorations"
      }
    ],
    packages: [
      {
        name: "Basic",
        price: "LKR 35,000",
        description: "Perfect for small birthday celebrations with essential coverage.",
        features: [
          "2 hours of photography coverage",
          "1 professional photographer",
          "100+ professionally edited digital images",
          "Online gallery for 3 months",
          "High-resolution digital files"
        ],
        highlighted: false
      },
      {
        name: "Standard",
        price: "LKR 55,000",
        description: "Our most popular package for comprehensive birthday party coverage.",
        features: [
          "4 hours of photography coverage",
          "1 professional photographer",
          "200+ professionally edited digital images",
          "Online gallery for 6 months",
          "High-resolution digital files",
          "Birthday photo album (20 pages)",
          "10 printed photo cards (5×7″)"
        ],
        highlighted: true
      },
      {
        name: "Premium",
        price: "LKR 75,000",
        description: "The ultimate birthday photography experience for milestone celebrations.",
        features: [
          "6 hours of photography coverage",
          "2 professional photographers",
          "300+ professionally edited digital images",
          "Online gallery for 1 year",
          "Luxury photo album (30 pages)",
          "20 mounted prints (5×7″)",
          "Photo booth service (2 hours)",
          "High-resolution digital files"
        ],
        highlighted: false
      }
    ],
    portfolioLink: ROUTES.PORTFOLIO_BIRTHDAYS
  },
  "engagement-shoots": {
    id: "engagement-shoots",
    title: "Engagement Photography",
    description: "Beautiful pre-wedding photoshoots to celebrate your engagement and create stunning images for your invitations.",
    shortDescription: "Beautiful pre-wedding photoshoots to celebrate your engagement and create stunning images for your invitations.",
    heroImage: IMAGES.SERVICE_ENGAGEMENT,
    detailImage: IMAGES.PORTFOLIO_3,
    additionalImages: [IMAGES.SERVICE_ENGAGEMENT_1, IMAGES.SERVICE_ENGAGEMENT_2],
    galleryImages: [
      {
        src: "/images/portfolio-19.jpg",
        alt: "Couple at beach engagement shoot",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-20.jpg",
        alt: "Ring detail shot",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-21.jpg",
        alt: "Romantic couple portrait",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-4.jpg",
        alt: "Urban engagement photoshoot",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-5.jpg",
        alt: "Couple in traditional attire",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "Nature setting engagement photos",
        width: 800,
        height: 600
      }
    ],
    features: [
      {
        icon: "Map",
        title: "Location Scouting",
        description: "Finding the perfect spots for your photos"
      },
      {
        icon: "Sparkles",
        title: "Creative Direction",
        description: "Posing guidance and creative concepts"
      },
      {
        icon: "Sun",
        title: "Perfect Timing",
        description: "Shooting during golden hour for best light"
      },
      {
        icon: "Heart",
        title: "Storytelling",
        description: "Capturing your unique love story"
      }
    ],
    packages: [
      {
        name: "Basic",
        price: "LKR 35,000",
        description: "Essential engagement photography at a single location.",
        features: [
          "2 hours of photography coverage",
          "1 location of your choice",
          "1 outfit change",
          "75+ professionally edited digital images",
          "Online gallery for 3 months",
          "High-resolution digital files"
        ],
        highlighted: false
      },
      {
        name: "Standard",
        price: "LKR 55,000",
        description: "Our most popular engagement photography package.",
        features: [
          "3 hours of photography coverage",
          "2 locations of your choice",
          "2 outfit changes",
          "120+ professionally edited digital images",
          "Online gallery for 6 months",
          "High-resolution digital files",
          "10 mounted prints (5×7″)"
        ],
        highlighted: true
      },
      {
        name: "Premium",
        price: "LKR 75,000",
        description: "The ultimate engagement experience with extended coverage.",
        features: [
          "5 hours of photography coverage",
          "3 locations of your choice",
          "3 outfit changes",
          "200+ professionally edited digital images",
          "Online gallery for 1 year",
          "Engagement photo album (30 pages)",
          "20 mounted prints (5×7″)",
          "Custom photo cards for your wedding invitation",
          "High-resolution digital files"
        ],
        highlighted: false
      }
    ],
    portfolioLink: ROUTES.PORTFOLIO_ENGAGEMENTS
  },
  "corporate-photography": {
    id: "corporate-photography",
    title: "Corporate Photography",
    description: "Professional photography for corporate events, conferences, product launches, and team gatherings.",
    shortDescription: "Professional photography for corporate events, conferences, product launches, and team gatherings.",
    heroImage: IMAGES.SERVICE_CORPORATE,
    detailImage: IMAGES.PORTFOLIO_5,
    additionalImages: [IMAGES.SERVICE_CORPORATE_1, IMAGES.SERVICE_CORPORATE_2],
    galleryImages: [
      {
        src: "/images/portfolio-22.jpg",
        alt: "Corporate conference event",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-23.jpg",
        alt: "Executive headshot",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-1.jpg",
        alt: "Team building activity",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-2.jpg",
        alt: "Product launch photography",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-3.jpg",
        alt: "Corporate award ceremony",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-10.jpg",
        alt: "Office environment photos",
        width: 800,
        height: 600
      }
    ],
    features: [
      {
        icon: "Building",
        title: "Professional Image",
        description: "Photography that matches your brand identity"
      },
      {
        icon: "Users",
        title: "Team Photography",
        description: "Group photos and professional headshots"
      },
      {
        icon: "Calendar",
        title: "Event Coverage",
        description: "Documenting corporate events and functions"
      },
      {
        icon: "Presentation",
        title: "Marketing Assets",
        description: "Images for websites, reports, and marketing"
      }
    ],
    packages: [
      {
        name: "Half-Day",
        price: "LKR 50,000",
        description: "Perfect for shorter corporate events and functions.",
        features: [
          "4 hours of photography coverage",
          "1 professional photographer",
          "150+ professionally edited digital images",
          "Online gallery for 3 months",
          "High-resolution digital files with commercial usage rights",
          "Quick turnaround (72 hours)"
        ],
        highlighted: false
      },
      {
        name: "Full-Day",
        price: "LKR 85,000",
        description: "Our most popular package for comprehensive corporate event coverage.",
        features: [
          "8 hours of photography coverage",
          "1 professional photographer",
          "300+ professionally edited digital images",
          "Online gallery for 6 months",
          "High-resolution digital files with commercial usage rights",
          "Quick turnaround (72 hours)",
          "Dedicated event planning consultation"
        ],
        highlighted: true
      },
      {
        name: "Corporate Package",
        price: "LKR 150,000",
        description: "The ultimate corporate photography solution for large events.",
        features: [
          "10 hours of photography coverage",
          "2 professional photographers",
          "500+ professionally edited digital images",
          "Online gallery for 1 year",
          "High-resolution digital files with commercial usage rights",
          "Express turnaround (48 hours)",
          "Dedicated event planning consultation",
          "On-site photo review station",
          "Corporate photo book (40 pages)"
        ],
        highlighted: false
      }
    ],
    portfolioLink: ROUTES.PORTFOLIO_CORPORATE
  },
  "cultural-ceremonies": {
    id: "cultural-ceremonies",
    title: "Cultural Ceremonies",
    description: "Specialized photography for traditional Sri Lankan ceremonies, including Poruwa, Homecoming, and religious rituals.",
    shortDescription: "Specialized photography for traditional Sri Lankan ceremonies, including Poruwa, Homecoming, and religious rituals.",
    heroImage: IMAGES.SERVICE_CULTURAL,
    detailImage: IMAGES.PORTFOLIO_6,
    additionalImages: [IMAGES.SERVICE_CULTURAL_2, IMAGES.SERVICE_CULTURAL_3],
    galleryImages: [
      {
        src: "/images/portfolio-3.jpg",
        alt: "Traditional Poruwa ceremony",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-4.jpg",
        alt: "Sri Lankan dancers performance",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-5.jpg",
        alt: "Religious ritual ceremony",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-6.jpg",
        alt: "Traditional homecoming ceremony",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-7.jpg",
        alt: "Cultural festival celebration",
        width: 800,
        height: 600
      },
      {
        src: "/images/portfolio-8.jpg",
        alt: "Traditional ceremony details",
        width: 800,
        height: 600
      }
    ],
    features: [
      {
        icon: "Landmark",
        title: "Cultural Knowledge",
        description: "Understanding of traditional ceremonies"
      },
      {
        icon: "HandHeart",
        title: "Respectful Coverage",
        description: "Discreet photography during sacred moments"
      },
      {
        icon: "Sparkles",
        title: "Detail Oriented",
        description: "Capturing ceremonial elements and customs"
      },
      {
        icon: "History",
        title: "Heritage Preservation",
        description: "Documenting cultural traditions for posterity"
      }
    ],
    packages: [
      {
        name: "Essential",
        price: "LKR 45,000",
        description: "Coverage of smaller cultural ceremonies and rituals.",
        features: [
          "4 hours of photography coverage",
          "1 professional photographer",
          "150+ professionally edited digital images",
          "Online gallery for 3 months",
          "High-resolution digital files",
          "Pre-event consultation to understand ceremonial requirements"
        ],
        highlighted: false
      },
      {
        name: "Standard",
        price: "LKR 75,000",
        description: "Our most popular package for comprehensive cultural ceremony coverage.",
        features: [
          "8 hours of photography coverage",
          "1 professional photographer",
          "300+ professionally edited digital images",
          "Online gallery for 6 months",
          "High-resolution digital files",
          "Pre-event consultation to understand ceremonial requirements",
          "Traditional photo album (30 pages)",
          "10 mounted prints (5×7″)"
        ],
        highlighted: true
      },
      {
        name: "Premium",
        price: "LKR 125,000",
        description: "The ultimate cultural ceremony photography experience.",
        features: [
          "12 hours of photography coverage",
          "2 professional photographers",
          "500+ professionally edited digital images",
          "Online gallery for 1 year",
          "High-resolution digital files",
          "Pre-event consultation to understand ceremonial requirements",
          "Luxury traditional photo album (50 pages)",
          "20 mounted prints (5×7″)",
          "Cinematic slideshow of ceremony highlights",
          "Documentary-style photo book of traditional elements"
        ],
        highlighted: false
      }
    ],
    portfolioLink: ROUTES.PORTFOLIO_CULTURAL
  }
}; 