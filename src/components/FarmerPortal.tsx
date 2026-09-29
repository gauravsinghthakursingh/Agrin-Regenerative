import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Send, 
  Sparkles, 
  Languages, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw,
  FileAudio,
  ArrowRight,
  ShieldCheck,
  Volume2
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { SAMPLE_FARMER_INPUTS, SUPPORTED_LANGUAGES, UI_TRANSLATIONS } from '../data/mockData';
import { aiService, AnalysisResult } from '../services/aiService';

interface FarmerPortalProps {
  onAnalyzeComplete: (result: AnalysisResult) => void;
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export const FarmerPortal: React.FC<FarmerPortalProps> = ({
  onAnalyzeComplete,
  currentLanguage,
  onLanguageChange,
}) => {
  const [inputMode, setInputMode] = useState<'voice' | 'text'>('voice');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [farmerMessage, setFarmerMessage] = useState(
    'हमारे गांव में पानी की समस्या है और सिंचाई की सुविधा पर्याप्त नहीं है।'
  );
  const [selectedLocation, setSelectedLocation] = useState('Jaipur, Rajasthan');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [analyzingState, setAnalyzingState] = useState(false);
  const [understandingReady, setUnderstandingReady] = useState(true);
  const [detectedCategory, setDetectedCategory] = useState('Water & Irrigation');
  const [detectedIssue, setDetectedIssue] = useState('Water availability');
  const [potentialImpact, setPotentialImpact] = useState('Irrigation constraint');

  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.en;

  // Simulate voice recording
  const handleMicClick = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      setIsTranscribing(true);
      setTimeout(() => {
        setIsTranscribing(false);
        // Load appropriate speech transcript based on language
        const match = SAMPLE_FARMER_INPUTS.find(s => s.language === currentLanguage) || SAMPLE_FARMER_INPUTS[0];
        setFarmerMessage(match.text);
        setDetectedCategory(match.category);
        setDetectedIssue(match.issue);
        setSelectedLocation(match.location);
        setPotentialImpact(match.potentialImpact);
        setUnderstandingReady(true);
      }, 1200);
    } else {
      // Start recording
      setIsRecording(true);
      setRecordingSeconds(0);
      setUnderstandingReady(false);
      
      const interval = setInterval(() => {
        setRecordingSeconds((prev) => {
          if (prev >= 3) {
            clearInterval(interval);
            setIsRecording(false);
            setIsTranscribing(true);
            setTimeout(() => {
              setIsTranscribing(false);
              const match = SAMPLE_FARMER_INPUTS.find(s => s.language === currentLanguage) || SAMPLE_FARMER_INPUTS[0];
              setFarmerMessage(match.text);
              setDetectedCategory(match.category);
              setDetectedIssue(match.issue);
              setSelectedLocation(match.location);
              setPotentialImpact(match.potentialImpact);
              setUnderstandingReady(true);
            }, 1200);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const handleSelectPreset = (preset: typeof SAMPLE_FARMER_INPUTS[0]) => {
    onLanguageChange(preset.language);
    setFarmerMessage(preset.text);
    setSelectedLocation(preset.location);
    setDetectedCategory(preset.category);
    setDetectedIssue(preset.issue);
    setPotentialImpact(preset.potentialImpact);
    setUnderstandingReady(true);
  };

  const handleAnalyzeClick = async () => {
    setAnalyzingState(true);
    try {
      const result = await aiService.analyzeGrievance(farmerMessage, currentLanguage, selectedLocation);
      onAnalyzeComplete(result);
    } finally {
      setAnalyzingState(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <Languages className="w-3.5 h-3.5" />
          <span>Multilingual Voice & Text Intake</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Report an Agricultural Problem
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Farmers can speak in their native tongue or type their issue. AgriN’s AI extracts core agricultural distress indicators for immediate regional clustering.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        {/* Step 1: Language Selection */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>1. Choose Dialect / Language</span>
            <span className="text-[11px] text-emerald-400 font-normal">Supports 9+ BRICS & Indic Dialects</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {SUPPORTED_LANGUAGES.slice(0, 7).map((lang) => {
              const active = currentLanguage === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex flex-col items-center transition-all ${
                    active
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-750'
                  }`}
                >
                  <span className="text-xs">{lang.nativeName}</span>
                  <span className={`text-[10px] ${active ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                    {lang.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Input Method Toggle */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            2. Select Input Mode
          </label>
          <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 max-w-sm">
            <button
              type="button"
              onClick={() => setInputMode('voice')}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                inputMode === 'voice'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>Voice Report (Microphone)</span>
            </button>
            <button
              type="button"
              onClick={() => setInputMode('text')}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                inputMode === 'text'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileAudio className="w-4 h-4" />
              <span>Text Report</span>
            </button>
          </div>
        </div>

        {/* Step 3: Interactive Voice Recorder or Text Input */}
        {inputMode === 'voice' ? (
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center space-y-4">
            <div className="text-xs text-slate-400">
              {isRecording ? (
                <span className="text-rose-400 font-semibold flex items-center gap-1.5 animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  Listening & Recording Voice ({recordingSeconds}s)... Speak your agricultural issue
                </span>
              ) : isTranscribing ? (
                <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Multilingual AI Speech-to-Text Recognition in progress...
                </span>
              ) : (
                <span>Tap the microphone to simulate a spoken voice report in {SUPPORTED_LANGUAGES.find(l => l.code === currentLanguage)?.name}</span>
              )}
            </div>

            {/* Giant Microphone Button */}
            <div className="relative">
              {isRecording && (
                <div className="absolute inset-0 -m-4 rounded-full bg-rose-500/20 animate-ping pointer-events-none" />
              )}
              <button
                type="button"
                onClick={handleMicClick}
                disabled={isTranscribing}
                className={`w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all shadow-xl cursor-pointer ${
                  isRecording
                    ? 'bg-rose-600 hover:bg-rose-500 text-white ring-4 ring-rose-400/40 scale-105'
                    : isTranscribing
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white hover:scale-105 shadow-emerald-950/60'
                }`}
              >
                {isRecording ? (
                  <>
                    <MicOff className="w-8 h-8" />
                    <span className="text-[10px] font-bold mt-1 uppercase">Stop</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-8 h-8" />
                    <span className="text-[10px] font-bold mt-1 uppercase">Record</span>
                  </>
                )}
              </button>
            </div>

            {/* Simulated Audio Waveform visualization */}
            {isRecording && (
              <div className="flex items-center gap-1.5 h-8">
                {[40, 75, 90, 60, 100, 45, 80, 65, 95, 50, 70, 85].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-emerald-400 rounded-full transition-all duration-150 animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
                  />
                ))}
              </div>
            )}

            <div className="text-xs text-slate-400 max-w-md">
              <span className="text-slate-500 font-mono text-[10px] block mb-1">PROTOTYPE SIMULATION</span>
              Clicking the microphone simulates speech recognition and loads realistic farmer messages in the selected language.
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Farmer Message / Problem Description
            </label>
            <textarea
              rows={3}
              value={farmerMessage}
              onChange={(e) => {
                setFarmerMessage(e.target.value);
                setUnderstandingReady(true);
              }}
              placeholder="Describe water, soil, road, crop disease or pricing problem..."
              className="w-full rounded-xl bg-slate-950 border border-slate-800 p-4 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        )}

        {/* Quick Sample Presets */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
            <span>Or select a realistic farmer testimony:</span>
            <span className="text-[11px] text-slate-500">Click to autofill</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SAMPLE_FARMER_INPUTS.map((sample, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectPreset(sample)}
                className={`text-left p-3 rounded-xl border text-xs transition-colors flex flex-col justify-between ${
                  farmerMessage === sample.text
                    ? 'bg-slate-800 border-emerald-500/60 text-emerald-300'
                    : 'bg-slate-950/60 hover:bg-slate-800/60 border-slate-800 text-slate-300'
                }`}
              >
                <div className="font-semibold text-slate-200 mb-1">{sample.label}</div>
                <div className="italic text-slate-400 text-[11px] line-clamp-1">"{sample.text}"</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              Detected / Selected District
            </label>
            <input
              type="text"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Farmer Privacy Status
            </label>
            <div className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Anonymized Voice Vector</span>
              <span className="text-emerald-400 font-semibold text-[11px]">Protected</span>
            </div>
          </div>
        </div>

        {/* AI Understanding Card (Requirement #2) */}
        {understandingReady && (
          <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30 border border-emerald-500/40 p-5 sm:p-6 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">AI Understanding</h3>
                  <p className="text-[11px] text-slate-400">Natural Language Extraction & Classification</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                Confidence 96.8%
              </span>
            </div>

            {/* Simulated transcript text if in non-english */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Volume2 className="w-3 h-3 text-slate-400" /> Farmer Voice Input:
              </div>
              <p className="italic text-slate-200">"{farmerMessage}"</p>
            </div>

            {/* Exactly specified Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] uppercase font-bold text-slate-400">Category</div>
                <div className="font-bold text-emerald-300 mt-1 text-sm">{detectedCategory}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] uppercase font-bold text-slate-400">Issue</div>
                <div className="font-bold text-slate-100 mt-1 text-sm">{detectedIssue}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] uppercase font-bold text-slate-400">Location</div>
                <div className="font-bold text-cyan-300 mt-1 text-sm">{selectedLocation}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] uppercase font-bold text-slate-400">Potential Impact</div>
                <div className="font-bold text-amber-300 mt-1 text-sm">{potentialImpact}</div>
              </div>
            </div>

            {/* Action Button: Analyze Request (Requirement #2) */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleAnalyzeClick}
                disabled={analyzingState}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] cursor-pointer"
              >
                {analyzingState ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Analyzing Agricultural Request...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Analyze Request</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Public Sector Trust Notice */}
      <div className="p-4 rounded-xl bg-slate-850/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-300">Public Demonstration Notice:</strong> In production, AgriN operates across IVR toll-free phone calls, community WhatsApp chatbots, and Panchayat digital kiosks to bridge the digital literacy divide for smallholder farmers.
        </p>
      </div>
    </div>
  );
};
