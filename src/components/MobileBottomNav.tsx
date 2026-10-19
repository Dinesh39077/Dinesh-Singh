import React from 'react';
import { Home, Zap, Calculator, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

interface MobileBottomNavProps {
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 px-3 py-2 shadow-2xl shadow-black pb-safe">
      <div className="grid grid-cols-5 items-center gap-1.5 max-w-md mx-auto">
        
        {/* 1. Home */}
        <a
          href="#home"
          className={`flex flex-col items-center justify-center py-1 rounded-xl text-[9px] font-black uppercase tracking-wider transition-colors ${
            activeSection === 'home'
              ? 'text-orange-500 font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </a>

        {/* 2. Services */}
        <a
          href="#services"
          className={`flex flex-col items-center justify-center py-1 rounded-xl text-[9px] font-black uppercase tracking-wider transition-colors ${
            activeSection === 'services'
              ? 'text-orange-500 font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4 mb-0.5" />
          <span>Services</span>
        </a>

        {/* 3. Calculator */}
        <a
          href="#calculator"
          className={`flex flex-col items-center justify-center py-1 rounded-xl text-[9px] font-black uppercase tracking-wider transition-colors ${
            activeSection === 'calculator'
              ? 'text-orange-500 font-black'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Calculator className="w-4 h-4 mb-0.5" />
          <span>Calc</span>
        </a>

        {/* 4. WhatsApp (Large & easy to tap) */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-green-600 active:bg-green-700 text-white font-black text-[9px] uppercase tracking-wider shadow-lg shadow-green-600/30 transition-transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>Chat</span>
        </a>

        {/* 5. Call (Large & easy to tap) */}
        <a
          href={getCallUrl()}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-orange-500 active:bg-orange-600 text-white font-black text-[9px] uppercase tracking-wider shadow-lg shadow-orange-500/30 transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call</span>
        </a>

      </div>
    </div>
  );
};
