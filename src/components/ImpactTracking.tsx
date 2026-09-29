import React, { useState } from 'react';
import { 
  TrendingDown, 
  TrendingUp, 
  Droplets, 
  Layers, 
  ArrowDown, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  DollarSign, 
  Sparkles,
  BarChart2,
  Sprout
} from 'lucide-react';
import { IMPACT_CASE_STUDIES } from '../data/mockData';

export const ImpactTracking: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState('rajasthan_water');
  const activeCase = IMPACT_CASE_STUDIES.find(c => c.id === selectedCaseId) || IMPACT_CASE_STUDIES[0];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Title & Introduction */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Post-Intervention Outcome Verification</span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">
          Impact Tracking & Accountability Loop
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Closing the governance loop: tracking how public fund allocations and regenerative farm practices reduce farmer distress over 12-24 month cycles.
        </p>
      </div>

      {/* Mandatory Exact Label as required */}
      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
        <div>
          <strong className="font-bold text-amber-300">Prototype Data Notice: </strong>
          "Illustrative prototype data — not real-world measurements."
        </div>
      </div>

      {/* Case Study Selector */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Select Evaluated Project:</span>
        <div className="flex flex-wrap gap-2">
          {IMPACT_CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                c.id === activeCase.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {c.region} ({c.id === 'rajasthan_water' ? 'Water Conservation' : 'Soil Carbon'})
            </button>
          ))}
        </div>
      </div>

      {/* Core Before -> Intervention -> After Workflow (Requirement #9) */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-8 shadow-xl">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase">{activeCase.region} Case Study</span>
          <h2 className="text-2xl font-black text-white mt-0.5">{activeCase.title}</h2>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 mt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-400" /> {activeCase.timeline}
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" /> {activeCase.budgetAllocated}
            </span>
          </div>
        </div>

        {/* The 3-Stage Diagram: Before -> Intervention -> After */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
          {/* Stage 1: Before Intervention */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-rose-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800 text-xs font-bold uppercase tracking-wider">
                Before Intervention
              </span>
              <span className="text-xs font-mono text-slate-500">Baseline</span>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Farmer water-related requests:</span>
                <span className="text-2xl font-black text-rose-400 mt-0.5 block font-mono">
                  {activeCase.before.waterRequests.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500">Peak monthly grievances</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Water stress:</span>
                <span className="text-base font-bold text-rose-400 mt-0.5 block">
                  {activeCase.before.waterStress}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Infrastructure gap:</span>
                <span className="text-base font-bold text-rose-400 mt-0.5 block">
                  {activeCase.before.infrastructureGap}
                </span>
              </div>
            </div>
          </div>

          {/* Stage 2: Middle Arrow & Intervention Badge */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center p-4 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-lg">
              <ArrowDown className="w-6 h-6 lg:-rotate-90 animate-bounce" />
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5 w-full">
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                Sanctioned Public Intervention
              </span>
              <p className="font-semibold text-white leading-snug">
                {activeCase.interventionType}
              </p>
            </div>
          </div>

          {/* Stage 3: After Intervention */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-emerald-500/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-bold uppercase tracking-wider">
                After Intervention
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">-39.5% Distress</span>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Farmer water-related requests:</span>
                <span className="text-2xl font-black text-emerald-400 mt-0.5 block font-mono">
                  {activeCase.after.waterRequests.toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-500 font-semibold">Reduced by 640 complaints/mo</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Water stress:</span>
                <span className="text-base font-bold text-teal-300 mt-0.5 block">
                  {activeCase.after.waterStress}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Infrastructure gap:</span>
                <span className="text-base font-bold text-emerald-300 mt-0.5 block">
                  {activeCase.after.infrastructureGap}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Comparison Chart (Requirement #9) */}
        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              Before vs. After Comparative Metrics
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">Statistical Validation</span>
          </div>

          <div className="space-y-4 pt-2">
            {/* Metric 1: Farmer Water Distress Complaints */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Farmer Water Complaints (monthly)</span>
                <span className="text-slate-400 font-mono">
                  <span className="text-rose-400 font-bold">{activeCase.before.waterRequests}</span> → <span className="text-emerald-400 font-bold">{activeCase.after.waterRequests}</span> (-39.5%)
                </span>
              </div>
              <div className="h-4 bg-slate-900 rounded-full overflow-hidden flex gap-1">
                <div 
                  className="bg-rose-500/80 rounded-l-full transition-all duration-700" 
                  style={{ width: '62%' }} 
                  title="Before: 1,620"
                />
                <div 
                  className="bg-emerald-500 rounded-r-full transition-all duration-700" 
                  style={{ width: '38%' }} 
                  title="After: 980"
                />
              </div>
            </div>

            {/* Metric 2: Crop Yield Index */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Crop Harvest Yield Index</span>
                <span className="text-slate-400 font-mono">
                  <span className="text-slate-400">{activeCase.before.cropYieldIndex}</span> → <span className="text-emerald-400 font-bold">{activeCase.after.cropYieldIndex}</span> (+30.8%)
                </span>
              </div>
              <div className="h-4 bg-slate-900 rounded-full overflow-hidden flex gap-1">
                <div 
                  className="bg-slate-700 rounded-l-full transition-all duration-700" 
                  style={{ width: `${(activeCase.before.cropYieldIndex / 100) * 50}%` }} 
                />
                <div 
                  className="bg-emerald-500 rounded-r-full transition-all duration-700" 
                  style={{ width: `${(activeCase.after.cropYieldIndex / 100) * 50}%` }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Audited Key Outcomes */}
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Documented Field Outcomes
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeCase.keyOutcomes.map((outcome, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
