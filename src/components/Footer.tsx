import React from 'react';
import { 
  Sprout, 
  Github, 
  FileText, 
  Users, 
  ShieldCheck, 
  Globe2, 
  ExternalLink,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <Sprout className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                AgriN & Regenerative Agricultural Intelligence
              </span>
            </div>
            <p className="text-sm font-semibold text-emerald-400/90 italic font-serif">
              "From farmer voice to agricultural intelligence."
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              AgriN connects smallholder distress signals with multi-spectral satellite telemetry to identify acute agricultural need hotspots and catalyze evidence-based regenerative planning.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
              <Globe2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Prototype for BRICS Innovation Challenge</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold text-white tracking-wider">
              Platform Modules
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('farmer-portal')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Farmer Voice Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('agricultural-intelligence')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Agricultural Intelligence
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('hotspot-map')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Hotspot Map (India)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('regenerative-agriculture')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Regenerative Agriculture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('government-dashboard')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Government Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('impact-tracking')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Impact Tracking Loop
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Placeholders (Requirement #18) */}
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold text-white tracking-wider">
              Project Links & Docs
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://github.com/brics-innovation/agrin-regenerative"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => { e.preventDefault(); alert('GitHub Repository: github.com/brics-innovation/agrin-regenerative (Digital Public Good License: MIT / CC0)'); }}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about-agrin')}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-300" />
                  <span>Documentation & Architecture</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert('AgriN Project Team: Multidisciplinary team of Agricultural Economists, Geospatial Engineers, and Multilingual NLP Researchers for BRICS 2026 Innovation Challenge.')}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-slate-300" />
                  <span>Project Team & Collaborators</span>
                </button>
              </li>
              <li className="pt-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Standard:</span>
                <span className="text-[11px] text-slate-400">UN Digital Public Goods Alliance Candidate</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Clear Prototype Data Notice Bar (Requirement) */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Demonstration Prototype:</strong> "Prototype Data" • "Illustrative Example" • "AI-generated demonstration" — Not official government statistics.
            </span>
          </div>
          <div>
            © {new Date().getFullYear()} AgriN Initiative • Built for BRICS Innovation Challenge
          </div>
        </div>
      </div>
    </footer>
  );
};
