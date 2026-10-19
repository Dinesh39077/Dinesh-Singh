import React, { useState } from 'react';
import { Download, FileArchive, CheckCircle2, X, FileText, Code2, Sparkles, ShieldCheck } from 'lucide-react';
import { generateProjectZip } from '../utils/zipGenerator';
import { BUSINESS_INFO } from '../data/businessData';

interface DownloadZipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadZipModal: React.FC<DownloadZipModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadedType, setDownloadedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = async (type: 'all' | 'code' | 'docs') => {
    try {
      setDownloading(true);
      await generateProjectZip(type);
      setDownloadedType(type);
      setTimeout(() => {
        setDownloading(false);
      }, 800);
    } catch (err) {
      console.error('Failed to generate zip:', err);
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-sm text-slate-300 shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <FileArchive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                Download ZIP Package
              </h3>
              <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                {BUSINESS_INFO.name} • Project Files & Guides
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Overview */}
        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            Download the complete website source code, offline electrical engineering manuals, wiring calculators, and safety charts packaged in a single <strong>.ZIP file</strong>.
          </p>

          {/* Download Options */}
          <div className="space-y-3 pt-2">
            
            {/* Option 1: Complete Bundle */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/90 border border-slate-700 hover:border-orange-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span className="font-black text-white text-sm uppercase tracking-tight">
                    Complete All-In-One ZIP Bundle
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  Full React + Vite App source code + Hindi/English House Wiring Manuals + Offline HTML Handbook.
                </p>
              </div>

              <button
                onClick={() => handleDownload('all')}
                disabled={downloading}
                className="shrink-0 px-5 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                <span>{downloading && downloadedType === 'all' ? 'Packaging...' : 'Download ZIP'}</span>
              </button>
            </div>

            {/* Option 2: Electrical Engineering Guides & Manuals only */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-orange-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span className="font-black text-white text-sm uppercase tracking-tight">
                    Electrical Blueprints & Safety Manuals
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  Step-by-step house wiring guide, MCB sizing chart, Excel appliance load calculator worksheet.
                </p>
              </div>

              <button
                onClick={() => handleDownload('docs')}
                disabled={downloading}
                className="shrink-0 px-5 py-3 rounded-2xl bg-slate-700 hover:bg-slate-600 active:scale-95 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                <span>Download Docs</span>
              </button>
            </div>

            {/* Option 3: Source Code Only */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-orange-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-green-400" />
                  <span className="font-black text-white text-sm uppercase tracking-tight">
                    React + TypeScript Source Code
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  Clean modular codebase with Tailwind CSS, ready for local execution via `npm run dev`.
                </p>
              </div>

              <button
                onClick={() => handleDownload('code')}
                disabled={downloading}
                className="shrink-0 px-5 py-3 rounded-2xl bg-slate-700 hover:bg-slate-600 active:scale-95 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                <span>Source Code</span>
              </button>
            </div>

          </div>
        </div>

        {/* Included Files Checklist */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            What's inside the generated ZIP file:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
              <span>Full React 19 + TypeScript App</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
              <span>House Wiring Manual (Markdown)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
              <span>Load Calculator CSV Sheet</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
              <span>Offline HTML Handbook</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            Direct download from browser (No sign-in required)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
