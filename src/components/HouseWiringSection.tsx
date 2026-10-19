import React, { useState } from 'react';
import { 
  Home, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Check, 
  AlertCircle, 
  Info,
  Phone,
  MessageCircle,
  Zap,
  Cable
} from 'lucide-react';
import { WIRE_SIZE_GUIDE, getCallUrl, getWhatsAppUrl, BUSINESS_INFO } from '../data/businessData';

export const HouseWiringSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Conduit & Pipe Laying',
      subtitle: 'Slab (Lanter) & Wall Grooving',
      description: 'Laying heavy-duty PVC conduit pipes in roof slab before concrete pouring and wall groove chasing using wall chaser machine for clean concealing.',
      points: [
        'Fan box with safety hook and deep junction box placement',
        'Drop pipes at designated switchboard locations on all walls',
        'Proper bend fittings with solvent cement to prevent pipe blockages',
        'Chipping and plaster leveling for seamless interior finish'
      ]
    },
    {
      step: '02',
      title: 'Modular Box Installation',
      subtitle: 'GI Concealed Boxes with Water Leveling',
      description: 'Embedding galvanized iron (GI) metal concealed boxes at standard heights with spirit level accuracy.',
      points: [
        'Switchboards installed at 48 inches (4 feet) from finished floor',
        'Bedside switchboards installed at 28-30 inches for comfortable access',
        'Kitchen counter power points at 42 inches above platform',
        'Secure cement mortar packing around boxes to avoid loosening'
      ]
    },
    {
      step: '03',
      title: 'Wire Pulling & Color Coding',
      subtitle: 'ISI Mark Multi-Strand Copper Wires',
      description: 'Drawing multi-strand flame retardant (FR/FRLS) copper wires through conduits using steel fish tape / nylon draw wire.',
      points: [
        'Red/Yellow/Blue for Phase (R-Y-B)',
        'Black for dedicated Neutral per circuit',
        'Green wire for Earth grounding on every 3-pin socket',
        'White or Blue wire dedicated for Inverter backup points'
      ]
    },
    {
      step: '04',
      title: 'DB Dressing & MCB / RCCB',
      subtitle: 'Distribution Board Organization',
      description: 'Systematic connection of the incoming mains, Isolator, 30mA RCCB, and individual circuit MCBs in the distribution board.',
      points: [
        'Neat bunching with nylon cable ties and numeric circuit ferrule numbering',
        'Phase load balancing to avoid neutral overload and MCB tripping',
        'High-conductivity neutral and earth copper busbars',
        'Individual MCBs for AC, Geyser, Kitchen, and room lighting'
      ]
    },
    {
      step: '05',
      title: 'Testing & Plate Fitting',
      subtitle: 'Earthing Continuity & Final Commissioning',
      description: 'Verification of earth continuity, load test on high-power sockets, and clean installation of decorative modular plates.',
      points: [
        'Earthing resistance test to confirm zero voltage on appliance bodies',
        'RCCB test button check for instantaneous earth trip safety',
        'Installation of switches, sockets, fan regulators, and indicators',
        'Final hand-over with complete circuit identification guide'
      ]
    }
  ];

  return (
    <section id="house-wiring" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-black uppercase tracking-widest text-orange-600">
            <Home className="w-3.5 h-3.5" />
            <span>Complete House Wiring Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Professional House Wiring Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Planning a new house in Panchudala, Telagav, Kotputli-Behror, or Paota? Here is how <strong className="text-slate-900">{BUSINESS_INFO.name}</strong> executes safe, durable, and standard electrical wiring.
          </p>
        </div>

        {/* 5-Step House Wiring Process Navigation */}
        <div className="grid lg:grid-cols-12 gap-6 items-start mb-16">
          {/* Stage Selector Column */}
          <div className="lg:col-span-4 space-y-2">
            {stages.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setSelectedStage(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border cursor-pointer ${
                  selectedStage === idx
                    ? 'bg-orange-500 text-white border-orange-600 shadow-lg shadow-orange-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-8 h-8 rounded-xl font-mono font-black text-xs flex items-center justify-center ${
                    selectedStage === idx
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 shadow-xs'
                  }`}>
                    {stage.step}
                  </span>
                  <div>
                    <div className={`font-black uppercase tracking-tight text-xs sm:text-sm ${selectedStage === idx ? 'text-white' : 'text-slate-900'}`}>{stage.title}</div>
                    <div className={`text-[11px] font-bold ${selectedStage === idx ? 'text-orange-100' : 'text-slate-500'}`}>{stage.subtitle}</div>
                  </div>
                </div>
                {selectedStage === idx && <Zap className="w-4 h-4 text-white shrink-0 fill-white" />}
              </button>
            ))}
          </div>

          {/* Active Stage Details Card */}
          <div className="lg:col-span-8 p-7 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-mono text-[10px] font-black uppercase tracking-wider">
                STAGE {stages[selectedStage].step}
              </span>
              <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white">
                {stages[selectedStage].title} – <span className="text-orange-400 font-bold">{stages[selectedStage].subtitle}</span>
              </h3>
            </div>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              {stages[selectedStage].description}
            </p>

            <div className="mt-6 space-y-3">
              <h4 className="text-[11px] uppercase tracking-widest font-black text-orange-400">
                Key Technical Execution Standards:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {stages[selectedStage].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                    <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-300">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>Strict adherence to Indian Electrical Safety Code</span>
              </div>
              <a
                href={getWhatsAppUrl(`Hello Dinesh Singh Raghav, mujhe ${stages[selectedStage].title} ke baare mein quotation chahiye.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-black uppercase tracking-wider transition-colors shadow-md shadow-green-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Wire Gauge Guide Table */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
                <Cable className="w-6 h-6 text-orange-600" />
                Standard Wire Gauge (sq mm) Selection Chart
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Correct wire gauge calculation prevents wire heating, short circuits, and high electricity bills.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold">
              <Info className="w-3.5 h-3.5 text-orange-600" /> 230V / 415V Indian Standard
            </span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 border-b border-slate-200 text-xs font-black uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-5 text-orange-600">Wire Size (Gauge)</th>
                  <th className="py-4 px-5">Load Rating</th>
                  <th className="py-4 px-5">Current Capacity</th>
                  <th className="py-4 px-5">Recommended Application</th>
                  <th className="py-4 px-5">Color Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {WIRE_SIZE_GUIDE.map((wire, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-5 font-mono font-black text-slate-900 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-200 font-bold">
                        {wire.gauge}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-bold text-slate-800 whitespace-nowrap">{wire.rating}</td>
                    <td className="py-3.5 px-5 font-mono font-bold text-green-600 whitespace-nowrap">{wire.currentCapacity}</td>
                    <td className="py-3.5 px-5 text-slate-600 font-medium">{wire.recommendedUse}</td>
                    <td className="py-3.5 px-5 text-slate-500 font-mono text-xs font-semibold whitespace-nowrap">{wire.colorCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
