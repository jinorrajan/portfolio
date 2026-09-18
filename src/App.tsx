/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';
import ServicesScreen from './components/screens/ServicesScreen';
import ProjectsScreen from './components/screens/ProjectsScreen';
import CaseStudyScreen from './components/screens/CaseStudyScreen';
import ExperienceScreen from './components/screens/ExperienceScreen';
import ProcessScreen from './components/screens/ProcessScreen';
import ContactScreen from './components/screens/ContactScreen';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [prefillService, setPrefillService] = useState<string | undefined>(undefined);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleNavigate = (tab: NavTab) => {
    setCurrentTab(tab);
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPrefillService(serviceTitle);
    setCurrentTab('contact');
  };

  return (
    <div className="min-h-screen bg-graph-pattern font-body-md text-body-md text-[#1b1c19] antialiased flex flex-col">
      {/* Sticky Neo-Brutalist Navigation Bar */}
      <Header currentTab={currentTab} onSelectTab={handleNavigate} />

      {/* Main Content View Container */}
      <main className="w-full pt-20 bg-transparent min-h-[calc(100vh-80px)] flex-1">
        {currentTab === 'home' && <HomeScreen onNavigate={handleNavigate} />}
        {currentTab === 'about' && <AboutScreen onNavigate={handleNavigate} />}
        {currentTab === 'services' && (
          <ServicesScreen
            onNavigate={handleNavigate}
            onSelectServiceForInquiry={handleSelectServiceForInquiry}
          />
        )}
        {currentTab === 'projects' && <ProjectsScreen onNavigate={handleNavigate} />}
        {currentTab === 'case-study' && <CaseStudyScreen onNavigate={handleNavigate} />}
        {currentTab === 'experience' && <ExperienceScreen onNavigate={handleNavigate} />}
        {currentTab === 'process' && <ProcessScreen onNavigate={handleNavigate} />}
        {currentTab === 'contact' && (
          <ContactScreen
            onNavigate={handleNavigate}
            prefillService={prefillService}
          />
        )}
      </main>

      {/* Neo-Brutalist Footer */}
      <Footer onSelectTab={handleNavigate} />
    </div>
  );
}
