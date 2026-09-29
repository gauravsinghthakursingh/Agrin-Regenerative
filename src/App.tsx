/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { FarmerPortal } from './components/FarmerPortal';
import { AiAnalysisSection } from './components/AiAnalysisSection';
import { AgriculturalIntelligence } from './components/AgriculturalIntelligence';
import { HotspotMap } from './components/HotspotMap';
import { RegenerativeAgriculture } from './components/RegenerativeAgriculture';
import { GovernmentDashboard } from './components/GovernmentDashboard';
import { ImpactTracking } from './components/ImpactTracking';
import { AboutSection } from './components/AboutSection';
import { DemoTourModal } from './components/DemoTourModal';
import { Footer } from './components/Footer';
import { SupportedLanguage } from './types';
import { aiService, AnalysisResult } from './services/aiService';
import { SAMPLE_FARMER_INPUTS } from './data/mockData';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('hi');
  const [activeAnalysis, setActiveAnalysis] = useState<AnalysisResult | null>(null);
  const [selectedHotspotRegionId, setSelectedHotspotRegionId] = useState<string>('rajasthan');
  const [demoTourOpen, setDemoTourOpen] = useState<boolean>(false);
  const [demoActive, setDemoActive] = useState<boolean>(false);

  // Initialize initial analysis result for Rajasthan so AI Analysis is never empty
  useEffect(() => {
    aiService.analyzeGrievance(
      SAMPLE_FARMER_INPUTS[0].text,
      'hi',
      'Jaipur, Rajasthan'
    ).then((res) => {
      setActiveAnalysis(res);
    });
  }, []);

  // Handler for when user submits analysis from Farmer Portal
  const handleAnalyzeComplete = (result: AnalysisResult) => {
    setActiveAnalysis(result);
    setCurrentSection('ai-analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler for "Load Demo Scenario" (Requirement #17)
  const handleLoadDemo = () => {
    setDemoActive(true);
    setCurrentLanguage('hi');
    setSelectedHotspotRegionId('rajasthan');
    
    // Automatically load the Rajasthan water-stress analysis
    aiService.analyzeGrievance(
      SAMPLE_FARMER_INPUTS[0].text,
      'hi',
      'Jaipur, Rajasthan'
    ).then((res) => {
      setActiveAnalysis(res);
    });

    // Open the 30s judge walkthrough modal
    setDemoTourOpen(true);
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white font-sans">
      {/* Header & Global Navigation */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onLoadDemo={handleLoadDemo}
        demoActive={demoActive}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentSection === 'home' && (
          <HomeSection
            onNavigate={handleNavigate}
            currentLanguage={currentLanguage}
            onLoadDemo={handleLoadDemo}
          />
        )}

        {currentSection === 'farmer-portal' && (
          <FarmerPortal
            onAnalyzeComplete={handleAnalyzeComplete}
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        )}

        {currentSection === 'ai-analysis' && (
          <AiAnalysisSection
            analysis={activeAnalysis}
            onNavigate={handleNavigate}
            onSelectHotspotRegion={setSelectedHotspotRegionId}
          />
        )}

        {currentSection === 'agricultural-intelligence' && (
          <AgriculturalIntelligence />
        )}

        {currentSection === 'hotspot-map' && (
          <HotspotMap
            selectedRegionId={selectedHotspotRegionId}
            onSelectRegion={setSelectedHotspotRegionId}
            onNavigate={handleNavigate}
          />
        )}

        {currentSection === 'regenerative-agriculture' && (
          <RegenerativeAgriculture
            onNavigate={handleNavigate}
          />
        )}

        {currentSection === 'government-dashboard' && (
          <GovernmentDashboard
            onNavigate={handleNavigate}
            onSelectRegion={setSelectedHotspotRegionId}
          />
        )}

        {currentSection === 'impact-tracking' && (
          <ImpactTracking />
        )}

        {currentSection === 'about-agrin' && (
          <AboutSection />
        )}
      </main>

      {/* Interactive 30s Guided Judge Walkthrough Modal (Requirement #17) */}
      <DemoTourModal
        isOpen={demoTourOpen}
        onClose={() => setDemoTourOpen(false)}
        onNavigate={handleNavigate}
        onSelectRegion={setSelectedHotspotRegionId}
      />

      {/* Global Public-Sector Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
