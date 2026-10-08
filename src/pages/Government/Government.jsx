import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function EduPulseGovernment() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    organizationType: '',
    jobTitle: '',
    organizationName: '',
    organizationSize: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const navigationMenus = [
    {
      label: 'Why EduPulse',
      links: [
        { label: 'Workforce impact', href: '#why' },
        { label: 'Trusted learning content', href: '#content' },
      ],
    },
    {
      label: 'Solutions',
      links: [
        { label: 'Government training', href: '#solutions' },
        { label: 'Skills Tracks', href: '#teams' },
      ],
    },
    {
      label: 'Resources',
      links: [
        { label: 'Global Skills Report', href: '#report' },
        { label: 'Contact sales', href: '#contact' },
      ],
    },
  ];

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <div className="flex-grow">
        
        {/* Top Announcement Banner */}
        <div className="bg-[#0f172a] text-white text-center py-2.5 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-3">
          <span>Get skill insights drawn from 300M+ EduPulse and Udemy learners in the Global Skills Report 2026.</span>
          <a href="#report" className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors font-medium">
            Get report
          </a>
        </div>

        {/* Navigation Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex min-h-20 flex-wrap items-center justify-between">
            <div className="flex min-h-20 items-center gap-8">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-blue-700">EduPulse</span>
                <span className="text-gray-600 font-medium text-base">for government</span>
              </div>
              
              <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700" aria-label="Government navigation">
                {navigationMenus.map((menu) => (
                  <div className="relative" key={menu.label}>
                    <button
                      type="button"
                      aria-expanded={activeMenu === menu.label}
                      onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                      className="flex items-center gap-1 py-3 hover:text-blue-700 transition-colors"
                    >
                      {menu.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === menu.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMenu === menu.label && (
                      <div className="absolute left-0 top-full z-30 min-w-52 rounded-lg border border-gray-200 bg-white p-2 shadow-xl">
                        {menu.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setActiveMenu(null)}
                            className="block rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="#teams" className="py-3 hover:text-blue-700 transition-colors">For Teams</a>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors shadow-sm"
              >
                Contact Sales
              </a>
              <button
                type="button"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 lg:hidden"
              >
                {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>

            {mobileMenuOpen && (
              <nav className="w-full border-t border-gray-200 pb-4 pt-2 lg:hidden" aria-label="Mobile government navigation">
                {navigationMenus.map((menu) => (
                  <div className="border-b border-gray-100" key={menu.label}>
                    <button
                      type="button"
                      aria-expanded={activeMenu === menu.label}
                      onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                      className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-gray-800"
                    >
                      {menu.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === menu.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMenu === menu.label && (
                      <div className="pb-2 pl-3">
                        {menu.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => {
                              setActiveMenu(null);
                              setMobileMenuOpen(false);
                            }}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-700"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="#teams" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm font-semibold text-gray-800">For Teams</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-1 block rounded-md bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white">Contact Sales</a>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Accelerate public sector growth with a learning platform for government
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Drive sustainable economic growth and build a competitive workforce with a government e-learning platform featuring courses from leading universities and companies.
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold text-sm transition-colors shadow-sm"
              >
                Learn More
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Government team collaborating"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Dark Stats Grid Banner */}
        <section id="why" className="bg-[#0b192c] text-white py-12 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <span className="text-4xl lg:text-5xl font-bold text-white block mb-2">5X</span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Hiring for skills is <strong>five times more predictive</strong> of job performance than hiring for education.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <span className="text-4xl lg:text-5xl font-bold text-white block mb-2">32%</span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  of the world’s population is not online, showing a large digital divide.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <span className="text-4xl lg:text-5xl font-bold text-white block mb-2">39%</span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  of workers' existing skills will change or be outdated by 2030.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* High Quality Content / Brand Image Matrix */}
        <section id="content" className="py-16 bg-gray-50 border-b border-gray-200 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2 block">High-Quality Content</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Empower government teams with access to world-class content from the world's most trusted companies and universities.
                </h2>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-bold">✓</span> Offer job-aligned credentials to strengthen employment outcomes.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-bold">✓</span> Access diverse content formats, from video clips to micro-credentials.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-bold">✓</span> Offer learning in over 25 languages to support learners in their native tongue.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-bold">✓</span> Explore Skills Tracks for role-specific skill mastery.
                  </li>
                </ul>
              </div>

              {/* Partner Logos Matrix with Distinct Background Colors matching original */}
              <div className="lg:col-span-7 grid grid-cols-4 sm:grid-cols-5 gap-3">
                <div className="bg-[#00274C] text-white font-serif font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Michigan</div>
                <div className="bg-[#4285F4] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Google</div>
                <div className="bg-[#0078D4] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Microsoft</div>
                <div className="bg-[#052FAD] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">IBM</div>
                <div className="bg-[#0068B5] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Intel</div>
                <div className="bg-[#E51C24] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Illinois</div>
                <div className="bg-[#1877F2] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Meta</div>
                <div className="bg-[#FF9900] text-black font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">AWS</div>
                <div className="bg-[#0077B5] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Vanderbilt</div>
                <div className="bg-[#365EB1] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">INTUIT</div>
                <div className="bg-[#00A1E0] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Salesforce</div>
                <div className="bg-[#12263F] text-white font-serif font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Princeton</div>
                <div className="bg-[#A41034] text-white font-serif font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">HEC</div>
                <div className="bg-[#001A57] text-white font-serif font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Duke</div>
                <div className="bg-[#4B6B94] text-white font-serif font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">UW</div>
                <div className="bg-[#12263F] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">BCG</div>
                <div className="bg-[#002D62] text-white font-serif font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Johns Hopkins</div>
                <div className="bg-[#FF0000] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">Adobe</div>
                <div className="bg-[#57068C] text-white font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">NYU</div>
                <div className="bg-[#002B49] text-white font-serif font-bold text-xs p-3 h-16 rounded flex items-center justify-center text-center">London Business School</div>
              </div>
            </div>
          </div>
        </section>

        {/* Blue Impact Banner */}
        <section id="solutions" className="bg-blue-700 text-white py-16 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Government training built for impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-800/60 p-6 rounded-xl border border-blue-500/40">
                <h4 className="text-lg font-bold mb-3">Offer learning in 25+ languages</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Provide training in learners' native language with access to 5,000+ courses translated seamlessly.
                </p>
              </div>

              <div className="bg-blue-800/60 p-6 rounded-xl border border-blue-500/40">
                <h4 className="text-lg font-bold mb-3">Integrate into your ecosystem</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Easily connect our learning platforms with 20+ LMS and LXP systems to streamline management.
                </p>
              </div>

              <div className="bg-blue-800/60 p-6 rounded-xl border border-blue-500/40">
                <h4 className="text-lg font-bold mb-3">Customize training</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Accelerate content creation and curation with AI-powered tools tailored to your organization.
                </p>
              </div>

              <div className="bg-blue-800/60 p-6 rounded-xl border border-blue-500/40">
                <h4 className="text-lg font-bold mb-3">Secure practice</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Promote real-world application with hands-on practice in secure, private lab environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Tracks Section with SVG Curved Graphic Illustrations */}
        <section id="teams" className="py-16 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">Explore Skills Tracks</span>
              <h2 className="text-3xl font-bold text-gray-900">
                Choose the right Skills Tracks for your team's needs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Data Track with Graphic Header */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="h-44 bg-slate-100 flex items-center justify-center p-4 border-b border-gray-100">
                  <svg className="w-full h-full text-slate-700" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                    <path d="M 20 20 L 100 20 C 130 20 130 100 180 100" />
                    <path d="M 20 50 L 80 50 C 110 50 110 80 180 80" />
                    <circle cx="100" cy="20" r="8" fill="#3B82F6" stroke="none" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase text-blue-600 block mb-2">Uncover Insights</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Data Skills Track</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    Strengthen data-driven decision making with a leading online learning platform for business. Access learning paths in analytics, data management, and automation.
                  </p>
                  <a href="#" className="text-blue-700 font-semibold text-xs hover:underline flex items-center gap-1">
                    Master essential data skills →
                  </a>
                </div>
              </div>

              {/* IT Track with Graphic Header */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="h-44 bg-amber-50/50 flex items-center justify-center p-4 border-b border-gray-100">
                  <svg className="w-full h-full text-slate-700" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                    <path d="M 20 100 L 100 100 C 130 100 130 20 180 20" />
                    <path d="M 20 70 L 80 70 C 110 70 110 40 180 40" />
                    <circle cx="100" cy="100" r="8" fill="#F59E0B" stroke="none" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase text-blue-600 block mb-2">Modernize Systems</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">IT Skills Track</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    Protect your organization with cybersecurity, IT operations, and network administration learning paths through a trusted business learning platform.
                  </p>
                  <a href="#" className="text-blue-700 font-semibold text-xs hover:underline flex items-center gap-1">
                    Explore IT learning solutions →
                  </a>
                </div>
              </div>

              {/* Software Track with Graphic Header */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="h-44 bg-blue-50/50 flex items-center justify-center p-4 border-b border-gray-100">
                  <svg className="w-full h-full text-slate-700" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                    <path d="M 30 20 C 120 20 120 100 170 100" />
                    <path d="M 30 50 C 100 50 100 80 170 80" />
                    <circle cx="120" cy="60" r="8" fill="#10B981" stroke="none" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase text-blue-600 block mb-2">Build Faster</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Software & Product Skills Track</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    Accelerate product delivery with learning paths in product strategy, UX design, and software engineering.
                  </p>
                  <a href="#" className="text-blue-700 font-semibold text-xs hover:underline flex items-center gap-1">
                    Elevate engineering skills →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Lead Form Section */}
        <section id="contact" className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to learn more?
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Let's connect to discuss how EduPulse can help you upskill and reskill job seekers, public servants, and citizens to thrive in the digital economy.
                </p>
                <ul className="space-y-3 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-700 font-bold">✓</span> Build in-demand skills for changing labor market needs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-700 font-bold">✓</span> Engage and retain mission-driven talent
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-700 font-bold">✓</span> Drive sustainable economic growth
                  </li>
                </ul>

                <p className="text-xs text-gray-500">
                  Join over 900 organizations, including federal agencies, think tanks, and non-profits, who have partnered with EduPulse to transform their workforce.
                </p>
              </div>

              {/* Government Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="workEmail"
                    placeholder="Work Email *"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number *"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs text-gray-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="">Organization Type</option>
                    <option value="national">National Government</option>
                    <option value="state">State / Regional Government</option>
                    <option value="local">Local Municipal</option>
                  </select>

                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title *"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="organizationName"
                    placeholder="Organization Name *"
                    required
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />

                  <select
                    name="organizationSize"
                    value={formData.organizationSize}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs text-gray-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="">Organization Size</option>
                    <option value="1-50">1 - 50</option>
                    <option value="51-500">51 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="country"
                  placeholder="Country *"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded text-xs transition-colors mt-2"
                >
                  Request Info
                </button>

                <p className="text-[10px] text-gray-500 leading-tight">
                  By submitting your info in the form above, you agree to our Privacy Notice. We may contact you regarding products and services.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Resources Cards */}
        <section id="report" className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">Global Skills Report 2026</h4>
                  <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                    Discover top AI and human skill pairings with data drawn from more than 300 million EduPulse and Udemy learners worldwide.
                  </p>
                </div>
                <a href="#" className="text-blue-700 text-xs font-semibold hover:underline">Learn More →</a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">EU AI Act Playbook</h4>
                  <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                    Ensure your organization is compliant with Article 4 of the EU AI Act and gain actionable insights to ensure teams use AI safely and ethically.
                  </p>
                </div>
                <a href="#" className="text-blue-700 text-xs font-semibold hover:underline">Learn More →</a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">Micro-Credentials Impact Report 2025</h4>
                  <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                    Gain insights on how micro-credentials are bridging skill gaps, driving career outcomes, and building a future-ready workforce.
                  </p>
                </div>
                <a href="#" className="text-blue-700 text-xs font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Persistent Footer */}
      <footer className="bg-white pt-12 pb-8 border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-xs">
            <div>
              <h5 className="font-bold text-gray-900 mb-3">EduPulse</h5>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">What We Offer</a></li>
                <li><a href="#" className="hover:underline">Leadership</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Catalog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-3">Community</h5>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Learners</a></li>
                <li><a href="#" className="hover:underline">Partners</a></li>
                <li><a href="#" className="hover:underline">Beta Testers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-3">More</h5>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Investors</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-3">Mobile App</h5>
              <div className="flex flex-col gap-2">
                <button className="bg-black text-white px-3 py-1.5 rounded text-[11px] font-medium w-32 text-left">
                  App Store
                </button>
                <button className="bg-black text-white px-3 py-1.5 rounded text-[11px] font-medium w-32 text-left">
                  Google Play
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 text-[11px] text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2026 EduPulse Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy Notice</a>
              <a href="#" className="hover:underline">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}