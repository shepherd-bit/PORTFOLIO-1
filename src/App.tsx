/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { SocialSidebar } from './components/SocialSidebar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { portfolioInfo } from './data/portfolioData';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscordClick = () => {
    navigator.clipboard.writeText(portfolioInfo.contacts.discord);
    showToast(`Copied Discord handle: ${portfolioInfo.contacts.discord}`);
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText(portfolioInfo.contacts.directEmail);
    showToast(`Copied email: ${portfolioInfo.contacts.directEmail}`);
  };

  const handleSelectTierForContact = (tierName: string, estimatedTotal: number) => {
    showToast(`Quote selected: ${tierName} (~$${estimatedTotal})`);
    scrollToSection('contacts');
  };

  return (
    <div className="min-h-screen bg-[#282C33] text-[#ABB2BF] font-mono selection:bg-[#C778DD] selection:text-white relative">
      
      {/* Fixed Left Social Links Sidebar (Desktop) */}
      <SocialSidebar
        onDiscordClick={handleDiscordClick}
        onEmailClick={handleEmailClick}
      />

      {/* Main App Container */}
      <div className="md:pl-12">
        
        {/* Sticky Header Navigation */}
        <Header onResumeClick={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero onContactClick={() => scrollToSection('contacts')} />

          {/* #projects Section */}
          <Projects />

          {/* #skills Section */}
          <Skills />

          {/* #about-me Section */}
          <AboutMe />

          {/* #experience Section */}
          <Experience />

          {/* #contacts Section */}
          <Contacts />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Quick Toast Notification */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#1E2228] border border-[#C778DD] text-white px-4 py-2.5 shadow-2xl text-xs font-mono flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <span className="w-2 h-2 rounded-full bg-[#C778DD] animate-ping" />
          <span>{toastMessage}</span>
        </aside>
      )}

    </div>
  );
}
