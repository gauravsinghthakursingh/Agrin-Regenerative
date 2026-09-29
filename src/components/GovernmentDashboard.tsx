import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Eye, 
  Compass, 
  TrendingUp, 
  X, 
  Download, 
  Calendar,
  Sparkles,
  Droplets,
  Layers,
  Truck,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { REGIONAL_HOTSPOTS } from '../data/mockData';
import { RegionHotspot } from '../types';

interface GovernmentDashboardProps {
  onNavigate: (section: string) => void;
  onSelectRegion: (id: string) => void;
}

export const GovernmentDashboard: React.FC<GovernmentDashboardProps> = ({
  onNavigate,
  onSelectRegion,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedEvidenceRegion, setSelectedEvidenceRegion] = useState<RegionHotspot | null>(null);
  const [activeReviewState, setActiveReviewState] = useState<Record<string, string>>({
    rajasthan: 'Review',
    maharashtra: 'Review',
    punjab: 'Monitoring',
    karnataka: 'Review',
    uttar_pradesh: 'Review',
    tamil_nadu: 'Approved',
    madhya_pradesh: 'Monitoring'
  });

  const filteredRegions = REGIONAL_HOTSPOTS.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          r.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || activeReviewState[r.id] === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewRegion = (regionId: string) => {
    onSelectRegion(regionId);
    onNavigate('hotspot-map');
  };

  const handleTrackIntervention = (regionId: string) => {
    onSelectRegion(regionId);
    onNavigate('impact-tracking');
  };

  const handleUpdateStatus = (regionId: string, newStatus: string) => {
    setActiveReviewState(prev => ({ ...prev, [regionId]: newStatus }));
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Official Government Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Building2 className="w-4 h-4" />
            <span>Public Sector Administrative Console</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">BRICS Agricultural Planning Division</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight mt-1">
            Agricultural Development Intelligence
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Centralized decision-support system synthesizing smallholder distress signals into verified public capital allocations.
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => alert('Simulated Public Sector Brief: Exported 37 Hotspot Dossiers with complete satellite telemetry (PDF/GeoJSON).')}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-teal-400" />
            <span>Export Gazette Dossier</span>
          </button>
        </div>
      </div>

      {/* Specified Metrics KPI Strip (Requirement #7) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[11px] font-bold uppercase text-slate-400 block">Total Requests</span>
          <span className="text-2xl font-black text-white mt-1 block">24,580</span>
          <span className="text-[10px] text-slate-500">Verified farmer voice records</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[11px] font-bold uppercase text-slate-400 block">Concentrated Demand</span>
          <span className="text-2xl font-black text-emerald-400 mt-1 block">37</span>
          <span className="text-[10px] text-slate-500">Identified Hotspot Districts</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[11px] font-bold uppercase text-slate-400 block">Water Requests</span>
          <span className="text-2xl font-black text-cyan-400 mt-1 block">7,420</span>
          <span className="text-[10px] text-slate-500">30.2% total volume</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[11px] font-bold uppercase text-slate-400 block">Soil Requests</span>
          <span className="text-2xl font-black text-teal-400 mt-1 block">4,860</span>
          <span className="text-[10px] text-slate-500">19.8% total volume</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 col-span-2 md:col-span-1">
          <span className="text-[11px] font-bold uppercase text-slate-400 block">Infrastructure</span>
          <span className="text-2xl font-black text-amber-400 mt-1 block">3,910</span>
          <span className="text-[10px] text-slate-500">15.9% total volume</span>
        </div>
      </div>

      {/* AI Insight Panel (Requirement #8: Exactly specified text) */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-500/30 p-6 sm:p-7 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">AI-Assisted Policy Insight</h2>
              <p className="text-[11px] text-slate-400">Automated Cross-Correlation Analysis for Decision-Makers</p>
            </div>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            Synthesized Intelligence
          </span>
        </div>

        {/* Specified insight text */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 leading-relaxed font-serif italic">
          "Several farmer requests in the selected region relate to water availability and irrigation. The dashboard also shows elevated water-stress indicators in the sample dataset."
        </div>

        {/* Potential areas for government review (Requirement #8) */}
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-300">
            Potential areas for government review:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
            {[
              'Irrigation improvement',
              'Rainwater harvesting',
              'Water-use efficiency',
              'Soil moisture conservation',
              'Regenerative agriculture programs'
            ].map((area, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-slate-850 border border-slate-750 text-xs font-semibold text-slate-200 flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory exact note as requested in Section 8 */}
        <div className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 text-xs text-amber-300/90 flex items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            "AI-generated insights are intended to support human review and should not replace government assessment or field verification."
          </span>
        </div>
      </div>

      {/* Regional Demand Table Section (Requirement #7) */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Regional Demand Table</h2>
            <p className="text-xs text-slate-400">
              Multi-district prioritization based on farmer complaint volume and agro-environmental stress.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search state/district..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-950 border border-slate-750 text-xs text-slate-200 rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:border-emerald-500 w-44 sm:w-56"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-950 border border-slate-750 text-xs text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All Statuses</option>
              <option value="Review">Review</option>
              <option value="Monitoring">Monitoring</option>
              <option value="Approved">Approved</option>
            </select>
          </div>
        </div>

        {/* Table as required: Region | Requests | Main Issue | Water Stress | Soil Concern | Review Status | Actions */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800 text-[11px]">
              <tr>
                <th className="py-3 px-4">Region</th>
                <th className="py-3 px-4">Requests</th>
                <th className="py-3 px-4">Main Issue</th>
                <th className="py-3 px-4">Water Stress</th>
                <th className="py-3 px-4">Soil Concern</th>
                <th className="py-3 px-4">Review Status</th>
                <th className="py-3 px-4 text-right">Administrative Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-medium">
              {filteredRegions.map((row) => {
                const currentStatus = activeReviewState[row.id] || row.reviewStatus;
                return (
                  <tr key={row.id} className="hover:bg-slate-850/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {row.name}
                    </td>

                    <td className="py-3.5 px-4 font-mono font-bold text-slate-100">
                      {row.farmerRequests.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-4 text-slate-200">
                      <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[11px]">
                        {row.id === 'rajasthan' ? 'Water' : 
                         row.id === 'maharashtra' ? 'Soil' : 
                         row.id === 'punjab' ? 'Water' : 
                         row.id === 'karnataka' ? 'Irrigation' : 
                         row.id === 'uttar_pradesh' ? 'Water' : 'Water & Soil'}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        row.waterStress === 'High' 
                          ? 'bg-rose-950 text-rose-300 border border-rose-800' 
                          : 'bg-amber-950 text-amber-300 border border-amber-800'
                      }`}>
                        {row.waterStress}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        row.soilHealthConcern === 'High' 
                          ? 'bg-rose-950 text-rose-300 border border-rose-800' 
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {row.soilHealthConcern}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <select
                        value={currentStatus}
                        onChange={(e) => handleUpdateStatus(row.id, e.target.value)}
                        className={`text-[11px] font-bold rounded px-2 py-1 border focus:outline-none ${
                          currentStatus === 'Approved' 
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-800' 
                            : currentStatus === 'Monitoring'
                            ? 'bg-blue-950 text-blue-300 border-blue-800'
                            : 'bg-amber-950 text-amber-300 border-amber-800'
                        }`}
                      >
                        <option value="Review">Review</option>
                        <option value="Monitoring">Monitoring</option>
                        <option value="Approved">Approved</option>
                      </select>
                    </td>

                    {/* Exact buttons requested: View Evidence | View Region | Track Intervention */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5 flex-wrap">
                        <button
                          onClick={() => setSelectedEvidenceRegion(row)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 text-[11px] font-semibold transition-colors cursor-pointer"
                          title="Inspect raw farmer voice records & satellite proof"
                        >
                          View Evidence
                        </button>
                        <button
                          onClick={() => handleViewRegion(row.id)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-[11px] font-semibold transition-colors cursor-pointer"
                          title="View on Hotspot Map"
                        >
                          View Region
                        </button>
                        <button
                          onClick={() => handleTrackIntervention(row.id)}
                          className="px-2.5 py-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-[11px] font-semibold transition-colors cursor-pointer"
                          title="Measure intervention impact"
                        >
                          Track Intervention
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Evidence Inspection Modal */}
      {selectedEvidenceRegion && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Verified Grievance Evidence Dossier: {selectedEvidenceRegion.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Aggregated sample from {selectedEvidenceRegion.farmerRequests.toLocaleString()} rural submissions
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedEvidenceRegion(null)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonials */}
            <div className="space-y-3">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Verbatim Farmer Spoken Recordings (Transcribed)
              </div>
              {selectedEvidenceRegion.sampleQuotes.map((quote, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 italic">
                  {quote}
                </div>
              ))}
            </div>

            {/* Satellite & Ground Proof */}
            <div className="space-y-2">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Correlated Satellite Telemetry
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Water Stress Assessment</span>
                  <span className="font-bold text-rose-400">{selectedEvidenceRegion.waterStress} Risk</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Soil Health Depletion</span>
                  <span className="font-bold text-amber-400">{selectedEvidenceRegion.soilHealthConcern} Concern</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="text-[11px] text-slate-500 font-mono">
                Cryptographic Audit Hash: 0x8f2d...41b
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleUpdateStatus(selectedEvidenceRegion.id, 'Approved');
                    setSelectedEvidenceRegion(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                >
                  Approve for Intervention Funding
                </button>
                <button
                  onClick={() => setSelectedEvidenceRegion(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
