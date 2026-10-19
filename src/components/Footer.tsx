import React, { useState } from 'react';
import { 
  Zap, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  ArrowUp, 
  Heart,
  FileText,
  Shield,
  Download,
  FileArchive
} from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';
import { PrivacyModal, TermsModal } from './LegalModals';

interface FooterProps {
  onOpenZipModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenZipModal }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-24 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Footer Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Brand Column (Col 1-5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black shadow-lg shadow-orange-600/30">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-1.5">
                    <span>⚡ {BUSINESS_INFO.name}</span>
                  </h3>
                  <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                    {BUSINESS_INFO.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md font-medium">
                Reliable, safe, and code-compliant electrical and house wiring services for residential homes, villas, shops, and offices across Rajasthan.
              </p>

              {/* Exact Location & Phone Highlights */}
              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span className="font-medium">📍 {BUSINESS_INFO.locality}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>📞 <a href={getCallUrl()} className="hover:text-orange-400 font-mono font-black">{BUSINESS_INFO.phone}</a></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span>💬 WhatsApp: <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 font-mono font-black">{BUSINESS_INFO.whatsapp}</a></span>
                </div>
              </div>
            </div>

            {/* Quick Links Column (Col 6-8) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                <li>
                  <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#house-wiring" className="hover:text-orange-400 transition-colors">House Wiring Process</a>
                </li>
                <li>
                  <a href="#wiring-diagrams" className="hover:text-orange-400 transition-colors">Wiring Diagrams</a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-orange-400 transition-colors">Electrical Load Calculator</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-400 transition-colors">All Services</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-orange-400 transition-colors">Work Projects</a>
                </li>
                <li>
                  <a href="#safety-guide" className="hover:text-orange-400 transition-colors">Electrical Safety Guide</a>
                </li>
                <li>
                  <a href="#service-area" className="hover:text-orange-400 transition-colors">Service Areas</a>
                </li>
              </ul>
            </div>

            {/* Footer Actions & Contact (Col 9-12) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Quick Action Buttons
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Connect directly with Dinesh Singh Raghav for pricing, wiring estimates, or immediate repair visit.
              </p>

              {/* Footer CTA buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <a
                  href={getCallUrl()}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-orange-600 font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now ({BUSINESS_INFO.phone})</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp ({BUSINESS_INFO.whatsapp})</span>
                </a>

                {onOpenZipModal && (
                  <button
                    onClick={onOpenZipModal}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-600/25 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Project ZIP & Manuals</span>
                  </button>
                )}

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider border border-slate-800 transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-orange-400" />
                  <span>Get Service / Inquiry</span>
                </a>
              </div>
            </div>

          </div>

          {/* Legal & Policy Links Row */}
          <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-400">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-orange-400 transition-colors flex items-center gap-1 cursor-pointer font-bold uppercase tracking-wider text-[11px]"
              >
                <Shield className="w-3.5 h-3.5 text-slate-500" />
                <span>Privacy Policy</span>
              </button>
              <button
                onClick={() => setTermsOpen(true)}
                className="hover:text-orange-400 transition-colors flex items-center gap-1 cursor-pointer font-bold uppercase tracking-wider text-[11px]"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>Terms & Conditions</span>
              </button>
              <a
                href="#safety-guide"
                className="hover:text-orange-400 transition-colors flex items-center gap-1 font-bold uppercase tracking-wider text-[11px]"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Electrical Safety</span>
              </a>
              {onOpenZipModal && (
                <button
                  onClick={onOpenZipModal}
                  className="hover:text-orange-400 text-orange-400 transition-colors flex items-center gap-1 cursor-pointer font-black uppercase tracking-wider text-[11px]"
                >
                  <FileArchive className="w-3.5 h-3.5 text-orange-400" />
                  <span>Download .ZIP</span>
                </button>
              )}
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 px-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 flex items-center gap-1.5 cursor-pointer text-xs font-black uppercase tracking-wider"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copyright Section (exact text required) */}
          <div className="pt-4 border-t border-slate-900 text-center text-xs text-slate-500 font-bold uppercase tracking-wider">
            © 2026 {BUSINESS_INFO.name}. All Rights Reserved.
          </div>

        </div>
      </footer>

      {/* Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
};

