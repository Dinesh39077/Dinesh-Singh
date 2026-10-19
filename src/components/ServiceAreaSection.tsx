import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

export const ServiceAreaSection: React.FC = () => {
  const serviceHubs = [
    {
      name: 'Panchudala',
      role: 'Primary Business Location',
      description: 'Home base for quick emergency breakdown response and residential house wiring contracts.',
      tag: 'Local Hub'
    },
    {
      name: 'Telagav',
      role: 'Core Service Region',
      description: 'Full electrical services, DB box installation, motor wiring, and house wiring solutions.',
      tag: 'Regular Service'
    },
    {
      name: 'Kotputli-Behror',
      role: 'District & Commercial Area',
      description: 'Commercial shop wiring, 3-phase setups, office electrical layouts, and residential projects.',
      tag: 'Commercial & Home'
    },
    {
      name: 'Paota',
      role: 'Key Service Town',
      description: 'House wiring, modular fittings, profile light installations, and earthing setups.',
      tag: 'Active Coverage'
    },
    {
      name: 'Rajasthan (Nearby Rural & Urban Areas)',
      role: 'Surrounding Coverage',
      description: 'Electrical and wiring services for surrounding villages and connected localities.',
      tag: 'Extended Reach'
    },
  ];

  return (
    <section id="service-area" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-black uppercase tracking-widest text-orange-600">
            <MapPin className="w-3.5 h-3.5" />
            <span>Service Coverage Locations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Our Service Area
          </h2>
          {/* Exact required quotation */}
          <p className="text-slate-700 text-base sm:text-lg font-bold max-w-2xl mx-auto leading-relaxed">
            “{BUSINESS_INFO.areasText}”
          </p>
        </div>

        {/* 5 Service Area Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {serviceHubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 transition-all duration-200 space-y-3 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
                    <span className="text-orange-600">📍</span> {hub.name}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {hub.tag}
                  </span>
                </div>
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider">{hub.role}</div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-green-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Direct Service
                </span>
                <a
                  href={getWhatsAppUrl(`Hello Dinesh Singh Raghav, kya aap ${hub.name} mein electrical work ke liye available hain?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-black uppercase tracking-wider text-[11px]"
                >
                  Inquire Now →
                </a>
              </div>
            </div>
          ))}

          {/* Area Confirmation Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-black uppercase tracking-tight text-base">
                <Navigation className="w-5 h-5" />
                <span>Nearby Village or Custom Location?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                If your site is in a nearby village or location around Paota or Kotputli-Behror, connect directly with <strong className="text-white">Dinesh Singh Raghav</strong> to confirm service availability.
              </p>
            </div>
            <a
              href={getCallUrl()}
              className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-slate-100 text-orange-600 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call 7240259078 to Check</span>
            </a>
          </div>
        </div>

        {/* Reassurance Banner */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-600 font-bold uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center gap-2 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
          <span>Electrical & House Wiring Services available in Panchudala, Telagav, Kotputli-Behror, Paota and nearby areas.</span>
        </div>

      </div>
    </section>
  );
};
