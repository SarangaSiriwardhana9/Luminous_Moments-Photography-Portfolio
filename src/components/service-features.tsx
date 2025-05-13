"use client"

import dynamic from "next/dynamic";
import { ServiceFeature, IconName } from "@/constants/types";

 
const DynamicIcon = dynamic(() => import("@/components/dynamic-icon"), { ssr: false });

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="rounded-full bg-primary/10 p-2 mt-1">
            <DynamicIcon name={feature.icon} className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 