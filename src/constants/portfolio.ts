import { IMAGES } from './images';

export interface PortfolioImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const PORTFOLIO_IMAGES: PortfolioImageType[] = [
  {
    src: IMAGES.PORTFOLIO_1,
    alt: "Traditional Sri Lankan wedding ceremony",
    width: 800,
    height: 1200
  },
  {
    src: IMAGES.PORTFOLIO_2,
    alt: "University graduation ceremony",
    width: 800,
    height: 1000
  },
  {
    src: IMAGES.PORTFOLIO_3,
    alt: "Couple portrait in traditional attire",
    width: 800,
    height: 1100
  },
  {
    src: IMAGES.PORTFOLIO_4,
    alt: "Child's birthday celebration",
    width: 800,
    height: 900
  },
  {
    src: IMAGES.PORTFOLIO_5,
    alt: "Corporate event photography",
    width: 800,
    height: 1200
  },
  {
    src: IMAGES.PORTFOLIO_6,
    alt: "Cultural celebration with traditional dancers",
    width: 800,
    height: 1000
  },
]; 