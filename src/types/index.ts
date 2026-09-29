export type SupportedLanguage = 
  | 'en' 
  | 'hi' 
  | 'bn' 
  | 'mr' 
  | 'ta' 
  | 'te' 
  | 'ru' 
  | 'pt' 
  | 'zh';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  bricsCountry?: string;
}

export type AgriculturalCategory = 
  | 'Water & Irrigation' 
  | 'Soil Health & Fertility' 
  | 'Infrastructure & Roads' 
  | 'Market Access & Pricing' 
  | 'Storage & Cold Chain' 
  | 'Crop Disease & Pests';

export interface FarmerSubmission {
  id: string;
  language: SupportedLanguage;
  audioDurationSeconds?: number;
  rawText: string;
  translatedText: string;
  category: AgriculturalCategory;
  issue: string;
  location: string;
  region: string;
  state: string;
  potentialImpact: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  timestamp: string;
  relatedFactors: string[];
  confidence: number;
}

export interface RegionHotspot {
  id: string;
  name: string;
  state: string;
  coordinates: { x: number; y: number }; // Relative coordinates for map rendering
  farmerRequests: number;
  waterRelatedRequests: number;
  soilRelatedRequests: number;
  infrastructureRequests: number;
  marketRequests: number;
  waterStress: 'Low' | 'Moderate' | 'High' | 'Severe';
  soilHealthConcern: 'Low' | 'Moderate' | 'High';
  rainfallDependency: 'Low' | 'Moderate' | 'High';
  reviewStatus: 'Review' | 'Monitoring' | 'Action Planned' | 'Approved';
  mainObservedConcerns: string[];
  whyHighlighted: string;
  sampleQuotes: string[];
  regenerativeFocus: string[];
}

export interface ImpactCaseStudy {
  id: string;
  title: string;
  region: string;
  interventionType: string;
  timeline: string;
  budgetAllocated: string;
  before: {
    waterRequests: number;
    waterStress: string;
    infrastructureGap: string;
    soilOrganicCarbon: string;
    cropYieldIndex: number;
  };
  after: {
    waterRequests: number;
    waterStress: string;
    infrastructureGap: string;
    soilOrganicCarbon: string;
    cropYieldIndex: number;
  };
  keyOutcomes: string[];
}
