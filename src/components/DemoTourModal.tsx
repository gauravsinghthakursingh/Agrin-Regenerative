import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Droplets, 
  Building2, 
  TrendingUp, 
  Sprout, 
  Play, 
  Pause
} from 'lucide-react';

interface DemoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
  onSelectRegion: (regionId: string) => void;
}

export const DemoTourModal: React.FC<DemoTourModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectRegion,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  if (!isOpen) return null;

  // The 9 exact steps required in Requirement #17
  const demoSteps = [
    {
      step: 1,
      title: 'Farmer Reports a Problem',
      targetSection: 'farmer-portal',
      summary: 'A smallholder in Jaipur, Rajasthan reports acute irrigation water shortages via spoken Hindi.',
      farmerQuote: '"हमारे गांव में पानी की समस्या है और सिंचाई की सुविधा पर्याप्त नहीं है।"',
      insight: 'Language detected: Hindi. Zero smartphone typing required.'
    },
    {
      step: 2,
      title: 'AI Understands It',
      targetSection: 'farmer-portal',
      summary: 'Multilingual NLU engine converts acoustic speech to structured semantic text with 96.8% confidence.',
      farmerQuote: 'In our village there is a water problem and irrigation facilities are not adequate.',
      insight: 'Entities extracted: Water deficit, irrigation delay, Jaipur locality.'
    },
    {
      step: 3,
      title: 'Request Is Categorized',
      targetSection: 'ai-analysis',
      summary: 'The system classifies the issue under "Water & Irrigation" with High Urgency.',
      farmerQuote: 'Primary Agronomic Impact: Rabi wheat & mustard crop moisture stress.',
      insight: 'Tagged under National Agricultural Taxonomy v4.'
    },
    {
      step: 4,
      title: 'Region Is Identified',
      targetSection: 'hotspot-map',
      summary: 'Geographic entity disambiguation resolves to Jaipur District, Rajasthan (Semi-arid Thar basin).',
      farmerQuote: 'Coordinates: 26.9124° N, 75.7873° E | Agro-Climatic Zone IVa',
      insight: 'Clustered alongside 4,280 regional farmer requests.'
    },
    {
      step: 5,
      title: 'Agricultural Indicators Displayed',
      targetSection: 'agricultural-intelligence',
      summary: 'Remote sensing data confirms 14.2% soil moisture (dry zone) and -28% canal delivery shortfall.',
      farmerQuote: 'Cross-correlated with Sentinel-2 satellite & Central Ground Water Board telemetry.',
      insight: 'Groundwater table at 42m below surface (Over-exploited status).'
    },
    {
      step: 6,
      title: 'Hotspot Is Shown',
      targetSection: 'hotspot-map',
      summary: 'The Hotspot Map renders Rajasthan with High Water Stress halo (1,620 water-specific grievances).',
      farmerQuote: 'High concentration of similar farmer requests identified.',
      insight: 'State highlighted in public sector geospatial console.'
    },
    {
      step: 7,
      title: 'Government Dashboard Updates',
      targetSection: 'government-dashboard',
      summary: 'Rajasthan is prioritized on the Regional Demand Table with "Review" statutory status.',
      farmerQuote: 'Civil servants can inspect raw voice evidence and approve capital allocation.',
      insight: 'Public fund recommendation: $4.2M Community Check-Dam Program.'
    },
    {
      step: 8,
      title: 'Possible Intervention Areas Displayed',
      targetSection: 'regenerative-agriculture',
      summary: 'AgriN generates regenerative options: check-dam silt removal, solar micro-drip, and agroforestry.',
      farmerQuote: 'Focus: Water conservation, soil moisture management, Khejri tree shelterbelts.',
      insight: 'Presented as evidence-backed areas for policymaker consideration.'
    },
    {
      step: 9,
      title: 'Impact Tracking Is Shown',
      targetSection: 'impact-tracking',
      summary: '18 Months post-intervention: Water-related requests fall from 1,620 to 980 (-39.5% distress reduction).',
      farmerQuote: 'Crop yield index improves from 68 to 89 (+30.8% harvest recovery).',
      insight: 'Audited public ROI verifies resilient village recovery.'
    },
  ];

  const currentStep = demoSteps[currentStepIndex];

  const handleStepJump = (idx: number) => {
    setCurrentStepIndex(idx);
    const target = demoSteps[idx];
    onSelectRegion('rajasthan');
    onNavigate(target.targetSection);
  };

  const handleNext = () => {
    if (currentStepIndex < demoSteps.length - 1) {
      handleStepJump(currentStepIndex + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      handleStepJump(currentStepIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-end sm:items-center justify-center p-3 sm:p-6 pointer-events-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-scaleUp text-slate-100">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                Judge Demonstration Walkthrough (30 Seconds)
              </span>
              <h3 className="text-lg font-bold text-white">
                Rajasthan Water-Stress Scenario Flow
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 9-Step Progress Bar Indicator */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-emerald-400">
              Step {currentStep.step} of 9: {currentStep.title}
            </span>
            <span className="text-slate-400 font-mono text-[11px]">
              {Math.round(((currentStepIndex + 1) / 9) * 100)}% Complete
            </span>
          </div>
          <div className="grid grid-cols-9 gap-1 h-2">
            {demoSteps.map((_, i) => (
              <div
                key={i}
                onClick={() => handleStepJump(i)}
                className={`rounded-full cursor-pointer transition-colors ${
                  i <= currentStepIndex ? 'bg-emerald-500' : 'bg-slate-800 hover:bg-slate-700'
                }`}
                title={`Jump to step ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-slate-900 text-teal-400 text-[10px] uppercase font-bold tracking-wider border border-slate-800">
              Active Module: {currentStep.targetSection}
            </span>
            <span className="text-[10px] text-slate-500">Auto-navigated</span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
            {currentStep.summary}
          </p>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs italic text-slate-300">
            {currentStep.farmerQuote}
          </div>

          <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{currentStep.insight}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentStepIndex === 0
                ? 'opacity-40 cursor-not-allowed border-slate-800 text-slate-500'
                : 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2.5 text-xs text-slate-400 hover:text-white"
            >
              Exit Tour
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/40 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <span>{currentStepIndex === demoSteps.length - 1 ? 'Finish Tour' : 'Next Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
