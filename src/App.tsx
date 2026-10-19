/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HouseWiringSection } from './components/HouseWiringSection';
import { WiringDiagramsSection } from './components/WiringDiagramsSection';
import { ElectricalCalculator } from './components/ElectricalCalculator';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SafetyGuideSection } from './components/SafetyGuideSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { DownloadZipModal } from './components/DownloadZipModal';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from './data/businessData';
import { Phone, MessageCircle, Download } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'house-wiring',
      'wiring-diagrams',
      'calculator',
      'services',
      'projects',
      'safety-guide',
      'service-area',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Sticky Header */}
      <Header 
        activeSection={activeSection} 
        onOpenZipModal={() => setIsZipModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <HouseWiringSection />
        <WiringDiagramsSection />
        <ElectricalCalculator />
        <ServicesSection />
        <ProjectsSection />
        <SafetyGuideSection />
        <ServiceAreaSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenZipModal={() => setIsZipModalOpen(true)} />

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileBottomNav activeSection={activeSection} />

      {/* Floating Action Buttons for Desktop */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        
        {/* Quick Zip Download Button */}
        <button
          onClick={() => setIsZipModalOpen(true)}
          className="p-3.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white shadow-xl shadow-orange-600/30 flex items-center gap-2 group transition-all hover:scale-105 cursor-pointer"
          title="Download Project ZIP"
        >
          <Download className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-black uppercase tracking-wider pl-0 group-hover:pl-1">
            Download ZIP File
          </span>
        </button>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-2xl bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-600/30 flex items-center gap-2 group transition-all hover:scale-105"
          title="Chat on WhatsApp (7240259078)"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-black uppercase tracking-wider pl-0 group-hover:pl-1">
            WhatsApp 7240259078
          </span>
        </a>

        <a
          href={getCallUrl()}
          className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-950/30 flex items-center gap-2 group transition-all hover:scale-105 border border-slate-800"
          title="Call Dinesh Singh Raghav (7240259078)"
        >
          <Phone className="w-5 h-5 text-orange-400" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-black uppercase tracking-wider pl-0 group-hover:pl-1">
            Call 7240259078
          </span>
        </a>
      </div>

      {/* ZIP Download Modal */}
      <DownloadZipModal 
        isOpen={isZipModalOpen} 
        onClose={() => setIsZipModalOpen(false)} 
      />

    </div>
  );
}

