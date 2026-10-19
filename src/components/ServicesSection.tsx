import React, { useState } from 'react';
import { 
  Home, 
  ShieldAlert, 
  Zap, 
  BatteryCharging, 
  Lightbulb, 
  Sliders, 
  Wrench, 
  Building, 
  Store, 
  Check, 
  Phone, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem, getCallUrl, getWhatsAppUrl, BUSINESS_INFO } from '../data/businessData';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return Home;
      case 'ShieldAlert': return ShieldAlert;
      case 'Zap': return Zap;
      case 'BatteryCharging': return BatteryCharging;
      case 'Lightbulb': return Lightbulb;
      case 'Sliders': return Sliders;
      case 'Wrench': return Wrench;
      case 'Building': return Building;
      case 'Store': return Store;
      default: return Zap;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-black uppercase tracking-widest text-orange-600">
            <Zap className="w-3.5 h-3.5" />
            <span>Comprehensive Electrical Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Professional Electrical & Wiring Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Reliable on-site electrical services by <strong className="text-slate-900">{BUSINESS_INFO.name}</strong> across Panchudala, Telagav, Kotputli-Behror, Paota and nearby areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => {
            const IconComp = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-4">
                  
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3.5 rounded-2xl bg-orange-50 group-hover:bg-orange-600 text-orange-600 group-hover:text-white transition-colors border border-orange-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {service.idealFor.split(',')[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-orange-600 font-bold mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Features */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={getWhatsAppUrl(`Hello Dinesh Singh Raghav, mujhe ${service.title} service ke baare mein quotation chahiye.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-green-700 hover:text-green-800 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href={getCallUrl()}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-orange-500 text-slate-700 hover:text-white transition-colors"
                    title={`Call for ${service.title}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Consultation Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center space-y-4 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
            Have a Specific Electrical Project or Immediate Fault?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            From complete house wiring contracts to fixing tripping MCBs or fan fittings, call <strong className="text-white">Dinesh Singh Raghav</strong> directly for prompt service.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={getCallUrl()}
              className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-orange-600 font-black text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 7240259078</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
