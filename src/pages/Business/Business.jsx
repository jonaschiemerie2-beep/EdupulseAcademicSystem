import React, { useState } from 'react';
import ContactSalesModal from '../../components/ContactSalesModal';
import GetReportModal from '../../components/GetReportModal';
import PageDropdown from '../../components/PageDropdown/PageDropdown'
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Bot
} from 'lucide-react';

export default function Business() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Data Analysis');

  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const courses = [
    { title: "Excel Basics for Data Analysis", type: "Course", level: "Beginner", rating: "4.8" },
    { title: "Data Analysis with Python", type: "Course", level: "Intermediate", rating: "4.7" },
    { title: "Introduction to Data Analytics", type: "Guided Project", level: "Beginner", rating: "4.9" },
    { title: "EduPulse Data Analyst Certificate", type: "Specialization", level: "Intermediate", rating: "4.8" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* 1. SUB NAVBAR - Fixed z-index so dropdown stays above page content but below nothing */}
      <header className="sticky top-[64px] z-30 bg-white border-b border-slate-200 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">

          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-1 text-2xl font-black text-blue-700 tracking-tight">
              <span>edupulse</span>
              <span className="text-sm font-semibold text-slate-500 border-l border-slate-300 pl-2 ml-1">for business</span>
            </a>

            {/* Desktop Navigation Mega Menu */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-700">
              <PageDropdown />
              <a href="#teams" className="hover:text-blue-600 py-2">For Teams</a>
              <a href="#plans" className="hover:text-blue-600 py-2">Compare Plans</a>
            </div>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSalesModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors shadow-sm"
            >
              Contact sales
            </button>
            <button
              className="lg:hidden text-slate-700 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3 font-medium text-slate-700">
            <a href="#" className="block py-1 hover:text-blue-600">Why EduPulse</a>
            <a href="#" className="block py-1 hover:text-blue-600">Solutions</a>
            <a href="#" className="block py-1 hover:text-blue-600">Resources</a>
            <a href="#" className="block py-1 hover:text-blue-600">For Teams</a>
            <a href="#" className="block py-1 hover:text-blue-600">Compare Plans</a>
          </div>
        )}
      </header>

      {/* 2. BLUE BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <p className="text-xs md:text-sm font-medium text-center md:text-left leading-relaxed">
            Get skill insights drawn from 3000+ EduPulse learners in the Global Skills Report 2026.
          </p>
          <button
            onClick={() => setIsReportModalOpen(true)}
            className="shrink-0 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs md:text-sm px-4 py-2 rounded-md transition-colors shadow-sm"
          >
            Get report
          </button>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
              The expert-powered learning platform that drives business growth
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Our platform delivers expert-led courses, tailored learning paths, and AI tools to help organizations drive workforce growth globally.
            </p>

            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Build in-demand skills with world-class content</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Comprehensive learning pathways aligned with real roles</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Customize training programs with AI-powered tools</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all text-center"
              >
                Learn more
              </button>
              <p className="text-sm text-slate-500">
                Up-skilling up to 499 employees? <a href="#" className="text-blue-600 font-semibold underline">Get EduPulse for Teams</a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-blue-900 text-white relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Professional Business Woman"
                className="w-full h-[400px] object-cover mix-blend-overlay opacity-80"
              />

              <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl text-slate-900 shadow-lg border border-slate-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase">EduPulse Assistant</h4>
                    <p className="text-xs font-medium text-slate-800">What's the difference between Teams & Enterprise plans?</p>
                  </div>
                </div>
                <button className="w-full text-center bg-slate-100 hover:bg-slate-200 text-blue-700 text-xs font-semibold py-2 rounded-md transition-colors">
                  Ask EduPulse &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODALS */}
      <ContactSalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />

      <GetReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
}