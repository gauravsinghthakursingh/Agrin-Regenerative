import React, { useState } from 'react';
import { 
  BarChart3, 
  Droplets, 
  Layers, 
  Truck, 
  TrendingUp, 
  HelpCircle, 
  ArrowUpRight, 
  Calendar, 
  PieChart, 
  Filter,
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';
import { COMMON_AGRICULTURAL_NEEDS, MONTHLY_REQUEST_TREND, REGIONAL_HOTSPOTS } from '../data/mockData';

export const AgriculturalIntelligence: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'trends' | 'categories' | 'needs'>('trends');

  // Categories data
  const categoryData = [
    { name: 'Water & Irrigation', count: 7420, percent: 30.2, color: '#06b6d4' },
    { name: 'Soil Health & Fertility', count: 4860, percent: 19.8, color: '#10b981' },
    { name: 'Infrastructure & Roads', count: 3910, percent: 15.9, color: '#f59e0b' },
    { name: 'Market Access & Pricing', count: 3320, percent: 13.5, color: '#8b5cf6' },
    { name: 'Storage & Cold Chain', count: 2750, percent: 11.2, color: '#ec4899' },
    { name: 'Crop Disease & Pests', count: 2320, percent: 9.4, color: '#ef4444' },
  ];

  const regionalBreakdown = [
    { region: 'Rajasthan', count: 4280, water: 1620, soil: 890, infra: 740, color: '#f97316' },
    { region: 'Maharashtra', count: 3640, water: 980, soil: 1420, infra: 620, color: '#10b981' },
    { region: 'Uttar Pradesh', count: 3420, water: 1040, soil: 780, infra: 920, color: '#06b6d4' },
    { region: 'Punjab', count: 2950, water: 1340, soil: 610, infra: 580, color: '#3b82f6' },
    { region: 'Karnataka', count: 2710, water: 1120, soil: 530, infra: 590, color: '#8b5cf6' },
    { region: 'Tamil Nadu', count: 2340, water: 880, soil: 420, infra: 460, color: '#14b8a6' },
    { region: 'Madhya Pradesh', count: 2180, water: 620, soil: 590, infra: 490, color: '#eab308' },
  ];

  const maxMonthly = Math.max(...MONTHLY_REQUEST_TREND.map(m => m.total));

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            Public Sector Macro Analytics
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Agricultural Intelligence Dashboard
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Aggregated cross-regional demand indicators synthesized from 24,580 authenticated farmer inquiries.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Simulated Sample Data (FY 2025-26)
          </span>
        </div>
      </div>

      {/* KPI Cards (Exact specified numbers) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Farmer Requests</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white mt-3">24,580</div>
          <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
            <span className="text-emerald-400 font-semibold">+18.4%</span>
            <span>vs previous agricultural cycle</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Water-related Requests</span>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Droplets className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-cyan-400 mt-3">7,420</div>
          <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
            <span className="text-cyan-400 font-semibold">30.2%</span>
            <span>of total national volume</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Soil-related Requests</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-3">4,860</div>
          <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
            <span className="text-emerald-400 font-semibold">19.8%</span>
            <span>organic carbon & fertilizer cost</span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Infrastructure Requests</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-amber-400 mt-3">3,910</div>
          <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
            <span className="text-amber-400 font-semibold">15.9%</span>
            <span>rural access roads & feeders</span>
          </div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart 1: Monthly Request Trend (12 Months) */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                Monthly Request Trend (Seasonal Surge)
              </h3>
              <p className="text-xs text-slate-400">12-Month distribution showing pre-monsoon water spikes</p>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">
              Peak: May (2,980)
            </span>
          </div>

          {/* SVG Area Chart */}
          <div className="h-56 w-full pt-4">
            <div className="h-44 flex items-end gap-2 sm:gap-3 px-2 border-b border-slate-800">
              {MONTHLY_REQUEST_TREND.map((item, idx) => {
                const heightPercent = Math.round((item.total / maxMonthly) * 100);
                const isPeak = item.month === 'May';
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-12 bg-slate-950 text-white border border-slate-700 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      <strong>{item.month}:</strong> {item.total} requests<br/>
                      <span className="text-cyan-400">{item.water} water</span>
                    </div>

                    <div className="w-full flex items-end justify-center h-full">
                      <div
                        className={`w-full max-w-[28px] rounded-t-md transition-all duration-300 ${
                          isPeak
                            ? 'bg-gradient-to-t from-emerald-600 to-teal-400 group-hover:brightness-125'
                            : 'bg-gradient-to-t from-slate-700 to-slate-500 group-hover:from-emerald-700 group-hover:to-teal-500'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">{item.month}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-500 pt-2 px-1">
              <span>Rabi Harvest (Oct - Feb)</span>
              <span className="text-amber-400 font-semibold">Dry Summer Peak (Mar - May)</span>
              <span>Kharif Sowing (Jun - Sep)</span>
            </div>
          </div>
        </div>

        {/* Chart 2: Requests by Category */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <PieChart className="w-4 h-4 text-cyan-400" />
                Requests by Category
              </h3>
              <p className="text-xs text-slate-400">Relative share across primary agricultural sectors</p>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-1 rounded">
              Total: 24,580
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {categoryData.map((cat, idx) => (
              <div 
                key={idx} 
                className="space-y-1 cursor-pointer group"
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200 group-hover:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    {cat.name}
                  </span>
                  <div className="text-slate-300 font-mono">
                    <span className="font-bold">{cat.count.toLocaleString()}</span>
                    <span className="text-slate-500 ml-1.5">({cat.percent}%)</span>
                  </div>
                </div>
                {/* Bar */}
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${cat.percent * 3}%`, 
                      backgroundColor: cat.color 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 3: Requests by Region */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                Requests by State / Region
              </h3>
              <p className="text-xs text-slate-400">Top demand clusters identified for targeted allocation</p>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">
              7 Pilot Regions
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {regionalBreakdown.map((item, idx) => {
              const maxReg = 4280;
              const pct = (item.count / maxReg) * 100;
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">{item.region}</span>
                    <span className="font-mono text-slate-300">
                      <strong className="text-white">{item.count.toLocaleString()}</strong> requests
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden flex">
                    <div 
                      className="h-full bg-cyan-500" 
                      style={{ width: `${(item.water / maxReg) * 100}%` }}
                      title={`Water: ${item.water}`}
                    />
                    <div 
                      className="h-full bg-emerald-500" 
                      style={{ width: `${(item.soil / maxReg) * 100}%` }}
                      title={`Soil: ${item.soil}`}
                    />
                    <div 
                      className="h-full bg-amber-500" 
                      style={{ width: `${(item.infra / maxReg) * 100}%` }}
                      title={`Infrastructure: ${item.infra}`}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex items-center justify-end gap-4 text-[10px] text-slate-400 pt-1">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500"/> Water</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"/> Soil</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"/> Infrastructure</span>
            </div>
          </div>
        </div>

        {/* Chart 4: Agricultural Issue Distribution & Multi-dimensional Radar */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                Agricultural Issue Severity Distribution
              </h3>
              <p className="text-xs text-slate-400">Multi-factor severity score per distress typology</p>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">
              Index 0-100
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { label: 'Groundwater Stress', value: 88, status: 'Critical', color: 'text-rose-400' },
              { label: 'Soil Organic Carbon', value: 76, status: 'Deficient', color: 'text-amber-400' },
              { label: 'Canal Tail-End Flow', value: 69, status: 'Delayed', color: 'text-amber-400' },
              { label: 'Feeder Power Outages', value: 58, status: 'Moderate', color: 'text-yellow-400' },
              { label: 'Post-Harvest Losses', value: 64, status: 'Elevated', color: 'text-amber-400' },
              { label: 'Fertilizer Input Debt', value: 81, status: 'Severe', color: 'text-rose-400' },
            ].map((metric, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400 font-medium">{metric.label}</div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl font-black text-white">{metric.value}</span>
                  <span className={`text-[10px] font-bold ${metric.color}`}>{metric.status}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500" 
                    style={{ width: `${metric.value}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Agricultural Needs (Exact requirement #4: 6 specific items) */}
      <div className="space-y-6 pt-4">
        <div>
          <div className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            Systemic Policy Prioritization
          </div>
          <h2 className="text-2xl font-bold text-white">
            Common Agricultural Needs
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Ranked by aggregate volume of smallholder grievances and agro-ecological risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMON_AGRICULTURAL_NEEDS.map((need) => (
            <div 
              key={need.rank}
              className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center">
                    0{need.rank}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                      {need.percentage}%
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      need.priority === 'Critical' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
                    }`}>
                      {need.priority}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-base text-white mt-3">{need.name}</h3>
                <div className="text-xs font-mono text-emerald-400 mt-0.5">{need.requestCount.toLocaleString()} farmer requests ({need.trend})</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {need.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1.5 tracking-wider">
                  Recommended Policy Levers
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {need.levers.map((lever, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {lever}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
