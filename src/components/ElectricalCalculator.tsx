import React, { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Minus, 
  RotateCcw, 
  Zap, 
  ShieldCheck, 
  BatteryCharging, 
  Cable, 
  MessageCircle, 
  Phone,
  Info,
  CheckCircle2
} from 'lucide-react';
import { DEFAULT_APPLIANCES, ApplianceItem, BUSINESS_INFO, getWhatsAppUrl, getCallUrl } from '../data/businessData';

export const ElectricalCalculator: React.FC = () => {
  const [appliances, setAppliances] = useState<{ [id: string]: number }>(() => {
    const initial: { [id: string]: number } = {};
    DEFAULT_APPLIANCES.forEach((a) => {
      initial[a.id] = a.typicalQty;
    });
    return initial;
  });

  const [connectionType, setConnectionType] = useState<'single' | 'three'>('single');

  const handleQtyChange = (id: string, delta: number) => {
    setAppliances((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const applyPreset = (type: '1bhk' | '2bhk' | '3bhk' | 'shop') => {
    const presets: Record<string, { [id: string]: number }> = {
      '1bhk': {
        led_bulb: 4,
        ceiling_fan: 2,
        cooler: 1,
        refrigerator: 1,
        tv: 1,
        water_pump: 1,
        split_ac: 0,
        geyser: 0,
        washing_machine: 1,
        microwave: 0
      },
      '2bhk': {
        led_bulb: 8,
        ceiling_fan: 3,
        cooler: 1,
        refrigerator: 1,
        tv: 1,
        water_pump: 1,
        split_ac: 1,
        geyser: 1,
        washing_machine: 1,
        microwave: 0
      },
      '3bhk': {
        led_bulb: 14,
        ceiling_fan: 5,
        cooler: 1,
        refrigerator: 1,
        tv: 2,
        water_pump: 1,
        split_ac: 2,
        geyser: 2,
        washing_machine: 1,
        microwave: 1
      },
      'shop': {
        led_bulb: 10,
        ceiling_fan: 2,
        cooler: 1,
        refrigerator: 1,
        tv: 1,
        water_pump: 0,
        split_ac: 1,
        geyser: 0,
        washing_machine: 0,
        microwave: 0
      }
    };
    if (presets[type]) {
      setAppliances(presets[type]);
    }
  };

  const resetAll = () => {
    const reset: { [id: string]: number } = {};
    DEFAULT_APPLIANCES.forEach((a) => {
      reset[a.id] = 0;
    });
    setAppliances(reset);
  };

  // Calculations
  const totalWatts = DEFAULT_APPLIANCES.reduce((sum, item) => {
    const qty = appliances[item.id] || 0;
    return sum + item.watts * qty;
  }, 0);

  const totalKw = (totalWatts / 1000).toFixed(2);

  // Inverter watts (sum of inverter capable items)
  const inverterWatts = DEFAULT_APPLIANCES.reduce((sum, item) => {
    if (!item.inverterCapable) return sum;
    const qty = appliances[item.id] || 0;
    return sum + item.watts * qty;
  }, 0);

  // Recommended Inverter VA (with 0.8 power factor & 1.25 safety headroom)
  const recommendedInverterVA = Math.ceil((inverterWatts / 0.8) * 1.25);
  const inverterSuggestion = recommendedInverterVA <= 700 ? '900 VA (Single 12V Battery)' :
    recommendedInverterVA <= 1200 ? '1100 VA / 1250 VA (Single 12V Battery)' :
    recommendedInverterVA <= 2000 ? '1500 VA / 2000 VA (Double 24V Battery)' :
    '2500 VA+ Solar / Heavy Hybrid Inverter';

  // Running Current at 230V
  const runningAmps = totalWatts > 0 ? (totalWatts / 230).toFixed(1) : '0';

  // Recommended Main MCB
  const mcbRating = Number(runningAmps) <= 16 ? '25A DP C-Curve' :
    Number(runningAmps) <= 25 ? '32A DP C-Curve' :
    Number(runningAmps) <= 35 ? '40A DP C-Curve' :
    Number(runningAmps) <= 50 ? '63A DP C-Curve' :
    '63A 4-Pole 3-Phase MCB';

  // Recommended Main Wire Size
  const mainWireGauge = Number(runningAmps) <= 20 ? '4.0 sq mm Copper' :
    Number(runningAmps) <= 32 ? '6.0 sq mm Copper' :
    Number(runningAmps) <= 50 ? '10.0 sq mm Copper' :
    '16.0 sq mm / 4-Core Armoured Cable';

  // Rough wire coil estimation
  const totalPoints = (Object.values(appliances) as number[]).reduce((a: number, b: number) => a + b, 0);
  const roughCoils1mm = Math.max(1, Math.ceil(totalPoints * 0.15));
  const roughCoils1_5mm = Math.max(1, Math.ceil(totalPoints * 0.12));
  const roughCoils2_5mm = Math.max(1, Math.ceil(totalPoints * 0.10));

  const generateWhatsAppMessage = () => {
    const text = `Hello Dinesh Singh Raghav, maine aapki website par Electrical Load Calculate kiya hai:
• Total Connected Load: ${totalKw} kW (${totalWatts} Watts)
• Running Current: ~${runningAmps} Amps
• Recommended MCB: ${mcbRating}
• Recommended Inverter: ${inverterSuggestion}
• Recommended Main Wire: ${mainWireGauge}
Mujhe house wiring quotation aur advice chahiye.`;
    return getWhatsAppUrl(text);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-black uppercase tracking-widest text-orange-600">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Electrical Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Indian House Wiring & Load Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Select your home appliances to instantly estimate total wattage, required MCB ratings, main wire gauge, and inverter battery size.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-xs mb-8">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900">
            <span className="text-orange-600">⚡</span> Quick House Presets:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => applyPreset('1bhk')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-orange-500 hover:text-white text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              1 BHK Home
            </button>
            <button
              onClick={() => applyPreset('2bhk')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-orange-500 hover:text-white text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              2 BHK Home
            </button>
            <button
              onClick={() => applyPreset('3bhk')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-orange-500 hover:text-white text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              3 BHK Home / Villa
            </button>
            <button
              onClick={() => applyPreset('shop')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-orange-500 hover:text-white text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              Shop / Commercial
            </button>
            <button
              onClick={resetAll}
              className="px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-600 hover:text-white text-xs font-bold text-red-600 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>

        {/* Main Grid: Left appliances selector, Right calculation results */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Appliance Item Pickers */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-[11px] font-black uppercase tracking-widest text-slate-500 px-1 flex justify-between">
              <span>Select Appliances & Counts</span>
              <span>Individual Wattage</span>
            </div>

            <div className="space-y-3">
              {DEFAULT_APPLIANCES.map((item) => {
                const qty = appliances[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      qty > 0
                        ? 'bg-white border-orange-300 shadow-sm ring-1 ring-orange-500/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-black text-slate-900 text-sm flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.inverterCapable && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] bg-green-100 text-green-800 font-bold uppercase tracking-wider">
                            Inverter Backup
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {item.nameHi} • <span className="text-slate-900 font-mono font-bold">{item.watts}W each</span> • Wire: <span className="text-orange-600 font-mono font-bold">{item.wireRecommended}</span>
                      </div>
                    </div>

                    {/* Counter Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold active:scale-95 transition-transform disabled:opacity-30 cursor-pointer"
                        disabled={qty <= 0}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-mono font-black text-lg text-orange-600">
                        {qty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="w-8 h-8 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center font-bold active:scale-95 transition-transform shadow-xs cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-orange-400">Calculated Results</span>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">Electrical Load Summary</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black text-orange-400 font-mono">
                    {totalKw} <span className="text-xs text-slate-400 font-sans uppercase">kW</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono font-bold">({totalWatts} Watts)</div>
                </div>
              </div>

              {/* Specification Grid */}
              <div className="space-y-3 text-xs sm:text-sm">
                
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-orange-400" /> Running Current (230V):
                  </span>
                  <span className="font-mono font-black text-white text-base">~{runningAmps} Amps</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Recommended Main MCB:
                  </span>
                  <span className="font-mono font-black text-orange-300">{mcbRating}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Cable className="w-4 h-4 text-blue-400" /> Main Incoming Wire:
                  </span>
                  <span className="font-mono font-black text-white">{mainWireGauge}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <BatteryCharging className="w-4 h-4 text-purple-400" /> Recommended Inverter:
                  </span>
                  <span className="font-mono font-bold text-slate-200 text-xs text-right max-w-[180px]">
                    {inverterSuggestion}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-red-400" /> Shock Protection RCCB:
                  </span>
                  <span className="font-mono font-bold text-green-400">40A / 63A 30mA</span>
                </div>

              </div>

              {/* Wire Coil Rough Estimates */}
              <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-xs text-orange-200 space-y-2">
                <div className="font-black uppercase tracking-wider flex items-center gap-1.5 text-orange-400">
                  <Info className="w-4 h-4" /> Estimated Wire Coils (Rough):
                </div>
                <div className="grid grid-cols-3 gap-2 font-mono text-[11px] font-bold">
                  <div className="bg-slate-950/70 p-2 rounded-xl text-center border border-slate-800">1.0mm²: ~{roughCoils1mm} Coils</div>
                  <div className="bg-slate-950/70 p-2 rounded-xl text-center border border-slate-800">1.5mm²: ~{roughCoils1_5mm} Coils</div>
                  <div className="bg-slate-950/70 p-2 rounded-xl text-center border border-slate-800">2.5mm²: ~{roughCoils2_5mm} Coils</div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-green-600/30 transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Load to Dinesh on WhatsApp</span>
                </a>

                <a
                  href={getCallUrl()}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Direct Call: 7240259078</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
