/**
 * Common types and enums used throughout the application
 */

// Service categories
export enum ServiceCategory {
  WEDDING = "wedding-photography",
  GRADUATION = "graduation-photography",
  BIRTHDAY = "birthday-photography",
  ENGAGEMENT = "engagement-shoots",
  CORPORATE = "corporate-photography",
  CULTURAL = "cultural-ceremonies"
}

// Portfolio categories
export enum PortfolioCategory {
  WEDDINGS = "weddings",
  GRADUATIONS = "graduations",
  BIRTHDAYS = "birthdays",
  ENGAGEMENTS = "engagements",
  CORPORATE = "corporate",
  CULTURAL = "cultural"
}

// Common icon names
export enum IconName {
  AWARD = "Award",
  CAMERA = "Camera",
  USERS = "Users",
  DOWNLOAD = "Download",
  CALENDAR = "Calendar",
  CLOCK = "Clock",
  HEART = "Heart",
  BUILDING = "Building",
  PRESENTATION = "Presentation",
  LANDMARK = "Landmark",
  HISTORY = "History",
  SPARKLES = "Sparkles",
  MAP = "Map",
  SUN = "Sun",
  GIFT = "Gift",
  PARTY = "Party",
  USER_PLUS = "UserPlus",
  IMAGE_PLUS = "ImagePlus",
  HAND_HEART = "HandHeart"
}

// Image aspect ratios
export enum AspectRatio {
  SQUARE = "1:1",
  LANDSCAPE = "4:3",
  PORTRAIT = "3:4"
}

// Feature types for different services
export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

// Pricing package structure
export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

// Gallery image structure
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  tags?: string[];
}

// Full service data structure
export interface ServiceData {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  detailImage: string;
  additionalImages: string[];
  galleryImages: GalleryImage[];
  features: ServiceFeature[];
  packages: ServicePackage[];
  portfolioLink: string;
}

// Portfolio category data structure
export interface PortfolioCategoryData {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  images: GalleryImage[];
  serviceLink: string;
}

// Testimonial structure
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  serviceType: string;
} 