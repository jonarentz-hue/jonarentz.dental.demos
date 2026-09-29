import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  Check, 
  Smile, 
  Zap, 
  Layers, 
  AlertTriangle, 
  Heart,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { DentalService, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'preventive', label: 'Preventive & Hygiene' },
    { id: 'cosmetic', label: 'Cosmetic Veneers & Whitening' },
    { id: 'orthodontics', label: 'Invisalign & Alignment' },
    { id: 'restorative', label: 'Implants & Restorative' },
    { id: 'emergency', label: 'Emergency Dental' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Smile': return <Smile className="w-5 h-5 text-teal-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-rose-500" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-500" />;
      default: return <CheckCircle2 className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="services-section" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase">
            <span>Specialized Clinical Care</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Dental Services with Transparent Pricing
          </h2>
          
          <p className="text-slate-600 text-base">
            From routine ultrasonic dental wellness cleanings to full smile restorations, every procedure is carried out with gentle, anxiety-free methods.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col justify-between rounded-3xl p-6 border transition-all duration-200 hover:shadow-lg ${
                service.popular
                  ? 'bg-gradient-to-b from-teal-50/40 to-white border-teal-300 shadow-sm relative'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {/* Popular pill */}
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-teal-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                  Most Requested
                </div>
              )}

              <div className="space-y-4">
                {/* Header & Icon */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.icon)}
                  </div>
                  
                  <div className="text-right">
                    <span className="text-lg font-black text-slate-900 block leading-tight">
                      {service.priceRange}
                    </span>
                    <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100 inline-block mt-0.5">
                      {service.insuranceCovered}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {service.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Duration & Details */}
                <div className="flex items-center gap-4 py-2 border-y border-slate-100 text-xs text-slate-600">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Est. Time: {service.duration}</span>
                  </span>
                </div>

                {/* Features checklist */}
                <div className="space-y-1.5 pt-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Book Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  id={`book-service-${service.id}`}
                  onClick={() => onOpenBooking(service.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* In-House Membership Club Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Uninsured? No Problem</span>
            <h3 className="text-2xl font-black">Join the Demissie Dental Care Club ($29/month)</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Includes 2 comprehensive cleanings, all digital X-rays, emergency exams, and 20% off all cosmetic, restorative, and surgical dental work. No deductibles, no maximums, zero waiting periods.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking('routine-exam')}
              className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs shadow-md transition-transform hover:scale-105"
            >
              Sign Up & Schedule
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
