import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Zap, ShieldCheck, Download } from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

interface HeaderProps {
  activeSection: string;
  onOpenZipModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenZipModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'House Wiring', href: '#house-wiring' },
    { name: 'Wiring Diagrams', href: '#wiring-diagrams' },
    { name: 'Electrical Calculator', href: '#calculator' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Safety Guide', href: '#safety-guide' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-2.5' 
        : 'bg-white border-b border-slate-200 py-3.5 shadow-sm'
    }`}>
      {/* Top Banner Notice */}
      <div className="hidden lg:block bg-slate-900 border-b border-slate-800 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-bold">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Serving <strong className="text-white">Panchudala, Telagav, Kotputli-Behror, Paota & Nearby Areas</strong></span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-[11px] uppercase tracking-wider">
            {onOpenZipModal && (
              <button
                onClick={onOpenZipModal}
                className="flex items-center gap-1 text-orange-400 hover:text-orange-300 cursor-pointer font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Project ZIP</span>
              </button>
            )}
            <span className="text-slate-600">•</span>
            <span>Direct Electrician Support: <strong className="text-orange-400 font-mono">7240259078</strong></span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> Safe Wiring & Proper Earthing</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Business Name & Subtitle */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform text-white font-black">
              <Zap className="w-6 h-6 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors uppercase leading-none">
                  ⚡ {BUSINESS_INFO.name}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-orange-100 text-orange-700 border border-orange-200">
                  RAJASTHAN
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-orange-600 mt-1">
                {BUSINESS_INFO.subtitle}
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight transition-all duration-150 ${
                    isActive
                      ? 'text-orange-600 bg-orange-50 border border-orange-200 shadow-sm'
                      : 'text-slate-600 hover:text-orange-600 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Side Buttons: Download ZIP, WhatsApp, Call Now */}
          <div className="hidden sm:flex items-center gap-2">
            {onOpenZipModal && (
              <button
                onClick={onOpenZipModal}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-800 text-xs font-black uppercase tracking-wider transition-all border border-slate-200 cursor-pointer shadow-2xs"
                title="Download ZIP of Source & Guides"
              >
                <Download className="w-3.5 h-3.5 text-orange-600" />
                <span>ZIP Download</span>
              </button>
            )}

            {/* WhatsApp Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs font-black uppercase tracking-wider transition-all hover:scale-105 shadow-md shadow-green-600/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>WhatsApp</span>
            </a>

            {/* Call Now Button */}
            <a
              href={getCallUrl()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-slate-900/20 transition-all hover:scale-105 border border-slate-800"
              title="Call 7240259078"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call</span>
              <span className="font-mono text-orange-300">7240259078</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            {onOpenZipModal && (
              <button
                onClick={onOpenZipModal}
                className="sm:hidden p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 shadow-xs"
                aria-label="Download ZIP"
              >
                <Download className="w-4 h-4 text-orange-600" />
              </button>
            )}
            <a
              href={getCallUrl()}
              className="sm:hidden p-2 rounded-xl bg-orange-600 text-white shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 focus:outline-none border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-tight text-slate-800 bg-slate-50 hover:bg-orange-50 hover:text-orange-600 border border-slate-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {onOpenZipModal && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenZipModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 font-black text-xs uppercase tracking-wider"
            >
              <Download className="w-4 h-4 text-orange-600" />
              <span>Download ZIP Package & Manuals</span>
            </button>
          )}

          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white font-black text-xs uppercase tracking-wider shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={getCallUrl()}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-black text-xs uppercase tracking-wider shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 text-orange-400" />
              Call 7240259078
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

