import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  Flame, 
  Phone, 
  MessageCircle,
  Eye
} from 'lucide-react';
import { SAFETY_TIPS, BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

export const SafetyGuideSection: React.FC = () => {
  const [lang, setLang] = useState<'both' | 'hi' | 'en'>('both');

  const additionalRules = [
    {
      ruleEn: 'Never use thin iron / copper wire jumpers inside burnt ceramic fuses.',
      ruleHi: 'जले हुए फ्यूज में कभी भी मोटा या लोहे का तार न लपेटें; उचित रेटिंग की MCB ही लगाएं।',
      type: 'critical'
    },
    {
      ruleEn: 'Never operate water geysers, coolers, or irons with a 2-pin plug (Always use a 3-pin earthed plug).',
      ruleHi: 'गीजर, कूलर या प्रेस को कभी भी 2-पिन प्लग से न चलाएं, हमेशा अर्थिंग वाले 3-पिन प्लग का ही इस्तेमाल करें।',
      type: 'warning'
    },
    {
      ruleEn: 'Keep main MCB switch OFF when leaving home for prolonged vacations.',
      ruleHi: 'लंबे समय के लिए बाहर जाते समय मुख्य MCB स्विच बंद करके जाएं।',
      type: 'info'
    },
    {
      ruleEn: 'Do not touch switches or appliances with wet hands or bare wet feet.',
      ruleHi: 'गीले हाथों या गीले पैरों से स्विच बोर्ड या उपकरणों को कभी न छुएं।',
      type: 'critical'
    }
  ];

  return (
    <section id="safety-guide" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-black uppercase tracking-widest text-red-600">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Electrical Safety First • सुरक्षा निर्देश</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Home Electrical Safety Guide
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Essential guidelines to protect your family from electric shocks, wire fire hazards, and appliance damage.
          </p>

          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setLang('both')}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                lang === 'both' ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              English + हिंदी
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                lang === 'hi' ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              केवल हिंदी
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                lang === 'en' ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              English Only
            </button>
          </div>
        </div>

        {/* 4 Core Safety Pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {SAFETY_TIPS.map((tip, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 transition-all space-y-4 shadow-sm hover:shadow-md relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-orange-50 text-orange-700 border border-orange-200">
                  {tip.tag}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">Rule 0{idx + 1}</span>
              </div>

              <div className="space-y-2">
                {(lang === 'both' || lang === 'en') && (
                  <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span>{tip.title}</span>
                  </h3>
                )}
                {(lang === 'both' || lang === 'hi') && (
                  <div className="text-orange-600 font-bold text-base">
                    {tip.titleHi}
                  </div>
                )}
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100 font-medium">
                {(lang === 'both' || lang === 'en') && (
                  <p>{tip.desc}</p>
                )}
                {(lang === 'both' || lang === 'hi') && (
                  <p className="text-slate-500 italic">{tip.descHi}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Safety Checklist Grid */}
        <div className="p-7 sm:p-9 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                Critical Safety Precautions & Dos & Don'ts
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                General Indian household precautions recommended by electrician Dinesh Singh Raghav
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {additionalRules.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/60 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0"></span>
                  <div className="font-bold text-xs sm:text-sm text-slate-100">
                    {item.ruleEn}
                  </div>
                </div>
                <div className="text-xs text-slate-400 pl-4 font-normal">
                  {item.ruleHi}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left font-medium">
              Frequent sparks, tripping MCB, or mild current on taps? Call for emergency inspection.
            </div>
            <a
              href={getCallUrl()}
              className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-orange-600 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Electrician 7240259078</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
