import React, { useState } from 'react';
import { 
  Info, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Layers, 
  Lock, 
  UserCheck, 
  Eye, 
  CheckCircle2, 
  Globe2, 
  Terminal, 
  Share2, 
  FileCode2, 
  BookOpen, 
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { TECHNICAL_ARCHITECTURE_STEPS } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'architecture' | 'responsible_ai' | 'data_sources' | 'dpg' | 'readme'>('about');

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5" />
          <span>BRICS Innovation Challenge Whitepaper & System Architecture</span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">
          About AgriN & System Specifications
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Architecture, ethical governance principles, Digital Public Good standards, and integrated data models.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'about', label: '1. About AgriN & Vision' },
          { id: 'architecture', label: '2. Technical Architecture' },
          { id: 'data_sources', label: '3. Data Sources' },
          { id: 'responsible_ai', label: '4. Responsible AI' },
          { id: 'dpg', label: '5. Digital Public Good' },
          { id: 'readme', label: '6. Full Documentation / README' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: ABOUT AGRIN & VISION (Requirement #14) */}
      {activeTab === 'about' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Exact text block from prompt */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 space-y-6 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                Core Mission
              </span>
              <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed font-serif">
                "AgriN is a prototype concept for connecting farmer voices with agricultural intelligence. The platform combines human feedback with multiple data sources to help identify agricultural needs, understand regional patterns and monitor potential outcomes."
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-950 border border-emerald-500/30 space-y-2">
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider block">
                The AgriN Vision
              </span>
              <p className="text-base sm:text-lg text-emerald-200 font-semibold italic">
                "Every farmer should have a simple way to communicate an agricultural problem, and that information should have a path toward meaningful analysis and action."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1">BRICS Agricultural Challenge</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tailored to address climate stress, soil organic carbon loss, and smallholder water scarcity across India, Brazil, Russia, China, and South Africa.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1">Zero Digital Literacy Barrier</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Voice-first architecture allows farmers with zero literacy or complex app experience to report distress in their everyday mother tongue.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1">Evidence-Based Governance</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Prevents misallocated subsidies by correlating thousands of human signals against hard satellite soil moisture and aquifer telemetry.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TECHNICAL ARCHITECTURE (Requirement #15) */}
      {activeTab === 'architecture' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 space-y-6 shadow-xl">
            <div>
              <div className="text-xs text-emerald-400 uppercase font-bold tracking-wider">
                Full-Stack Architecture Specification
              </div>
              <h2 className="text-2xl font-black text-white mt-1">
                Data & Intelligence Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                From rural voice capture to regional hotspot detection and ministerial fund accountability.
              </p>
            </div>

            {/* Visual Architecture Flow as requested */}
            <div className="space-y-3">
              {[
                { title: 'Farmer', detail: 'Smallholder, tenant farmer, woman agriculturalist' },
                { title: 'Voice / Text / Messaging', detail: 'Audio, SMS, WhatsApp, IVR toll-free dialer' },
                { title: 'Multilingual AI', detail: 'Cross-dialect acoustic phonetic normalization' },
                { title: 'Speech-to-Text + NLP + Translation', detail: 'Named Entity Recognition (NER), taxonomy categorization' },
                { title: 'Agricultural Data Layer', detail: 'Soil moisture, remote sensing, meteorology, APMC market data' },
                { title: 'Analytics + Geospatial Intelligence', detail: 'Spatial indexing (H3 / S2) and temporal baseline comparison' },
                { title: 'Hotspot Detection', detail: 'DBSCAN clustering of statistically significant grievance clusters' },
                { title: 'AI-Assisted Insights', detail: 'Explainable regenerative options for policymaker evaluation' },
                { title: 'Government Dashboard', detail: 'Evidence review, fund sanction, KVK field team dispatch' },
                { title: 'Impact Tracking', detail: 'Post-intervention feedback, satellite vegetation index (NDVI)' }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-xs">{step.title}</span>
                    <span className="text-[11px] text-slate-400 font-mono">{step.detail}</span>
                  </div>
                  {idx < 9 && (
                    <div className="hidden sm:block text-slate-600 text-xs">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DATA SOURCES (Requirement #11) */}
      {activeTab === 'data_sources' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 space-y-6 shadow-xl">
            <div>
              <div className="text-xs text-cyan-400 uppercase font-bold tracking-wider">
                Multi-Modal Integration Matrix
              </div>
              <h2 className="text-2xl font-black text-white mt-1">Data Sources Section</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                The production version of AgriN is architected to seamlessly fuse 11 heterogenous data streams.
              </p>
            </div>

            {/* Exactly listed 11 sources from prompt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Farmer Feedback', source: 'Crowdsourced IVR & WhatsApp', desc: 'Direct qualitative voice testimonies from the field.' },
                { name: 'Soil Data', source: 'Soil Health Card & ICAR Labs', desc: 'Organic carbon %, NPK levels, micronutrients, salinity.' },
                { name: 'Rainfall Data', source: 'IMD & Doppler Radar', desc: 'Monsoon onset deviations, dry-spell durations, localized rainfall.' },
                { name: 'Water Availability', source: 'CGWB & Sentinel-2', desc: 'Aquifer water table depth and surface reservoir water spread.' },
                { name: 'Crop Information', source: 'Crop Sowing Censuses', desc: 'Crop stage, variety sowing acreages, yield expectations.' },
                { name: 'Demographic Data', source: 'Census & Rural Socio-Economic', desc: 'Smallholder landholding size, vulnerable caste/tribal clusters.' },
                { name: 'Infrastructure Information', source: 'PMGSY & State Discoms', desc: 'All-weather feeder roads, electricity grid hours, canal status.' },
                { name: 'Agricultural Productivity', source: 'State Dept of Agriculture', desc: 'Historical district quintal/hectare harvest trends.' },
                { name: 'Market Information', source: 'e-NAM & Agmarknet', desc: 'Daily wholesale modal prices, mandi arrivals, trader spreads.' },
                { name: 'Public Investment Plans', source: 'Ministry Development Portals', desc: 'Sanctioned watershed funds, micro-irrigation capital grants.' },
                { name: 'Environmental Indicators', source: 'Copernicus & ISRO Bhuvan', desc: 'NDVI vegetation vigor, land surface temperature, drought indexes.' }
              ].map((src, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-teal-400 font-mono">{src.source}</span>
                    <h3 className="text-sm font-bold text-white mt-1">{src.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{src.desc}</p>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono mt-3 pt-2 border-t border-slate-900 block">
                    Simulated Schema Ready
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
              <strong className="text-slate-300">Prototype Transparency:</strong> In this demonstration build, all satellite and grievance telemetry is generated via calibrated realistic synthetic datasets.
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: RESPONSIBLE AI (Requirement #12) */}
      {activeTab === 'responsible_ai' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 space-y-6 shadow-xl">
            <div>
              <div className="text-xs text-emerald-400 uppercase font-bold tracking-wider">
                Ethical Safeguards & Governance
              </div>
              <h2 className="text-2xl font-black text-white mt-1">Responsible AI Framework</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                AgriN is engineered specifically to support policymakers rather than replacing human decision-makers.
              </p>
            </div>

            {/* Exactly specified 8 points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Privacy by Design', desc: 'Farmer voice recordings are scrubbed of personal identifiers before entering regional vector databases.' },
                { title: 'Data Minimization', desc: 'Only agro-climatic distress entities and geo-locality are retained; private phone numbers are salted.' },
                { title: 'Human Review Mandatory', desc: 'No financial or administrative action is executed without explicit ministerial or KVK officer sign-off.' },
                { title: 'Explainable AI (XAI)', desc: 'Every insight provides transparent citations back to raw farmer complaint volume and satellite indexes.' },
                { title: 'Multilingual Accessibility', desc: 'Equal performance across low-resource dialects ensures marginalized tribal farmers are not omitted.' },
                { title: 'Secure Data Handling', desc: 'Zero transmission of raw biometric voice to third-party ad networks; encrypted sovereign storage.' },
                { title: 'Transparent Recommendations', desc: 'Interventions are displayed as options for evaluation, avoiding black-box algorithmic prescription.' },
                { title: 'No Automated Decisions', desc: 'AI acts as decision support; public funds require civil servant statutory authorization.' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: DIGITAL PUBLIC GOOD (Requirement #13) */}
      {activeTab === 'dpg' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 space-y-6 shadow-xl">
            <div>
              <div className="text-xs text-teal-400 uppercase font-bold tracking-wider">
                UN DPG Standard Compliance
              </div>
              <h2 className="text-2xl font-black text-white mt-1">
                Designed as a Digital Public Good (DPG)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Built to be adopted and customized by any BRICS member state or developing nation without vendor lock-in.
              </p>
            </div>

            {/* Exactly specified 8 points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Open Standards', desc: 'Built on open REST APIs, GeoJSON spatial standards, and standard OGC schemas.' },
                { title: 'Interoperability', desc: 'Connects with existing National ID registries, Soil Health Card portals, and Agristack.' },
                { title: 'Modular Architecture', desc: 'Voice ingestion, geospatial analytics, and decision consoles operate as decoupled services.' },
                { title: 'Robust APIs', desc: 'Enables external research institutions and agricultural universities to query aggregated demand trends.' },
                { title: 'Multilingual Support', desc: 'Pluggable translation layer adaptable to Spanish, Swahili, Arabic, or Bahasa in hours.' },
                { title: 'Reusable Components', desc: 'UI components, SVG GIS maps, and NLP extractors open for public-sector reuse.' },
                { title: 'Privacy-Aware Design', desc: 'Compliant with Indian DPDP Act, GDPR principles, and BRICS data sovereignty laws.' },
                { title: 'Government Integration', desc: 'Mounts seamlessly on state data centers (NIC, State Data Centers, Cloud Run).' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-teal-400 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: FULL DOCUMENTATION & README */}
      {activeTab === 'readme' && (
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 font-mono text-xs text-slate-300 space-y-4 shadow-2xl overflow-x-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
            <span className="flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-emerald-400" />
              README.md — AgriN & Regenerative Agricultural Intelligence
            </span>
            <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-emerald-400">
              BRICS Innovation Challenge Build
            </span>
          </div>

          <pre className="whitespace-pre-wrap font-mono text-slate-200 leading-relaxed">
{`# AgriN: Regenerative Agricultural Intelligence Platform
## Prototype for the BRICS Innovation Challenge

### 1. Overview
AgriN connects grassroots farmer feedback with agricultural, environmental, soil, water, infrastructure, and demographic data. It identifies agricultural need hotspots and empowers government officials with evidence-based policy briefs to accelerate regenerative agriculture and climate resilience.

### 2. Architecture & Modules
- \`src/services/aiService.ts\`: Speech-to-Text simulation and agricultural NLP taxonomy categorization.
- \`src/components/FarmerPortal.tsx\`: Multilingual voice/text grievance intake in Hindi, Bengali, Tamil, etc.
- \`src/components/HotspotMap.tsx\`: Spatial clustering of localized distress across India regions.
- \`src/components/RegenerativeAgriculture.tsx\`: 6 core regenerative principles (Soil Health, Water Efficiency, etc.).
- \`src/components/GovernmentDashboard.tsx\`: Administrative review console with table, evidence modal & AI insights.
- \`src/components/ImpactTracking.tsx\`: Verifiable before/after intervention metrics (-39.5% water distress).

### 3. Key Design Philosophy
- Public-sector aesthetic: Serious, trustworthy, accessible, clean typography.
- Human-in-the-loop: AI recommends; civil servants evaluate and authorize.
- Transparent labels: All demo/prototype statistics are strictly labeled.`}
          </pre>
        </div>
      )}
    </div>
  );
};
