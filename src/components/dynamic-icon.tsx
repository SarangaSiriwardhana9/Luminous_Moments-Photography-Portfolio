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

interface DynamicIconProps extends LucideProps {
  name: string;
}

const iconComponents: Record<string, React.FC<LucideProps>> = {
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
  Party: PartyPopper,
  UserPlus,
  ImagePlus,
  HandHeart
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