import React from 'react';
import { 
  Zap, 
  Home, 
  Wrench, 
  ShieldCheck, 
  Lightbulb, 
  Sliders, 
  Building, 
  Store, 
  CheckCircle2, 
  Phone,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

export const AboutSection: React.FC = () => {
  const focusAreas = [
    { title: 'House Wiring', desc: 'Concealed PVC pipe laying, copper wire pulling & room circuit planning', icon: Home },
    { title: 'Electrical Installation', desc: 'Main switches, power panels, changeovers, and electrical appliances', icon: Zap },
    { title: 'Electrical Repair', desc: 'Fault finding, burnt wire replacement, short circuit troubleshooting', icon: Wrench },
    { title: 'DB/MCB Installation', desc: 'Distribution board dressing, MCB & RCCB shock protection setups', icon: ShieldCheck },
    { title: 'Earthing', desc: 'GI/Copper plate earthing, pipe earthing and chemical grounding pits', icon: ShieldCheck },
    { title: 'Fan & Light Installation', desc: 'Ceiling fans, LED profile lights, chandeliers, and panel fittings', icon: Lightbulb },
    { title: 'Switch & Socket Installation', desc: 'Modular switchboards, heavy 16A/25A power points, and dimmers', icon: Sliders },
    { title: 'Residential Electrical Work', desc: 'Independent houses, villas, and residential renovation wiring', icon: Building },
    { title: 'Shop & Office Wiring', desc: 'Commercial electrical layouts, display lighting, and UPS lines', icon: Store },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-black uppercase tracking-widest text-orange-600">
            <Zap className="w-3.5 h-3.5" />
            <span>Professional Electrical Contractor</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            About {BUSINESS_INFO.name}
          </h2>
          {/* Exact required quotation */}
          <blockquote className="p-6 rounded-2xl bg-white border-l-4 border-orange-600 text-slate-800 text-base sm:text-lg font-bold leading-relaxed italic shadow-sm border border-slate-200/70">
            “Dinesh Singh Raghav provides professional electrical and house wiring services in Panchudala, Telagav, Kotputli-Behror, Paota and nearby areas of Rajasthan.”
          </blockquote>
        </div>

        {/* Focus Areas Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
              Core Service Focus
            </h3>
            <span className="text-[11px] font-black uppercase tracking-widest text-orange-600">Panchudala & Surrounding Regions</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white hover:bg-orange-50/40 border border-slate-200/80 hover:border-orange-300 transition-all shadow-sm group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-black uppercase tracking-tight text-slate-900 text-base group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Principles Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Need Electrical or House Wiring Work Done?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Get in touch directly with Dinesh Singh Raghav for transparent discussion, site inspection, and accurate requirements.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={getCallUrl()}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-orange-600 font-black text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call 7240259078</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
