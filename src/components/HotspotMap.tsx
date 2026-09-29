import React, { useState } from 'react';
import { 
  MapPin, 
  Droplets, 
  Layers, 
  Truck, 
  HelpCircle, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Info,
  Maximize2
} from 'lucide-react';
import { REGIONAL_HOTSPOTS } from '../data/mockData';
import { RegionHotspot } from '../types';

interface HotspotMapProps {
  selectedRegionId: string;
  onSelectRegion: (id: string) => void;
  onNavigate: (section: string) => void;
}

export const HotspotMap: React.FC<HotspotMapProps> = ({
  selectedRegionId,
  onSelectRegion,
  onNavigate,
}) => {
  const currentRegion = REGIONAL_HOTSPOTS.find(r => r.id === selectedRegionId) || REGIONAL_HOTSPOTS[0];
  const [filterCategory, setFilterCategory] = useState<'all' | 'water' | 'soil' | 'infra'>('all');

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            Geospatial Clustering & Anomaly Detection
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Agricultural Hotspot Map
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Visualizing density of localized farmer grievances correlated with satellite water stress and soil telemetry.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <span className="text-slate-400 px-2 text-[11px] font-semibold hidden md:inline">Focus:</span>
          {(['all', 'water', 'soil', 'infra'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setFilterCategory(filter)}
              className={`px-2.5 py-1 rounded-lg capitalize font-medium transition-all ${
                filterCategory === filter
                  ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter === 'infra' ? 'Infrastructure' : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Map (Left/Top) & Region Details (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive India Map Canvas (7 cols on desktop) */}
        <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Geographic Hotspot Overlay
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono bg-slate-950 px-2 py-1 rounded border border-slate-800">
              Interactive Nodes ({REGIONAL_HOTSPOTS.length} Hotspots)
            </span>
          </div>

          {/* Map Representation with Stylized India Geometry & Hotspot Nodes */}
          <div className="relative w-full h-[420px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
            {/* Background subtle GIS grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />

            {/* Stylized SVG Map of India */}
            <svg 
              viewBox="0 0 450 500" 
              className="w-full h-full max-h-[380px] drop-shadow-xl"
              style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.5))' }}
            >
              {/* Generalized India Boundary Path */}
              <path
                d="M 170 30 
                   Q 200 45 220 70 
                   L 250 85 
                   L 260 110 
                   L 300 135 
                   L 370 140 
                   L 410 170 
                   L 370 200 
                   L 330 200 
                   L 300 220 
                   L 310 260 
                   L 280 320 
                   L 250 380 
                   L 220 440 
                   L 200 480 
                   L 190 440 
                   L 150 370 
                   L 120 310 
                   L 90 280 
                   L 60 250 
                   L 80 200 
                   L 120 180 
                   L 110 140 
                   L 150 90 
                   Z"
                fill="#0f172a"
                stroke="#334155"
                strokeWidth="2.5"
                strokeLinejoin="round"
                className="transition-colors"
              />

              {/* Internal state boundary approximations for visual realism */}
              <path d="M 120 180 Q 180 210 240 220" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              <path d="M 150 90 Q 200 150 200 230" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              <path d="M 200 230 Q 230 330 220 440" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              <path d="M 90 280 Q 180 280 280 320" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />

              {/* Hotspot Markers */}
              {REGIONAL_HOTSPOTS.map((region) => {
                const isSelected = region.id === currentRegion.id;
                // SVG coordinates mapped from percentage
                const cx = (region.coordinates.x / 100) * 450;
                const cy = (region.coordinates.y / 100) * 500;
                const isHighStress = region.waterStress === 'High';

                return (
                  <g 
                    key={region.id} 
                    onClick={() => onSelectRegion(region.id)}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing ring for high stress / selected */}
                    {(isSelected || isHighStress) && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 22 : 16}
                        fill={isHighStress ? '#ef4444' : '#10b981'}
                        fillOpacity="0.2"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer halo */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 16 : 10}
                      fill={isSelected ? '#059669' : '#1e293b'}
                      stroke={isSelected ? '#34d399' : isHighStress ? '#f87171' : '#38bdf8'}
                      strokeWidth={isSelected ? '3' : '2'}
                      className="transition-all duration-200 group-hover:scale-125"
                    />

                    {/* Center dot */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="4"
                      fill={isSelected ? '#ffffff' : isHighStress ? '#ef4444' : '#38bdf8'}
                    />

                    {/* State Label */}
                    <text
                      x={cx + 12}
                      y={cy + 4}
                      fill={isSelected ? '#34d399' : '#cbd5e1'}
                      fontSize={isSelected ? '12' : '10'}
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      className="select-none pointer-events-none drop-shadow"
                    >
                      {region.name} ({region.farmerRequests.toLocaleString()})
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Map Legend */}
            <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 p-2.5 rounded-lg text-[10px] space-y-1 backdrop-blur-xs">
              <div className="font-bold text-slate-300 uppercase tracking-wider mb-1">Severity Legend</div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span>High Water Stress (Rajasthan)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>Moderate Water / Soil Stress</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span>Active Interventions (Tamil Nadu)</span>
              </div>
            </div>
          </div>

          {/* Region Switcher Pills */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-semibold text-slate-400">Select Hotspot Region:</div>
            <div className="flex flex-wrap gap-2">
              {REGIONAL_HOTSPOTS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => onSelectRegion(r.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    r.id === currentRegion.id
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-750'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Region Detailed Panel (5 cols on desktop) */}
        <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold">Selected Hotspot</div>
              <h2 className="text-2xl font-black text-white flex items-center gap-2 mt-0.5">
                <MapPin className="w-5 h-5 text-emerald-400" />
                {currentRegion.name}
              </h2>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
              currentRegion.waterStress === 'High'
                ? 'bg-rose-950 text-rose-300 border-rose-800'
                : 'bg-amber-950 text-amber-300 border-amber-800'
            }`}>
              {currentRegion.waterStress} Stress
            </span>
          </div>

          {/* Exact Specified Metrics (Requirement #5) */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] uppercase font-bold text-slate-400">Farmer Requests</div>
              <div className="text-2xl font-black text-white mt-1">
                {currentRegion.farmerRequests.toLocaleString()}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] uppercase font-bold text-slate-400">Water-related</div>
              <div className="text-2xl font-black text-cyan-400 mt-1">
                {currentRegion.waterRelatedRequests.toLocaleString()}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] uppercase font-bold text-slate-400">Soil-related</div>
              <div className="text-2xl font-black text-emerald-400 mt-1">
                {currentRegion.soilRelatedRequests.toLocaleString()}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] uppercase font-bold text-slate-400">Infrastructure</div>
              <div className="text-2xl font-black text-amber-400 mt-1">
                {currentRegion.infrastructureRequests.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Main Observed Concerns (Requirement #5) */}
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Main Observed Concerns
            </div>
            <div className="grid grid-cols-2 gap-2">
              {currentRegion.mainObservedConcerns.map((concern, idx) => (
                <div 
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-850/80 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{concern}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why this region is highlighted (Requirement #5 exact text) */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
            <div className="text-xs uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              Why this region is highlighted
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-serif italic">
              "AgriN identified a concentration of similar farmer requests in this region. Additional agricultural and environmental indicators are displayed to help officials review the situation."
            </p>
          </div>

          {/* Verbatim Farmer Quotes snippet */}
          <div className="space-y-1.5 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 block">Grassroots Voice Sample:</span>
            {currentRegion.sampleQuotes.map((q, i) => (
              <p key={i} className="italic text-slate-300 bg-slate-950/70 p-2.5 rounded-lg border border-slate-850">
                {q}
              </p>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => onNavigate('regenerative-agriculture')}
              className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>View Regenerative Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('government-dashboard')}
              className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
            >
              <span>Government Action Table</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
