"use client"

import React from 'react';
import { 
  Award, 
  Camera, 
  Users, 
  Download, 
  Calendar, 
  Clock, 
  Heart,
  Building,
  Presentation,
  Landmark,
  History,
  Sparkles,
  Map,
  Sun,
  Gift,
  PartyPopper,
  UserPlus,
  ImagePlus,
  HandHeart,
  LucideProps
} from 'lucide-react';
import { IconName } from '@/constants/types';

interface DynamicIconProps extends LucideProps {
  name: string;
}

const iconComponents: Record<string, React.FC<LucideProps>> = {
  [IconName.AWARD]: Award,
  [IconName.CAMERA]: Camera,
  [IconName.USERS]: Users,
  [IconName.DOWNLOAD]: Download,
  [IconName.CALENDAR]: Calendar,
  [IconName.CLOCK]: Clock,
  [IconName.HEART]: Heart,
  [IconName.BUILDING]: Building,
  [IconName.PRESENTATION]: Presentation,
  [IconName.LANDMARK]: Landmark,
  [IconName.HISTORY]: History,
  [IconName.SPARKLES]: Sparkles,
  [IconName.MAP]: Map,
  [IconName.SUN]: Sun,
  [IconName.GIFT]: Gift,
  [IconName.PARTY]: PartyPopper,
  [IconName.USER_PLUS]: UserPlus,
  [IconName.IMAGE_PLUS]: ImagePlus,
  [IconName.HAND_HEART]: HandHeart
};

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    // Fallback to a default icon or render nothing
    return <Camera {...props} />;
  }

  return <IconComponent {...props} />;
};

export default DynamicIcon; 