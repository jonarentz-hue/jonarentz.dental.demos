import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Heart
} from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData';

interface FooterProps {
  onNavigateTab: (tab: 'overview' | 'services' | 'gallery' | 'booking' | 'portal') => void;
  onOpenGuide: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenGuide,
  onOpenBooking
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          
          {/* Col 1 & 2: Practice Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">Demissie Dental</span>
                <p className="text-teal-400 text-xs font-semibold">Dr. Amy Demissie, DDS • San Bernardino, CA</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Dedicated to compassionate, high-precision dentistry in an anxiety-free environment. Featuring computerized painless numbing, digital smile design, and same-day emergency relief.
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Office: {CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-rose-300 font-semibold">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>24/7 Dental Emergency: {CLINIC_INFO.emergencyPhone}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGuide}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/50 px-3 py-1.5 rounded-xl hover:bg-amber-950 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>What information do you need from me?</span>
              </button>
            </div>
          </div>

          {/* Col 3: Treatments */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Treatments</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigateTab('services')} className="hover:text-teal-300 transition-colors">
                  Routine Cleaning & Exams
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('services')} className="hover:text-teal-300 transition-colors">
                  Porcelain Veneers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('services')} className="hover:text-teal-300 transition-colors">
                  Phillips Zoom! Whitening
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('services')} className="hover:text-teal-300 transition-colors">
                  Invisalign® Clear Aligners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('services')} className="hover:text-teal-300 transition-colors">
                  Guided Dental Implants
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('services')} className="hover:text-teal-300 transition-colors">
                  Emergency Toothache Triage
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Demo Features</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenBooking} className="hover:text-teal-300 transition-colors font-semibold text-teal-400">
                  • Online Appointment Booking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('gallery')} className="hover:text-teal-300 transition-colors">
                  • Patient Smile Gallery Slider
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('portal')} className="hover:text-teal-300 transition-colors font-semibold text-teal-400">
                  • Integrated Patient Portal
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking()} className="hover:text-teal-300 transition-colors">
                  • 24/7 Dental AI Concierge
                </button>
              </li>
              <li>
                <button onClick={onOpenGuide} className="hover:text-teal-300 transition-colors text-amber-300 font-semibold">
                  • Customization Info Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Clinic Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Office Hours</h4>
            <div className="space-y-1.5 text-slate-400">
              {CLINIC_INFO.hours.map((h, i) => (
                <div key={i} className="flex flex-col py-0.5 border-b border-slate-800/80">
                  <span className="text-slate-300 font-medium">{h.days}</span>
                  <span className="text-teal-400 font-semibold">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Guaranteed same-day emergency relief chair times held daily.
            </p>
          </div>

        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 Demissie Dental Demo. Developed for demonstration purposes. HIPAA compliant design structure.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Care</span>
            <span>•</span>
            <span>Patient Rights</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
