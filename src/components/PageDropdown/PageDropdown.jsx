import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function MegaMenuDropdown() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="flex items-center space-x-6 text-sm font-medium text-slate-700">
      
      {/* 1. WHY EDUPULSE */}
      <div 
        className="relative py-2"
        onMouseEnter={() => setActiveMenu('why')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center space-x-1 hover:text-blue-600 focus:outline-none font-medium py-1">
          <span className={activeMenu === 'why' ? 'text-blue-600 font-semibold' : ''}>Why EduPulse</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'why' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
        </button>

        {activeMenu === 'why' && (
          <div className="absolute top-[calc(100%+8px)] left-0 w-[640px] bg-white border border-slate-200 rounded-xl shadow-2xl p-6 z-[100] grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Content</p>
              <div className="space-y-3">
                <a href="#" className="block group">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600">Overview</div>
                  <p className="text-xs text-slate-500">Transform your organization with enterprise learning</p>
                </a>
                <a href="#" className="block group">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600">World-Class Content</div>
                  <p className="text-xs text-slate-500">Top courses from global experts & industry leaders</p>
                </a>
                <a href="#" className="block group">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600">Clips</div>
                  <p className="text-xs text-slate-500">Short, bite-sized micro-learning videos</p>
                </a>
                <a href="#" className="block group">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600">Guided Projects</div>
                  <p className="text-xs text-slate-500">Hands-on learning for job-ready skills</p>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Platform Functionality</p>
              <div className="space-y-3">
                <a href="#" className="block group">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600">Career Graph</div>
                  <p className="text-xs text-slate-500">Connect skills to job roles & real-time market data</p>
                </a>
                <a href="#" className="block group">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600">Course Builder</div>
                  <p className="text-xs text-slate-500">Build custom learning programs</p>
                </a>
                <a href="#" className="block group">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600">Integrations</div>
                  <p className="text-xs text-slate-500">Seamless integration into your LMS platform</p>
                </a>
                <a href="#" className="block group">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600">LevelSets</div>
                  <p className="text-xs text-slate-500">Targeted skill upskilling and assessment</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. SOLUTIONS */}
      <div 
        className="relative py-2"
        onMouseEnter={() => setActiveMenu('solutions')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center space-x-1 hover:text-blue-600 focus:outline-none font-medium py-1">
          <span className={activeMenu === 'solutions' ? 'text-blue-600 font-semibold' : ''}>Solutions</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
        </button>

        {activeMenu === 'solutions' && (
          <div className="absolute top-[calc(100%+8px)] left-[-100px] w-[580px] bg-white border border-slate-200 rounded-xl shadow-2xl p-6 z-[100]">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Skills Tracks</p>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 block">
                <div className="font-semibold text-slate-800 text-sm">Data & Analytics Track</div>
                <p className="text-xs text-slate-500 mt-1">Enhance data-driven decision making capabilities</p>
              </a>
              <a href="#" className="p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 block">
                <div className="font-semibold text-slate-800 text-sm">IT & Infrastructure Track</div>
                <p className="text-xs text-slate-500 mt-1">Prepare teams for system infrastructure & cloud</p>
              </a>
              <a href="#" className="p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 block">
                <div className="font-semibold text-slate-800 text-sm">Software & Product Track</div>
                <p className="text-xs text-slate-500 mt-1">Advance product engineering expertise</p>
              </a>
              <a href="#" className="p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 block">
                <div className="font-semibold text-slate-800 text-sm">Generative AI Skills Track</div>
                <p className="text-xs text-slate-500 mt-1">Empower teams with modern AI tools for productivity</p>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* 3. RESOURCES */}
      <div 
        className="relative py-2"
        onMouseEnter={() => setActiveMenu('resources')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center space-x-1 hover:text-blue-600 focus:outline-none font-medium py-1">
          <span className={activeMenu === 'resources' ? 'text-blue-600 font-semibold' : ''}>Resources</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
        </button>

        {activeMenu === 'resources' && (
          <div className="absolute top-[calc(100%+8px)] left-[-180px] w-[600px] bg-white border border-slate-200 rounded-xl shadow-2xl p-6 z-[100] grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Insights</p>
              <div className="space-y-3">
                <a href="#" className="block hover:text-blue-600 font-semibold text-slate-800 text-sm">The Global Skills Report 2026</a>
                <a href="#" className="block hover:text-blue-600 font-semibold text-slate-800 text-sm">The Job Skills of 2026 Report</a>
                <a href="#" className="block hover:text-blue-600 font-semibold text-slate-800 text-sm">Unlocking Productivity with GenAI</a>
                <a href="#" className="block hover:text-blue-600 font-semibold text-slate-800 text-sm">The Learner Adoption Playbook</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Resource Hub</p>
              <div className="space-y-3">
                <a href="#" className="block hover:text-blue-600 font-semibold text-slate-800 text-sm">Overview</a>
                <a href="#" className="block hover:text-blue-600 font-semibold text-slate-800 text-sm">E-Books & Reports</a>
                <a href="#" className="block hover:text-blue-600 font-semibold text-slate-800 text-sm">Webinars & Events</a>
                <a href="#" className="block hover:text-blue-600 font-semibold text-slate-800 text-sm">Case Studies</a>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}