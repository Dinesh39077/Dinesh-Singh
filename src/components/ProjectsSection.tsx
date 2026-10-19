import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

interface ProjectItem {
  id: string;
  title: string;
  category: 'house' | 'db' | 'lighting' | 'commercial';
  categoryLabel: string;
  location: string;
  description: string;
  checklist: string[];
}

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'house' | 'db' | 'lighting' | 'commercial'>('all');

  const projects: ProjectItem[] = [
    {
      id: 'p1',
      title: 'Complete 3BHK Concealed House Wiring',
      category: 'house',
      categoryLabel: 'Residential House Wiring',
      location: 'Panchudala, Rajasthan',
      description: 'Full conduit piping in roof slab, wall grooving, wire pulling with dedicated earth line in all rooms, and modular switchboard fittings.',
      checklist: [
        'Heavy 25mm PVC pipes laid prior to slab casting',
        'Flame retardant ISI copper wires (1.0mm², 1.5mm², 2.5mm², 4.0mm²)',
        'Dedicated 16A power points in Kitchen & Bathrooms'
      ]
    },
    {
      id: 'p2',
      title: 'Distribution Board (DB) & 30mA RCCB Shock Protection',
      category: 'db',
      categoryLabel: 'DB & Safety Breakers',
      location: 'Telagav, Rajasthan',
      description: '8-Way Double Door DB dressing with 40A DP isolator, 30mA earth leakage RCCB, individual C-curve MCBs, and neutral link separation.',
      checklist: [
        'Numbered wire ferrule tagging for easy fault identification',
        'Load balanced across lighting, power, and AC circuits',
        'Zero nuisance tripping setup with dedicated neutral returns'
      ]
    },
    {
      id: 'p3',
      title: 'LED Profile Lighting & False Ceiling Wiring',
      category: 'lighting',
      categoryLabel: 'Modern Lighting',
      location: 'Paota, Rajasthan',
      description: 'Installation of concealed LED profile strip lighting, COB spotlights, magnetic track lights, and aesthetic ceiling fan hanging.',
      checklist: [
        'Concealed aluminium profile channels with seamless diffuser',
        '12V SMPS driver power supply concealed in accessible junction',
        'Dual-tone warm white & natural white switching'
      ]
    },
    {
      id: 'p4',
      title: 'Commercial Retail Shop & Display Wiring',
      category: 'commercial',
      categoryLabel: 'Shop & Commercial',
      location: 'Kotputli-Behror, Rajasthan',
      description: 'Full single-phase commercial wiring with showcase spotlighting, sign board power lines, and computer counter UPS backup.',
      checklist: [
        'Dedicated power lines for refrigeration & showcase lights',
        'Manual rotary changeover switch for generator / inverter',
        'Heavy-duty switchboards with surge protected sockets'
      ]
    },
    {
      id: 'p5',
      title: 'Maintenance-Free Chemical & GI Plate Earthing Pit',
      category: 'db',
      categoryLabel: 'Earthing & Grounding',
      location: 'Panchudala Area, Rajasthan',
      description: '7-foot deep earthing pit with GI plate, moisture-retaining bentonite compound, and low earth resistance loop connected to main DB.',
      checklist: [
        'Earth resistance measured to ensure shock-safe grounding',
        'GI earth strip routed securely along exterior wall',
        'Inspection chamber with concrete cover and watering funnel'
      ]
    },
    {
      id: 'p6',
      title: 'Inverter Dual Circuit Backup & Bypass Setup',
      category: 'house',
      categoryLabel: 'Inverter & Power Backup',
      location: 'Kotputli-Behror, Rajasthan',
      description: 'Separation of critical emergency loads (fans, lights, TV) from high-power loads with manual bypass changeover switch.',
      checklist: [
        'Pure copper battery terminal cables with terminal covers',
        'Isolated inverter neutral wiring to prevent backfeed humming',
        'Rotary bypass switch installed for zero-downtime during maintenance'
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-black uppercase tracking-widest text-orange-600">
            <Building2 className="w-3.5 h-3.5" />
            <span>Work Showcase & Execution Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Electrical & House Wiring Projects
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Exemplary residential, shop, and safety installations executed with precision in Panchudala, Telagav, Kotputli-Behror, and Paota.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'house', label: 'House Wiring' },
            { id: 'db', label: 'DB & Earthing' },
            { id: 'lighting', label: 'Profile & Ceiling Lights' },
            { id: 'commercial', label: 'Shop & Commercial' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border cursor-pointer ${
                filter === cat.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 flex flex-col justify-between transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-500 font-bold">
                    📍 {project.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Execution Highlights:
                  </div>
                  {project.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Need similar work?</span>
                <a
                  href={getWhatsAppUrl(`Hello Dinesh Singh Raghav, mujhe ${project.title} jaise work ke liye quotation chahiye.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-green-50 hover:bg-green-600 text-green-700 hover:text-white text-xs font-black uppercase tracking-wider border border-green-200 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask Dinesh</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
