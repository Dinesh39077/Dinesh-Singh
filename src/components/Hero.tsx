import React from 'react';
import { Phone, MessageCircle, Zap, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

interface HeroProps {
  onOpenBookingModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white pt-10 pb-14 lg:py-16 border-b border-orange-700/50 shadow-inner">
      {/* Background Decorative Graphic Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-sm border border-white/30">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span>📍 Panchudala, Telagav, Kotputli-Behror, Paota, Rajasthan</span>
            </div>

            {/* Main Heading with Bold Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] drop-shadow-sm">
              Professional Electrician &<br className="hidden sm:inline" /> House Wiring Services
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-orange-50 font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="text-white underline decoration-white/40 underline-offset-4">{BUSINESS_INFO.name}</span> – Safe, Reliable & Professional Electrical Solutions
            </p>

            {/* Trust Bullet Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 pb-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-xs font-bold uppercase tracking-tight text-white">Safe House Wiring</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-xs font-bold uppercase tracking-tight text-white">Proper Earthing</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-xs font-bold uppercase tracking-tight text-white">DB & RCCB Setup</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-xs font-bold uppercase tracking-tight text-white">Inverter Connection</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-xs font-bold uppercase tracking-tight text-white">Modular Switches</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-xs font-bold uppercase tracking-tight text-white">Shop & Office</span>
              </div>
            </div>

            {/* Action Buttons as requested */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              
              {/* Button 1: Call 7240259078 */}
              <a
                href={getCallUrl()}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-orange-600 font-black text-sm uppercase shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>📞 CALL {BUSINESS_INFO.phone}</span>
              </a>

              {/* Button 2: WhatsApp Now */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-sm uppercase shadow-2xl transition-all hover:scale-[1.02] active:scale-95 border border-slate-800"
              >
                <MessageCircle className="w-4 h-4 text-green-400 fill-green-400/20" />
                <span>💬 WHATSAPP NOW</span>
              </a>

              {/* Button 3: View House Wiring Services */}
              <a
                href="#house-wiring"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-black text-sm uppercase transition-all backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 text-white" />
                <span>⚡ VIEW SERVICES</span>
              </a>

            </div>

            {/* Direct Contact reassurance banner */}
            <div className="pt-2 text-xs text-orange-100 font-bold flex items-center justify-center lg:justify-start gap-2 uppercase tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
              <span>Direct Communication with <strong>Dinesh Singh Raghav</strong> — Transparent & Reliable</span>
            </div>

          </div>

          {/* Quick Inquiry / Service Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900 text-white p-7 sm:p-8 border border-slate-800 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-600 text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-tight text-white text-base">Direct Specialist Card</h3>
                    <p className="text-[11px] text-orange-400 font-bold uppercase tracking-wider">Panchudala, Paota & Kotputli Area</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-widest border border-orange-500/30">
                  AVAILABLE NOW
                </span>
              </div>

              {/* Quick Details Grid */}
              <div className="py-5 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2.5 px-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Owner & Specialist:</span>
                  <span className="font-black text-white text-sm">{BUSINESS_INFO.name}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Direct Mobile:</span>
                  <a href={getCallUrl()} className="font-mono font-black text-orange-400 hover:text-orange-300 text-sm">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="flex justify-between items-center py-2.5 px-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">WhatsApp:</span>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="font-mono font-black text-green-400 hover:text-green-300 text-sm">
                    {BUSINESS_INFO.whatsapp}
                  </a>
                </div>
                <div className="flex flex-col py-2.5 px-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 gap-1">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Coverage Locality:</span>
                  <span className="font-semibold text-slate-200 text-xs leading-relaxed">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>

              {/* Quick Actions Footer inside Card */}
              <div className="pt-1 grid grid-cols-2 gap-2.5">
                <a
                  href="#calculator"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-orange-400 text-xs font-black uppercase tracking-wider border border-slate-700 transition-colors"
                >
                  <span>🧮 Load Calc</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-black uppercase tracking-wider transition-colors shadow-lg shadow-orange-600/20"
                >
                  <span>📋 Get Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
