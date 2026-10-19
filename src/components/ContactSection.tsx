import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  User, 
  FileText, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO, getCallUrl, getWhatsAppUrl } from '../data/businessData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('House Wiring');
  const [formLocation, setFormLocation] = useState('Panchudala');
  const [formMessage, setFormMessage] = useState('');

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullText = `Hello Dinesh Singh Raghav,
Name: ${formName || 'Customer'}
Mobile: ${formPhone || 'N/A'}
Service Required: ${formService}
Location: ${formLocation}
Details: ${formMessage || 'Mujhe electrical service ke baare mein quotation & inspection chahiye.'}`;

    const url = `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-black uppercase tracking-widest text-orange-600">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Electrical Contractor Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Contact Dinesh Singh Raghav
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Get in touch directly for new house wiring projects, DB / MCB installations, earthing solutions, or quick repairs.
          </p>
        </div>

        {/* 2 Column Layout: Left Contact Card, Right Quick WhatsApp Inquiry Form */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Official Contact Card (as specified) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 font-mono">
                    OFFICIAL CONTACT INFORMATION
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-1">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">
                    {BUSINESS_INFO.subtitle}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Exact Required Fields */}
              <div className="space-y-3.5">
                
                {/* Name */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                    <User className="w-4 h-4 text-orange-400" /> Business / Owner Name:
                  </span>
                  <span className="font-black text-white text-sm sm:text-base">
                    {BUSINESS_INFO.name}
                  </span>
                </div>

                {/* Mobile Phone */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-400" /> 📞 Mobile:
                  </span>
                  <a
                    href={getCallUrl()}
                    className="font-mono font-black text-orange-400 hover:text-orange-300 text-base flex items-center gap-1.5 transition-colors"
                  >
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-green-400" /> 💬 WhatsApp:
                  </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-black text-green-400 hover:text-green-300 text-base flex items-center gap-1.5 transition-colors"
                  >
                    <span>{BUSINESS_INFO.whatsapp}</span>
                  </a>
                </div>

                {/* Address */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-400" /> 📍 Address:
                    </span>
                    <button
                      onClick={copyAddress}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-200 flex items-center gap-1 transition-colors cursor-pointer font-bold"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed pl-6">
                    {BUSINESS_INFO.address}
                  </p>
                </div>

              </div>

              {/* Prominent Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Call Now with tel:7240259078 */}
                <a
                  href={getCallUrl()}
                  className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-white hover:bg-slate-100 text-orange-600 font-black text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                {/* WhatsApp Click-to-chat with pre-filled message */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-green-600/25 transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-[11px] text-center text-slate-400 font-medium">
                Pre-filled message: <span className="italic text-slate-300">“{BUSINESS_INFO.whatsappMessage}”</span>
              </div>

            </div>
          </div>

          {/* Quick WhatsApp Inquiry Form */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-green-700 font-mono">
                  DIRECT WHATSAPP INQUIRY
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
                  Send Project Inquiry Directly
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Fill the details below to generate a pre-formatted WhatsApp message to 7240259078.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 text-xs sm:text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Your Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 text-xs sm:text-sm font-mono font-medium"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Service Type
                    </label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-orange-500 text-xs sm:text-sm font-medium"
                    >
                      <option value="Complete House Wiring">Complete House Wiring</option>
                      <option value="DB / MCB Installation & Dressing">DB / MCB Installation & Dressing</option>
                      <option value="Plate / Chemical Earthing">Plate / Chemical Earthing</option>
                      <option value="Inverter & Battery Wiring">Inverter & Battery Wiring</option>
                      <option value="Fan & Decorative Light Fitting">Fan & Decorative Light Fitting</option>
                      <option value="Modular Switchboard Installation">Modular Switchboard Installation</option>
                      <option value="Emergency Electrical Repair">Emergency Electrical Repair</option>
                      <option value="Shop / Commercial Wiring">Shop / Commercial Wiring</option>
                      <option value="Water Pump / Motor Starter">Water Pump / Motor Starter</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Your Location / Area
                    </label>
                    <select
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-orange-500 text-xs sm:text-sm font-medium"
                    >
                      <option value="Panchudala">Panchudala</option>
                      <option value="Telagav">Telagav</option>
                      <option value="Kotputli-Behror">Kotputli-Behror</option>
                      <option value="Paota">Paota</option>
                      <option value="Nearby Area (Rajasthan)">Nearby Area (Rajasthan)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    Describe Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 2BHK new construction wiring needed, or MCB tripping issue in kitchen..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 text-xs sm:text-sm font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-green-600/25 transition-transform hover:scale-[1.01] active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp to 7240259078</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
