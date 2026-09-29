import React, { useState } from 'react';
import { 
  Sprout, 
  Droplets, 
  Shuffle, 
  RotateCw, 
  Trees, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  Calculator,
  Compass
} from 'lucide-react';
import { REGIONAL_HOTSPOTS } from '../data/mockData';

interface RegenerativeAgricultureProps {
  onNavigate: (section: string) => void;
}

export const RegenerativeAgriculture: React.FC<RegenerativeAgricultureProps> = ({
  onNavigate,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState('rajasthan');
  const [targetAdoptionPercent, setTargetAdoptionPercent] = useState(35);

  const region = REGIONAL_HOTSPOTS.find(r => r.id === selectedRegionId) || REGIONAL_HOTSPOTS[0];

  // 6 Specified Regenerative Cards (Requirement #6)
  const regenerativePillars = [
    {
      id: 'soil_health',
      title: 'Soil Health',
      icon: Sprout,
      color: 'from-emerald-500 to-green-600',
      badge: 'Microbial & Organic Carbon',
      description: 'Restores living biological activity in the soil through indigenous micro-organism inoculants, farmyard compost, and minimizing synthetic chemical toxicity.',
      impactMetric: '+0.25% Soil Organic Carbon within 24 months'
    },
    {
      id: 'water_efficiency',
      title: 'Water Efficiency',
      icon: Droplets,
      color: 'from-cyan-500 to-teal-600',
      badge: 'Aquifer Conservation',
      description: 'Replaces flood irrigation with solar-powered pressurized micro-drip, check-dams, contour bunds, and laser land leveling to slash water waste by 40-60%.',
      impactMetric: 'Saves up to 1.8M liters per hectare annually'
    },
    {
      id: 'crop_diversity',
      title: 'Crop Diversity',
      icon: Shuffle,
      color: 'from-amber-500 to-yellow-600',
      badge: 'Climate Resilience',
      description: 'Breaks fragile monocultures by integrating traditional drought-tolerant nutri-cereals (millets, sorghum) with cash crops and nitrogen-fixing pulses.',
      impactMetric: 'Reduces climate yield loss risk by 35%'
    },
    {
      id: 'crop_rotation',
      title: 'Crop Rotation',
      icon: RotateCw,
      color: 'from-blue-500 to-indigo-600',
      badge: 'Natural Pest Suppression',
      description: 'Sequential alternating of legume-cereal-oilseed cycles disrupts pest lifecycles naturally, fixes atmospheric nitrogen, and optimizes deep root moisture intake.',
      impactMetric: 'Cuts synthetic nitrogen fertilizer needs by 28%'
    },
    {
      id: 'agroforestry',
      title: 'Agroforestry',
      icon: Trees,
      color: 'from-emerald-600 to-teal-700',
      badge: 'Microclimate & Windbreak',
      description: 'Integrating perennial native trees (such as Khejri, Moringa, and Subabul) along field boundaries to buffer thermal heat waves and prevent topsoil erosion.',
      impactMetric: 'Lowers localized surface temperature by 2.4°C'
    },
    {
      id: 'soil_conservation',
      title: 'Soil Conservation',
      icon: ShieldAlert,
      color: 'from-purple-500 to-violet-600',
      badge: 'Zero-Till & Mulching',
      description: 'Leaves crop residues on the surface and employs zero-till or minimum-till seed drills (Happy Seeder) to shield topsoil against harsh baking winds.',
      impactMetric: 'Retains up to 30% more capillary moisture'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Title & Introduction */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <Sprout className="w-3.5 h-3.5" />
          <span>Long-Term Agricultural Resilience Framework</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Regenerative Agriculture Intelligence
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Transforming emergency farmer distress complaints into systemic agro-ecological recovery. Regenerative practices rebuild soil organic carbon, restore water tables, and safeguard smallholder farmer economics.
        </p>
      </div>

      {/* 6 Core Cards (Requirement #6) */}
      <div className="space-y-4">
        <div className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center justify-between">
          <span>The Six Pillars of Regenerative Agriculture</span>
          <span className="text-[11px] text-emerald-400 font-mono">AgriN Diagnostic Model</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regenerativePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} p-2.5 flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-750">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Modelled Field Outcome
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {pillar.impactMetric}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Regional Profile Section (Requirement #6: Rajasthan Example Profile) */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs text-emerald-400 uppercase font-bold tracking-wider">
              Targeted Agro-Climatic Synthesis
            </div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2 mt-0.5">
              <MapPin className="w-5 h-5 text-emerald-400" />
              Regional Profile: {region.name}
            </h2>
          </div>

          {/* Region Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Switch Region:</span>
            <select
              value={selectedRegionId}
              onChange={(e) => setSelectedRegionId(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-xs text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500"
            >
              {REGIONAL_HOTSPOTS.map((r) => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Indicators: Water Stress, Soil Health Concern, Rainfall Dependency */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Water Stress
            </div>
            <div className={`text-2xl font-black mt-1 ${
              region.waterStress === 'High' ? 'text-rose-400' : 'text-amber-400'
            }`}>
              {region.waterStress}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Groundwater depletion & erratic canal rotation</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Soil Health Concern
            </div>
            <div className={`text-2xl font-black mt-1 ${
              region.soilHealthConcern === 'High' ? 'text-rose-400' : 'text-amber-400'
            }`}>
              {region.soilHealthConcern}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Organic carbon depletion & micronutrient deficit</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Rainfall Dependency
            </div>
            <div className={`text-2xl font-black mt-1 ${
              region.rainfallDependency === 'High' ? 'text-rose-400' : 'text-amber-400'
            }`}>
              {region.rainfallDependency}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Vulnerability to monsoon dry-spells during sowing</p>
          </div>
        </div>

        {/* Regenerative Focus Areas (Exact requirement #6) */}
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Regenerative Focus Areas for {region.name}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              'Water conservation',
              'Soil moisture management',
              'Crop diversification',
              'Agroforestry',
              'Reduced soil disturbance'
            ].map((focus, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-850/90 border border-slate-750 flex flex-col justify-between text-xs space-y-2"
              >
                <div className="flex items-center gap-1.5 font-bold text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{focus}</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  Tailored to Thar & semi-arid dryland topography.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Requirement Notice: Present as areas for consideration */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold text-amber-300">Important Policy Governance Note: </strong>
            These regenerative pathways are presented as areas for consideration and scientific prioritization, not guaranteed automated recommendations. They must be validated by local Krishi Vigyan Kendras (KVKs) and district agricultural officers.
          </div>
        </div>

        {/* Interactive Soil Carbon & Resilience Simulator */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-400" />
                Simulated 3-Year Regional Resilience Projection
              </h3>
              <p className="text-xs text-slate-400">
                Adjust regenerative adoption rate among {region.name} smallholders:
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-400 font-bold bg-slate-900 px-3 py-1 rounded border border-slate-800 self-start">
              {targetAdoptionPercent}% Smallholder Adoption
            </div>
          </div>

          <input
            type="range"
            min="10"
            max="80"
            value={targetAdoptionPercent}
            onChange={(e) => setTargetAdoptionPercent(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Water Demand Reduction</span>
              <span className="text-lg font-bold text-cyan-400">
                -{Math.round(targetAdoptionPercent * 0.52)}%
              </span>
              <span className="text-[10px] text-slate-500 block">via micro-drip & mulch</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Soil Organic Carbon</span>
              <span className="text-lg font-bold text-emerald-400">
                +{((targetAdoptionPercent * 0.006) + 0.12).toFixed(2)}%
              </span>
              <span className="text-[10px] text-slate-500 block">estimated SOC gain</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Farmer Net Savings</span>
              <span className="text-lg font-bold text-amber-400">
                ₹{Math.round(targetAdoptionPercent * 280)}/acre
              </span>
              <span className="text-[10px] text-slate-500 block">reduced chemical bills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
