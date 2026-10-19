import React, { useState } from 'react';
import { 
  Zap, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Lightbulb, 
  BatteryCharging, 
  Sliders, 
  Info,
  Phone,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

export const WiringDiagramsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'db' | 'staircase' | 'inverter' | 'earthing' | 'threephase'>('db');

  return (
    <section id="wiring-diagrams" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-black uppercase tracking-widest text-orange-600">
            <Layers className="w-3.5 h-3.5" />
            <span>Standard Circuit Schematics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Interactive Electrical Wiring Diagrams
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Clear visual wiring layouts following Indian electricity standards (IS 732) implemented by <strong className="text-slate-900">{BUSINESS_INFO.name}</strong>.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveTab('db')}
            className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === 'db'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Main DB & RCCB Layout</span>
          </button>

          <button
            onClick={() => setActiveTab('staircase')}
            className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === 'staircase'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Staircase 2-Way Switch</span>
          </button>

          <button
            onClick={() => setActiveTab('inverter')}
            className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === 'inverter'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            <BatteryCharging className="w-4 h-4" />
            <span>Inverter & Bypass Circuit</span>
          </button>

          <button
            onClick={() => setActiveTab('earthing')}
            className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === 'earthing'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>GI / Plate Earthing Pit</span>
          </button>

          <button
            onClick={() => setActiveTab('threephase')}
            className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === 'threephase'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>1-Phase vs 3-Phase Setup</span>
          </button>
        </div>

        {/* Diagram Display Area */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          {/* TAB 1: Main Distribution Board (DB) Layout */}
          {activeTab === 'db' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-orange-600" />
                    Standard Home Distribution Board (DB) & RCCB Wiring Diagram
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Sequence: Energy Meter ➔ Main Double Pole Isolator ➔ 30mA RCCB ➔ MCB Banks ➔ Room Circuits
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase tracking-wider border border-red-200 w-fit">
                  Shock & Overload Protected
                </span>
              </div>

              {/* Visual Flow Representation */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
                
                {/* Circuit Line Flow */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  
                  {/* Energy Meter */}
                  <div className="p-5 rounded-2xl bg-white border-2 border-dashed border-slate-300 relative shadow-xs">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">DISCOM FEED</div>
                    <div className="text-sm font-black uppercase tracking-tight text-slate-900 mt-1">Energy Meter</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">230V AC Single Phase</div>
                    <div className="mt-3 flex justify-center gap-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-red-100 text-red-700 font-bold">Phase (L)</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-200 text-slate-700 font-bold">Neutral (N)</span>
                    </div>
                  </div>

                  {/* Main DP Isolator */}
                  <div className="p-5 rounded-2xl bg-white border-2 border-orange-200 relative shadow-xs">
                    <div className="text-[10px] font-black uppercase tracking-wider text-orange-600 font-mono">MAIN SWITCH</div>
                    <div className="text-sm font-black uppercase tracking-tight text-slate-900 mt-1">DP Isolator (40A/63A)</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">Manual Master Cutoff</div>
                    <div className="mt-3 text-[10px] text-green-700 font-bold uppercase">Isolates Phase & Neutral</div>
                  </div>

                  {/* RCCB / ELCB */}
                  <div className="p-5 rounded-2xl bg-white border-2 border-green-400 shadow-sm relative">
                    <div className="text-[10px] font-black uppercase tracking-wider text-green-700 font-mono">SHOCK PROTECTION</div>
                    <div className="text-sm font-black uppercase tracking-tight text-slate-900 mt-1">RCCB 30mA (40A)</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">Earth Leakage Detection</div>
                    <div className="mt-3 text-[10px] text-slate-600 font-bold">Trips &lt; 30ms on shock</div>
                  </div>

                  {/* Neutral & Earth Busbars */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-600 font-mono">BUSBARS</div>
                    <div className="text-sm font-black uppercase tracking-tight text-slate-900 mt-1">Neutral & Earth Links</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">Solid Copper Busbars</div>
                    <div className="mt-3 flex justify-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700 font-bold">N-Bar</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-green-100 text-green-700 font-bold">Earth-Bar</span>
                    </div>
                  </div>

                </div>

                {/* Sub-Circuit MCB Distribution */}
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-600 mb-3">
                    Circuit Breakers (MCB) Sub-Feeds:
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 font-mono font-black text-xs flex items-center justify-center shrink-0 border border-orange-100">
                        C6
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-tight text-slate-900">Lighting Circuits (6A / 10A)</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">Rooms & Lobby LEDs (1.0 sq mm)</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 font-mono font-black text-xs flex items-center justify-center shrink-0 border border-orange-100">
                        C16
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-tight text-slate-900">Power Sockets (16A)</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">Kitchen Mixer, Fridge (2.5 sq mm)</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 font-mono font-black text-xs flex items-center justify-center shrink-0 border border-orange-100">
                        C20
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-tight text-slate-900">Geyser & Pump (20A)</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">Bathroom Geysers & Motor (4.0 sq mm)</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 font-mono font-black text-xs flex items-center justify-center shrink-0 border border-orange-100">
                        C25
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-tight text-slate-900">Air Conditioner (25A)</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">1.5T / 2.0T Split AC (4.0 sq mm)</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-900 flex items-center gap-3 font-medium">
                <Info className="w-5 h-5 text-orange-600 shrink-0" />
                <span>
                  <strong className="text-orange-700">Specialist Note by Dinesh Singh Raghav:</strong> We ensure individual neutral return for each high-load circuit to eliminate neutral burning and mysterious RCCB nuisance trips.
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: Staircase 2-Way Switch */}
          {activeTab === 'staircase' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
                    <Sliders className="w-6 h-6 text-orange-600" />
                    Staircase 2-Way Switching Circuit Diagram
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Control the staircase or corridor light bulb independently from the Ground Floor and 1st Floor.
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider border border-blue-200 w-fit">
                  Convenience & Energy Saving
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  
                  {/* Switch 1: Ground Floor */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                      GROUND FLOOR
                    </span>
                    <h4 className="font-black uppercase tracking-tight text-slate-900 text-base">2-Way Switch 1 (SPDT)</h4>
                    <div className="space-y-2 text-xs text-slate-600 font-medium">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">Top Terminal ➔ Strapping Wire 1</div>
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 font-bold">Center Pole ➔ Incoming Phase (Live)</div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">Bottom Terminal ➔ Strapping Wire 2</div>
                    </div>
                  </div>

                  {/* Center: Light Bulb */}
                  <div className="p-6 rounded-2xl bg-orange-50 border-2 border-dashed border-orange-300 text-center space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center mx-auto shadow-md shadow-orange-600/30">
                      <Lightbulb className="w-8 h-8 fill-white" />
                    </div>
                    <h4 className="font-black uppercase tracking-tight text-slate-900 text-base">Staircase Light Lamp</h4>
                    <p className="text-xs text-slate-600 font-medium">
                      Direct Neutral from DB + Switch Half-Wire from Switch 2 Center Pole
                    </p>
                  </div>

                  {/* Switch 2: 1st Floor */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                      FIRST FLOOR
                    </span>
                    <h4 className="font-black uppercase tracking-tight text-slate-900 text-base">2-Way Switch 2 (SPDT)</h4>
                    <div className="space-y-2 text-xs text-slate-600 font-medium">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">Top Terminal ➔ Strapping Wire 1</div>
                      <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 font-bold">Center Pole ➔ Lamp Phase Wire</div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">Bottom Terminal ➔ Strapping Wire 2</div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 text-center font-medium">
                  💡 <strong>Operation:</strong> When both switches are in the same state (up-up or down-down), the circuit completes and the light turns ON. When either switch is toggled, the circuit breaks and turns OFF.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Inverter & Bypass Circuit */}
          {activeTab === 'inverter' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
                    <BatteryCharging className="w-6 h-6 text-green-600" />
                    Home Inverter & Manual Bypass Switch Diagram
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Dual circuit distribution with zero-downtime bypass switch during inverter maintenance.
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-black uppercase tracking-wider border border-green-200 w-fit">
                  Continuous Power Backup
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-black uppercase text-orange-600 mb-1">Mains Input (EB Grid)</div>
                    <div className="text-xs text-slate-600 space-y-1 font-medium">
                      <div>Raw Power from DB</div>
                      <div className="font-bold text-slate-900">16A Inverter Power Socket</div>
                      <div className="text-[11px] text-slate-500">Charges Battery & Powers internal relay</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border-2 border-green-500 shadow-xs">
                    <div className="text-xs font-black uppercase text-green-700 mb-1">Inverter / UPS Unit</div>
                    <div className="text-xs text-slate-600 space-y-1 font-medium">
                      <div>12V / 24V Tubular Battery</div>
                      <div className="font-bold text-slate-900">Single Inverter Phase Output</div>
                      <div className="text-[11px] text-slate-500">Runs through dedicated White/Blue wire</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs font-black uppercase text-blue-700 mb-1">Bypass Rotary Switch</div>
                    <div className="text-xs text-slate-600 space-y-1 font-medium">
                      <div>Position 1: Inverter Backup Mode</div>
                      <div>Position 2: Direct Grid Bypass Mode</div>
                      <div className="text-[11px] text-slate-500">No home blackout if inverter faults!</div>
                    </div>
                  </div>

                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 font-medium">
                  <div className="font-black uppercase tracking-tight text-slate-900 mb-1.5">Room Switchboard Point Isolation:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    <li><strong className="text-slate-900">Inverter Circuit:</strong> Connects ceiling fans, room tube lights, TV socket, and mobile chargers.</li>
                    <li><strong className="text-slate-900">Direct Mains Circuit:</strong> AC, Geyser, Refrigerator, and heavy kitchen appliances bypass the inverter completely.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Earthing Pit */}
          {activeTab === 'earthing' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-green-600" />
                    Standard Plate & Pipe Earthing Pit Construction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Low resistance soil grounding pit for zero-shock home safety.
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-black uppercase tracking-wider border border-green-200 w-fit">
                  Shock Prevention
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-black uppercase tracking-wider text-green-700 text-xs sm:text-sm">
                    Earthing Pit Layers (6 to 8 Feet Deep):
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between font-medium text-slate-700">
                      <span>Inspection Chamber with Concrete Cover</span>
                      <span className="text-slate-500 font-mono font-bold">Top Ground</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between font-medium text-slate-700">
                      <span>GI Funnel with Wire Mesh for watering</span>
                      <span className="text-slate-500 font-mono font-bold">1 Ft Depth</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between font-medium text-slate-700">
                      <span>Wood Charcoal & Crystal Salt Layers</span>
                      <span className="text-slate-500 font-mono font-bold">Moisture</span>
                    </div>
                    <div className="p-3 rounded-xl bg-green-50 border border-green-300 flex items-center justify-between font-bold text-green-900">
                      <span>GI / Copper Plate (600x600x3mm)</span>
                      <span className="text-green-700 font-mono">6-8 Ft Depth</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-black uppercase tracking-wider text-orange-700 text-xs sm:text-sm">
                    Why Proper Earthing is Critical:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    <li className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>Prevents current leakage shocks from metallic bodies of water coolers, geysers, and irons.</span>
                    </li>
                    <li className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>Allows the 30mA RCCB to instantly detect earth fault and trip the power before danger occurs.</span>
                    </li>
                    <li className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>Protects smart TVs, LED lights, and inverter motherboards from lightning surges.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: 1-Phase vs 3-Phase */}
          {activeTab === 'threephase' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-orange-600" />
                    Single Phase (230V) vs Three Phase (415V) Residential Setup
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Choosing the right connection based on your sanctioned load and appliance requirements.
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-black uppercase tracking-wider border border-orange-200 w-fit">
                  Load Capacity Planning
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Single Phase Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black uppercase tracking-tight text-slate-900 text-lg">Single Phase (1-Phase 230V)</h4>
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-800 font-mono font-bold">1 kW – 5 kW</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Standard supply for small to medium residential houses, 1BHK, 2BHK flats, or houses with up to two ACs.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside font-medium">
                    <li>2-Core Service Cable (1 Live Phase + 1 Neutral)</li>
                    <li>2-Pole Main Isolator & 2-Pole RCCB in DB</li>
                    <li>Simple wiring without phase rotation issues</li>
                  </ul>
                </div>

                {/* Three Phase Card */}
                <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black uppercase tracking-tight text-orange-700 text-lg">Three Phase (3-Phase 415V)</h4>
                    <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-mono font-black">5 kW – 25 kW+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Recommended for multi-story houses, kothis, large villas with 3+ ACs, 3-Phase agricultural pumps, and commercial shops.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside font-medium">
                    <li>4-Core Armoured Service Cable (R, Y, B Phases + Neutral)</li>
                    <li>4-Pole Main Isolator, 4-Pole RCCB & Rotary Changeovers</li>
                    <li>Equal load division across floors to prevent neutral melting</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Quick CTA inside Diagram area */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 font-bold text-center sm:text-left uppercase tracking-tight">
              Need custom wiring planning or execution for your site in <span className="text-orange-600">Panchudala, Kotputli, Paota</span>?
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={getCallUrl()}
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-black uppercase text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                Call 7240259078
              </a>
              <a
                href={getWhatsAppUrl("Hello Dinesh Singh Raghav, mujhe wiring diagram aur quotation ke baare mein baat karni hai.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white font-black uppercase text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-green-600/20"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Discussion
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
