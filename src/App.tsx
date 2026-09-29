/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { SmileGallery } from './components/SmileGallery';
import { BookingWizard } from './components/BookingWizard';
import { PatientPortal } from './components/PatientPortal';
import { DentalChatbot } from './components/DentalChatbot';
import { CustomizationGuideModal } from './components/CustomizationGuideModal';
import { Footer } from './components/Footer';
import { AppointmentBooking } from './types';
import { 
  Sparkles, 
  Calendar, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Smile, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'gallery' | 'booking' | 'portal'>('overview');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const [customBookings, setCustomBookings] = useState<AppointmentBooking[]>([]);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceForBooking(serviceId);
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingComplete = (newBooking: AppointmentBooking) => {
    setCustomBookings(prev => [newBooking, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
        onOpenGuide={() => setIsGuideOpen(true)}
        bookingCount={customBookings.length}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        
        {/* OVERVIEW / HOME VIEW */}
        {activeTab === 'overview' && (
          <div>
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Teaser Services */}
            <ServicesSection onOpenBooking={handleOpenBooking} />

            {/* Teaser Smile Gallery */}
            <SmileGallery onOpenBooking={handleOpenBooking} />

            {/* Quick Portal Teaser Callout */}
            <section className="py-16 bg-gradient-to-b from-white to-slate-100 border-b border-slate-200/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl text-center lg:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
                      Integrated Patient Portal Demo
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                      Experience Our Modern Paperless Patient Experience
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Patients can view high-definition digital 3D X-rays, review interactive tooth treatment diagrams with insurance estimates, download billing receipts, and reschedule visits anytime.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
                    <button
                      id="home-portal-cta"
                      onClick={() => {
                        setActiveTab('portal');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
                    >
                      <span>Explore Patient Portal Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => setIsGuideOpen(true)}
                      className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2"
                    >
                      <HelpCircle className="w-4 h-4 text-amber-400" />
                      <span>Customization Checklist</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SERVICES & TREATMENTS VIEW */}
        {activeTab === 'services' && (
          <ServicesSection onOpenBooking={handleOpenBooking} />
        )}

        {/* SMILE GALLERY VIEW */}
        {activeTab === 'gallery' && (
          <SmileGallery onOpenBooking={handleOpenBooking} />
        )}

        {/* ONLINE BOOKING WIZARD VIEW */}
        {activeTab === 'booking' && (
          <BookingWizard
            initialServiceId={selectedServiceForBooking}
            onBookingComplete={handleBookingComplete}
            onNavigateToPortal={() => {
              setActiveTab('portal');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* INTEGRATED PATIENT PORTAL VIEW */}
        {activeTab === 'portal' && (
          <PatientPortal
            customBookings={customBookings}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

      </main>

      {/* Floating AI Dental Chatbot for Patient Inquiries & FAQs */}
      <DentalChatbot
        onOpenBooking={handleOpenBooking}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* "What information do you need from me?" Customization Checklist Modal */}
      <CustomizationGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
