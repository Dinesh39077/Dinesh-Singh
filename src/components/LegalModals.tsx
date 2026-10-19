import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto text-sm text-slate-300 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-white font-black uppercase tracking-tight text-lg">
            <Shield className="w-5 h-5 text-orange-400" />
            <span>Privacy Policy</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 leading-relaxed text-xs sm:text-sm font-medium">
          <p>
            At <strong>{BUSINESS_INFO.name}</strong>, we respect the privacy of our customers and visitors in Panchudala, Telagav, Kotputli-Behror, Paota, and Rajasthan.
          </p>
          <h4 className="font-black uppercase tracking-wider text-white text-xs">1. Information Collection</h4>
          <p className="text-slate-400">
            Any information you provide (such as your name, mobile number, site location, or electrical requirements) through our contact buttons or WhatsApp is strictly used to communicate regarding requested electrical and house wiring services.
          </p>
          <h4 className="font-black uppercase tracking-wider text-white text-xs">2. No Third-Party Sharing</h4>
          <p className="text-slate-400">
            We do not sell, rent, or distribute your phone numbers or contact details to third-party telemarketers or advertisers.
          </p>
          <h4 className="font-black uppercase tracking-wider text-white text-xs">3. Contact for Privacy Inquiries</h4>
          <p className="text-slate-400">
            If you have questions regarding your data, contact Dinesh Singh Raghav directly at <strong>{BUSINESS_INFO.phone}</strong>.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-wider rounded-2xl text-xs cursor-pointer shadow-md"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto text-sm text-slate-300 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-white font-black uppercase tracking-tight text-lg">
            <FileText className="w-5 h-5 text-orange-400" />
            <span>Terms & Conditions</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 leading-relaxed text-xs sm:text-sm font-medium">
          <p>
            Terms of service for electrical contracting, house wiring, and maintenance provided by <strong>{BUSINESS_INFO.name}</strong>:
          </p>
          <h4 className="font-black uppercase tracking-wider text-white text-xs">1. Work Scope & Quotations</h4>
          <p className="text-slate-400">
            Wiring project estimates are provided based on site inspection, room count, and specified materials (conduit pipes, ISI wires, DB components). Any alterations during masonry or plaster work will be mutually agreed upon.
          </p>
          <h4 className="font-black uppercase tracking-wider text-white text-xs">2. Electrical Safety & Standard Materials</h4>
          <p className="text-slate-400">
            We strictly recommend using ISI-certified flame retardant copper wires, rated MCBs, and proper earthing to ensure lasting shock protection and fire safety.
          </p>
          <h4 className="font-black uppercase tracking-wider text-white text-xs">3. Direct Contractor Relationship</h4>
          <p className="text-slate-400">
            All services are directly executed and managed by Dinesh Singh Raghav for transparent and trustworthy execution in Panchudala, Telagav, Kotputli-Behror, Paota, and Rajasthan.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-wider rounded-2xl text-xs cursor-pointer shadow-md"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
