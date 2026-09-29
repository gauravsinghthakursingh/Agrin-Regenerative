import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mic, 
  Database, 
  Cpu, 
  BarChart3, 
  Building2, 
  TrendingUp, 
  MapPin, 
  CheckCircle2, 
  Sprout, 
  FileText,
  AlertTriangle,
  Play
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
  currentLanguage: SupportedLanguage;
  onLoadDemo: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  currentLanguage,
  onLoadDemo,
}) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.en;

  const pipelineSteps = [
    {
      id: 1,
      title: 'Farmer Voice',
      subtitle: 'Audio & Text in 12+ Dialects',
      icon: Mic,
      color: 'from-emerald-500 to-green-600',
      description: 'Farmers report localized distress (e.g. water shortage, soil salinity, pest outbreaks) via speech or SMS without technical barriers.',
      dataOutput: 'Raw audio waveform & regional dialect transcript'
    },
    {
      id: 2,
      title: 'Data Fusion',
      subtitle: 'Satellite & Ground Telemetry',
      icon: Database,
      color: 'from-teal-500 to-cyan-600',
      description: 'Incoming farmer feedback is enriched with Sentinel-2 satellite soil moisture, local rainfall deficits, aquifer levels, and market yard logistics.',
      dataOutput: 'Multi-layer GIS & agro-climatic correlation vector'
    },
    {
      id: 3,
      title: 'AI Analysis',
      subtitle: 'Multilingual NLU & Taxonomy',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-600',
      description: 'Natural language parsing categorizes urgency, extracts geo-entities, identifies agronomic constraints, and cross-references historical crop cycles.',
      dataOutput: 'Structured grievance entity schema with confidence score'
    },
    {
      id: 4,
      title: 'Agricultural Intelligence',
      subtitle: 'Hotspot Geospatial Clustering',
      icon: BarChart3,
      color: 'from-purple-500 to-violet-600',
      description: 'Aggregates thousands of grassroots signals to highlight systemic agricultural hotspots (e.g., Rajasthan Thar basin, Vidarbha soil crisis).',
      dataOutput: 'District vulnerability index & seasonal demand trends'
    },
    {
      id: 5,
      title: 'Government Action',
      subtitle: 'Evidence-Based Resource Allocation',
      icon: Building2,
      color: 'from-amber-500 to-orange-600',
      description: 'Public officials inspect verified hotspot evidence to sanction check-dams, micro-irrigation subsidies, and regenerative farm extension programs.',
      dataOutput: 'Targeted budget sanction & field verification order'
    },
    {
      id: 6,
      title: 'Impact Tracking',
      subtitle: 'Measurable Resilience Loop',
      icon: TrendingUp,
      color: 'from-rose-500 to-emerald-600',
      description: 'Monitors grievance reduction (-39.5%), vegetation index recovery (NDVI), and soil organic carbon improvements over 12-24 months.',
      dataOutput: 'Auditable public ROI & sustainable village resilience'
    },
  ];

  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-800/80 via-slate-900 to-slate-950 border border-slate-700/60 p-8 sm:p-12 lg:p-16 shadow-2xl">
        {/* Subtle decorative grid & glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span>BRICS Innovation Challenge Prototype</span>
            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
            <span className="text-slate-300 font-normal">Digital Public Good Candidate</span>
          </div>

          {/* Main Titles */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
                {t.heroTitle || 'AgriN'}
              </h1>
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-normal">
                & {t.heroSubtitle || 'Regenerative Agricultural Intelligence'}
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-slate-200 italic font-serif">
              "{t.tagline || 'Turning farmer voices into actionable agricultural intelligence.'}"
            </p>
          </div>

          {/* Detailed Public-Sector Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {t.heroDesc || 'AgriN connects farmer feedback with agricultural, environmental and infrastructure data to help identify regional needs, support regenerative agriculture and improve evidence-based development planning.'}
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('farmer-portal')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Mic className="w-5 h-5 text-slate-950" />
              <span>{t.reportProblem || 'Report a Problem'}</span>
              <ArrowRight className="w-4 h-4 ml-1 text-slate-950" />
            </button>

            <button
              onClick={() => onNavigate('agricultural-intelligence')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm sm:text-base border border-slate-600/80 shadow-md transition-all hover:border-slate-500 cursor-pointer"
            >
              <BarChart3 className="w-5 h-5 text-teal-400" />
              <span>{t.exploreIntelligence || 'Explore Agricultural Intelligence'}</span>
            </button>

            <button
              onClick={onLoadDemo}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 font-semibold text-sm border border-amber-500/40 transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Load 30s Judge Demo</span>
            </button>
          </div>

          {/* Disclaimers & Trust Notice */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Multilingual Voice & Dialect Support
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Human-in-the-Loop Review Required
            </span>
            <span className="flex items-center gap-1.5 text-amber-400/90">
              <AlertTriangle className="w-3.5 h-3.5" />
              Clearly Labelled Simulated/Demonstration Data
            </span>
          </div>
        </div>
      </div>

      {/* Visual Pipeline Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-emerald-400">
              End-to-End Governance Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The AgriN Intelligence Pipeline
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Click any stage below to inspect its data inputs, AI reasoning, and administrative output.
            </p>
          </div>
          <div className="text-xs text-slate-400 bg-slate-800/70 px-3 py-1.5 rounded-lg border border-slate-700/80 self-start sm:self-auto">
            Interactive Workflow Architecture
          </div>
        </div>

        {/* Pipeline Nodes in Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.id;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(isSelected ? null : step.id)}
                className={`relative rounded-2xl p-4 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-800/90 border-emerald-400/80 shadow-xl ring-2 ring-emerald-500/30'
                    : 'bg-slate-900/80 hover:bg-slate-850 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Step Number & Connector indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    0{step.id}
                  </span>
                  {idx < pipelineSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-600" />
                  )}
                </div>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} p-2 flex items-center justify-center text-white mb-3 shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-bold text-sm text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-1">{step.subtitle}</p>

                {/* Expanded state summary if selected */}
                {isSelected && (
                  <div className="mt-3 pt-3 border-t border-slate-700/70 text-xs space-y-2 animate-fadeIn">
                    <p className="text-slate-300 leading-snug">{step.description}</p>
                    <div className="p-2 rounded bg-slate-950/70 text-[11px] font-mono text-emerald-300 border border-emerald-900/40">
                      <span className="text-slate-400 block text-[9px] uppercase tracking-wide">Output Schema:</span>
                      {step.dataOutput}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Pipeline Flow Legend */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center text-xs text-slate-300 flex-wrap gap-2 sm:gap-3 text-center">
          <span className="font-semibold text-emerald-400">Pipeline Flow:</span>
          <span>Farmer Voice</span>
          <span className="text-emerald-500 font-bold">→</span>
          <span>Data Fusion</span>
          <span className="text-teal-500 font-bold">→</span>
          <span>AI Analysis</span>
          <span className="text-blue-500 font-bold">→</span>
          <span>Agricultural Intelligence</span>
          <span className="text-purple-500 font-bold">→</span>
          <span>Government Action</span>
          <span className="text-amber-500 font-bold">→</span>
          <span className="font-semibold text-emerald-300">Sustainable Impact</span>
        </div>
      </div>

      {/* High-Level Overview Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-850/80 p-5 rounded-2xl border border-slate-800/90 shadow-md">
          <div className="text-xs text-slate-400 uppercase font-semibold">Total Farmer Inquiries</div>
          <div className="text-3xl font-extrabold text-white mt-1">24,580</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Across 7 States & 37 Hotspots
          </div>
        </div>

        <div className="bg-slate-850/80 p-5 rounded-2xl border border-slate-800/90 shadow-md">
          <div className="text-xs text-slate-400 uppercase font-semibold">Water Stress Share</div>
          <div className="text-3xl font-extrabold text-teal-400 mt-1">30.2%</div>
          <div className="text-xs text-slate-400 mt-1">
            7,420 water & irrigation requests
          </div>
        </div>

        <div className="bg-slate-850/80 p-5 rounded-2xl border border-slate-800/90 shadow-md">
          <div className="text-xs text-slate-400 uppercase font-semibold">Multilingual Voice Latency</div>
          <div className="text-3xl font-extrabold text-cyan-400 mt-1">&lt; 1.8s</div>
          <div className="text-xs text-slate-400 mt-1">
            Real-time NLU classification
          </div>
        </div>

        <div className="bg-slate-850/80 p-5 rounded-2xl border border-slate-800/90 shadow-md">
          <div className="text-xs text-slate-400 uppercase font-semibold">Verified Distress Reduction</div>
          <div className="text-3xl font-extrabold text-emerald-400 mt-1">-39.5%</div>
          <div className="text-xs text-slate-400 mt-1">
            In post-intervention pilot zones
          </div>
        </div>
      </div>

      {/* Three Pillars Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1: Farmer First */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <Mic className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Multilingual Voice Reporting</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Eliminating digital literacy barriers. Farmers can talk in their regional dialect (Hindi, Bengali, Marathi, Tamil, Telugu, etc.) through simple smartphone mic or IVR call.
            </p>
          </div>
          <button
            onClick={() => onNavigate('farmer-portal')}
            className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 self-start"
          >
            Open Farmer Portal <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar 2: Geospatial Hotspot Identification */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Geospatial Hotspot Map</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clustering grievances geographically against satellite soil moisture, meteorological drought indexes, and infrastructure maps to identify acute crisis pockets.
            </p>
          </div>
          <button
            onClick={() => onNavigate('hotspot-map')}
            className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 self-start"
          >
            Explore Hotspot Map <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar 3: Regenerative Resilience */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Regenerative Solutions</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Translating acute crises into systemic regenerative remedies: agroforestry shelterbelts, rainwater check-dams, crop rotation, and biochar carbon sequestration.
            </p>
          </div>
          <button
            onClick={() => onNavigate('regenerative-agriculture')}
            className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 self-start"
          >
            Learn Regenerative Strategies <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
