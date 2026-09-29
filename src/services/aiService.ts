import { FarmerSubmission, SupportedLanguage, AgriculturalCategory } from '../types';
import { SAMPLE_FARMER_INPUTS } from '../data/mockData';

export interface AnalysisResult {
  submission: FarmerSubmission;
  aiExplanation: string;
  recommendedInterventions: string[];
  dataCorrelationIndicators: {
    name: string;
    value: string;
    status: 'Optimal' | 'Alert' | 'Critical';
    source: string;
  }[];
}

class AgriculturalAiService {
  /**
   * Simulates Multilingual Speech-to-Text Recognition for prototype demo
   */
  async transcribeAudio(language: SupportedLanguage): Promise<string> {
    // Simulate audio processing latency
    await new Promise((resolve) => setTimeout(resolve, 1400));
    
    // Pick appropriate sample or fallback
    const match = SAMPLE_FARMER_INPUTS.find((s) => s.language === language);
    if (match) {
      return match.text;
    }
    return SAMPLE_FARMER_INPUTS[0].text;
  }

  /**
   * Analyzes farmer grievance text using NLP classification & agricultural taxonomy
   */
  async analyzeGrievance(text: string, language: SupportedLanguage, customLocation?: string): Promise<AnalysisResult> {
    // Simulate AI inference latency
    await new Promise((resolve) => setTimeout(resolve, 1100));

    const lower = text.toLowerCase();
    
    let category: AgriculturalCategory = 'Water & Irrigation';
    let issue = 'Water availability and irrigation constraint';
    let location = customLocation || 'Jaipur, Rajasthan';
    let region = 'Rajasthan';
    let state = 'Rajasthan';
    let potentialImpact = 'Irrigation constraint impacting crop lifecycle';
    let urgency: 'Low' | 'Medium' | 'High' | 'Critical' = 'High';
    let relatedFactors = ['Water availability', 'Irrigation infrastructure', 'Soil moisture', 'Rainfall dependency'];
    let translatedText = text;

    // Check against predefined rich samples
    const foundSample = SAMPLE_FARMER_INPUTS.find(s => text.includes(s.text.slice(0, 15)) || s.text === text);

    if (foundSample) {
      category = foundSample.category;
      issue = foundSample.issue;
      location = customLocation || foundSample.location;
      region = foundSample.region;
      state = foundSample.state;
      potentialImpact = foundSample.potentialImpact;
      urgency = foundSample.urgency;
      relatedFactors = foundSample.relatedFactors;
      translatedText = foundSample.english;
    } else {
      // Heuristic detection
      if (lower.includes('पानी') || lower.includes('water') || lower.includes('सिंचाई') || lower.includes('irrigation') || lower.includes('तलाव') || lower.includes('जल')) {
        category = 'Water & Irrigation';
        issue = 'Water availability & irrigation infrastructure';
        potentialImpact = 'Moisture stress during vegetative growth phase';
        relatedFactors = ['Groundwater depletion', 'Canal flow delivery', 'Rainfall deficit', 'Soil moisture retention'];
        urgency = 'High';
      } else if (lower.includes('माती') || lower.includes('soil') || lower.includes('खाद') || lower.includes('खत') || lower.includes('fertilizer') || lower.includes('मिट्टी')) {
        category = 'Soil Health & Fertility';
        issue = 'Soil degradation & input dependency';
        potentialImpact = 'Depleted soil organic carbon and micro-nutrient imbalance';
        relatedFactors = ['Soil organic matter', 'Excess chemical inputs', 'Soil microbial activity', 'Salinity'];
        urgency = 'Medium';
      } else if (lower.includes('road') || lower.includes('सड़क') || lower.includes('बिजली') || lower.includes('power') || lower.includes('infrastructure') || lower.includes('रस्ता')) {
        category = 'Infrastructure & Roads';
        issue = 'Farm connectivity & rural infrastructure breakdown';
        potentialImpact = 'Perishable logistics delay & elevated transit cost';
        relatedFactors = ['Rural road condition', 'Feeder grid reliability', 'Culvert drainage', 'Distance to mandi'];
        urgency = 'Medium';
      } else if (lower.includes('mandi') || lower.includes('बाजार') || lower.includes('भाव') || lower.includes('price') || lower.includes('market') || lower.includes('व्यापारी')) {
        category = 'Market Access & Pricing';
        issue = 'Fair market realization & intermediary margins';
        potentialImpact = 'Distress sale below Minimum Support Price (MSP)';
        relatedFactors = ['APMC yard accessibility', 'Electronic weighbridges', 'Price transparency', 'Buyer cartelization'];
        urgency = 'High';
      } else if (lower.includes('storage') || lower.includes('कोल्ड') || lower.includes('warehouse') || lower.includes('गोदाम')) {
        category = 'Storage & Cold Chain';
        issue = 'Post-harvest storage shortfall';
        potentialImpact = 'High post-harvest loss due to lack of local cold room';
        relatedFactors = ['Cold chain proximity', 'Warehouse receipt facility', 'Pest-proof silos', 'Grid cooling power'];
        urgency = 'Medium';
      } else {
        category = 'Water & Irrigation';
        issue = 'Water availability and irrigation constraint';
        potentialImpact = 'Irrigation constraint impacting crop lifecycle';
        relatedFactors = ['Water availability', 'Irrigation infrastructure', 'Soil moisture', 'Rainfall dependency'];
      }
    }

    const submission: FarmerSubmission = {
      id: `SUB-${Math.floor(100000 + Math.random() * 900000)}`,
      language,
      rawText: text,
      translatedText,
      category,
      issue,
      location,
      region,
      state,
      potentialImpact,
      urgency,
      timestamp: new Date().toISOString(),
      relatedFactors,
      confidence: 96.4
    };

    const aiExplanation = `The farmer in ${location} is reporting ${issue.toLowerCase()}. AgriN's NLP pipeline extracted core agricultural entities with ${submission.confidence}% confidence, correlating with regional meteorological and soil datasets.`;

    const recommendedInterventions = [
      'Prioritize micro-irrigation and community farm pond desiltation under MGNREGS / State Water Scheme.',
      'Deploy localized soil moisture retention guidance (in-situ mulching, cover cropping).',
      'Review electricity supply feeder schedules for agricultural tubewells.',
      'Integrate region into the upcoming BRICS Regenerative Agro-Ecology pilot zone.'
    ];

    const dataCorrelationIndicators = [
      {
        name: 'Satellite Soil Moisture (SMAP 0-5cm)',
        value: '14.2% (Dry Zone)',
        status: 'Critical' as const,
        source: 'Sentinel-2 & SMAP Radiometer'
      },
      {
        name: 'Canal Flow Release Deficit',
        value: '-28% vs Seasonal Benchmark',
        status: 'Alert' as const,
        source: 'State Irrigation Command Board'
      },
      {
        name: 'Historical Rainfall Deviation',
        value: '-34mm during sowing window',
        status: 'Critical' as const,
        source: 'National Meteorological Dept.'
      },
      {
        name: 'Tubewell Groundwater Table',
        value: '42m below surface (Over-exploited)',
        status: 'Alert' as const,
        source: 'Central Ground Water Board'
      }
    ];

    return {
      submission,
      aiExplanation,
      recommendedInterventions,
      dataCorrelationIndicators
    };
  }
}

export const aiService = new AgriculturalAiService();
