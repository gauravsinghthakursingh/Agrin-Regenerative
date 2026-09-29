import React, { useState } from 'react';
import { 
  Globe, 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  Compass, 
  ChevronDown
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { SUPPORTED_LANGUAGES, UI_TRANSLATIONS } from '../data/mockData';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onLoadDemo: () => void;
  demoActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  currentLanguage,
  onLanguageChange,
  onLoadDemo,
  demoActive,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.en;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'farmer-portal', label: 'Farmer Portal' },
    { id: 'agricultural-intelligence', label: 'Agricultural Intelligence' },
    { id: 'hotspot-map', label: 'Hotspot Map' },
    { id: 'regenerative-agriculture', label: 'Regenerative Agriculture' },
    { id: 'government-dashboard', label: 'Government Dashboard' },
    { id: 'impact-tracking', label: 'Impact Tracking' },
    { id: 'about-agrin', label: 'About AgriN' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const selectedLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      {/* Top Public Sector Context Bar */}
      <div className="bg-slate-950/80 px-4 py-1.5 text-xs border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-semibold uppercase tracking-wider text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            BRICS Innovation Challenge
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline">Prototype Digital Public Good (DPG) Concept</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
          <span className="inline-flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Responsible AI & Data Privacy Protected
          </span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="hidden md:inline text-slate-400">Simulated / Demonstration Datasets</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo & Platform Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-950/40 border border-emerald-400/30 group-hover:scale-105 transition-transform">
              {/* Custom AgriN Emblem: Leaf + Tech Node */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" strokeOpacity="0.3" />
                <path d="M7 17C7 17 8 10 17 7C17 7 14 16 7 17Z" />
                <path d="M12 12L7 17" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  AgriN
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  v1.0 Pro
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block tracking-wide uppercase">
                Regenerative Agricultural Intelligence
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    active
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Demo Mode Button & Language Selector */}
          <div className="flex items-center gap-2">
            {/* Demo Button */}
            <button
              onClick={onLoadDemo}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md transition-all ${
                demoActive
                  ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 ring-2 ring-amber-400/50'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 border border-emerald-400/30'
              }`}
              title="Click to automatically load the Rajasthan water-stress demo scenario for judges"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{demoActive ? 'Demo: Rajasthan Active' : t.loadDemo || 'Load Demo Scenario'}</span>
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 hover:border-slate-600 text-xs font-medium text-slate-200 transition-colors"
                aria-expanded={langMenuOpen}
              >
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                <span className="hidden sm:inline">{selectedLangObj.nativeName}</span>
                <span className="sm:hidden uppercase">{selectedLangObj.code}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl py-1 z-50 max-h-80 overflow-y-auto"
                  onMouseLeave={() => setLangMenuOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 border-b border-slate-700/60 uppercase tracking-wider">
                    Select Interface & Farmer Dialect
                  </div>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-700/70 transition-colors ${
                        currentLanguage === lang.code ? 'bg-emerald-950/60 text-emerald-300 font-semibold' : 'text-slate-200'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="text-[10px] text-slate-400">{lang.name}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/80 text-slate-300 font-mono">
                        {lang.bricsCountry}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                currentSection === item.id
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>BRICS Innovation Prototype</span>
            <span className="text-emerald-400 font-mono">AgriN v1.0</span>
          </div>
        </div>
      )}
    </header>
  );
};
