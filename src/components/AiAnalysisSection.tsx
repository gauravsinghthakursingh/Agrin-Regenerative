import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Tag, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Compass, 
  Building2, 
  ShieldCheck,
  TrendingDown,
  Activity,
  FileCheck2,
  Database
} from 'lucide-react';
import { AnalysisResult } from '../services/aiService';

interface AiAnalysisSectionProps {
  analysis: AnalysisResult | null;
  onNavigate: (section: string) => void;
  onSelectHotspotRegion: (regionId: string) => void;
}

export const AiAnalysisSection: React.FC<AiAnalysisSectionProps> = ({
  analysis,
  onNavigate,
  onSelectHotspotRegion,
}) => {
  if (!analysis) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <Sparkles className="w-10 h-10 text-emerald-400 mx-auto" />
          <h2 className="text-xl font-bold text-white">No Active Request Selected</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Please report an issue via the Farmer Portal or click "Load Demo Scenario" to view the AI analysis pipeline.
          </p>
          <button
            onClick={() => onNavigate('farmer-portal')}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs inline-flex items-center gap-2"
          >
            Go to Farmer Portal <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const { submission, recommendedInterventions, dataCorrelationIndicators } = analysis;

  const handleGoToMap = () => {
    onSelectHotspotRegion('rajasthan');
    onNavigate('hotspot-map');
  };

  const handleGoToGov = () => {
    onNavigate('government-dashboard');
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
      {/* Title & Badge */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            AI Multilingual Analysis Engine
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-xs font-mono">
            ID: {submission.id}
          </span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">
          AI Agricultural Intelligence Assessment
        </h1>
        <p className="text-sm text-slate-300">
          Synthesized from farmer voice grievance, multi-dialect linguistic taxonomy, and satellite remote sensing telemetry.
        </p>
      </div>

      {/* Mandatory Disclaimer as required */}
      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
        <div>
          <strong className="font-bold text-amber-300">Demonstration Notice: </strong>
          AI-generated analysis for demonstration purposes. Does not claim that the system has verified real-world government data. Field verification required before administrative sanction.
        </div>
      </div>

      {/* Main Analysis Card */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
        {/* Section 1: Request Summary */}
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-2">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            Request Summary
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 text-sm text-slate-100 font-medium leading-relaxed">
            The farmer is reporting limited water availability and insufficient irrigation support.
          </div>
        </div>

        {/* Section 2: Core Extracted Attributes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-teal-400" />
              Detected Category
            </div>
            <div className="text-base font-bold text-emerald-300 mt-1">
              {submission.category}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Issue: {submission.issue}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Location
            </div>
            <div className="text-base font-bold text-cyan-300 mt-1">
              {submission.location}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Region / Agro-Zone: {submission.region}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-rose-400" />
              Potential Agricultural Impact
            </div>
            <div className="text-base font-bold text-rose-300 mt-1">
              {submission.potentialImpact}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Urgency: <span className="text-amber-400 font-semibold">{submission.urgency}</span>
            </div>
          </div>
        </div>

        {/* Section 3: Related Factors (Requirement #3) */}
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            Related Factors
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Water availability',
              'Irrigation infrastructure',
              'Soil moisture',
              'Rainfall dependency'
            ].map((factor, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-850/80 border border-slate-750 flex items-center gap-2.5 text-xs text-slate-200"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="font-semibold">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Data Fusion & Satellite Correlation Layer */}
        <div className="space-y-3 pt-2">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              Cross-Referenced Environmental Indicators (Synthesized Data)
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Telemetry Correlation Engine</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dataCorrelationIndicators.map((ind, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-200">{ind.name}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{ind.source}</div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                    ind.status === 'Critical' 
                      ? 'bg-rose-950 text-rose-300 border border-rose-800' 
                      : 'bg-amber-950 text-amber-300 border border-amber-800'
                  }`}>
                    {ind.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Potential Areas for Government Review */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Recommended Evidence-Based Review Actions
          </div>
          <div className="space-y-2">
            {recommendedInterventions.map((rec, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{rec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons to continue flow */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Next steps in the agricultural decision cycle:
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleGoToMap}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4 text-teal-400" />
              <span>Inspect on Hotspot Map</span>
            </button>
            <button
              onClick={handleGoToGov}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <Building2 className="w-4 h-4" />
              <span>Review in Government Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
