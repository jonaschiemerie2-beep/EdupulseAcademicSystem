import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function EduPulseUniversity() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    institutionType: '',
    institutionName: '',
    jobRole: '',
    department: '',
    needs: ''
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
        { label: 'Student outcomes', href: '#why' },
        { label: 'University partners', href: '#partners' },
      ],
    },
    {
      label: 'Solutions',
      links: [
        { label: 'Career Academy', href: '#career-academy' },
        { label: 'Learning platform', href: '#solutions' },
      ],
    },
    {
      label: 'Resources',
      links: [
        { label: 'University stories', href: '#resources' },
        { label: 'Contact sales', href: '#contact' },
      ],
    },
  ];

  return (
    /* Outer layout wrapper ensuring persistent footer behavior */
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      
      {/* Main Page Content */}
      <div className="flex-grow">
        {/* Top Announcement Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white text-center py-2.5 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2">
          <span>Get skill insights drawn from 300M+ EduPulse learners in the Global Skills Report 2026.</span>
        </div>

        {/* Navigation Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex min-h-20 flex-wrap items-center justify-between">
            <div className="flex min-h-20 items-center gap-8">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-indigo-700">EduPulse</span>
                <span className="text-gray-600 font-medium text-base">for university</span>
              </div>
              
              <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700" aria-label="University navigation">
                {navigationMenus.map((menu) => (
                  <div className="relative" key={menu.label}>
                    <button
                      type="button"
                      aria-expanded={activeMenu === menu.label}
                      onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                      className="flex items-center gap-1 py-3 hover:text-indigo-700 transition-colors"
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
                            className="block rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="#contact" className="py-3 hover:text-indigo-700 transition-colors">Compare Plans</a>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex bg-indigo-700 hover:bg-indigo-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-sm"
              >
                Contact Us
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
              <nav className="w-full border-t border-gray-200 pb-4 pt-2 lg:hidden" aria-label="Mobile university navigation">
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
                            className="block py-2 text-sm text-gray-600 hover:text-indigo-700"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm font-semibold text-gray-800">Compare Plans</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-1 block rounded-md bg-indigo-700 px-4 py-3 text-center text-sm font-semibold text-white">Contact Us</a>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Empower employability with online learning for universities
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Equip students with the most in-demand skills and prepare them for job success.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#contact"
                  className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3.5 rounded-lg font-semibold text-base transition-colors shadow-sm"
                >
                  Contact us
                </a>
                <a href="#plans" className="text-indigo-700 hover:underline text-sm font-medium">
                  See your options, compare plans →
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Students learning on EduPulse"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Impact Metrics Banner */}
        <section id="why" className="bg-[#0f172a] text-white py-12 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-4 border-indigo-500 pl-6">
                <span className="text-4xl lg:text-5xl font-bold text-white block mb-2">76%</span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Students are <strong>76% more likely</strong> to enroll in a degree program that offers industry micro-credentials.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6">
                <span className="text-4xl lg:text-5xl font-bold text-white block mb-2">88%</span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  of employers believe that <strong>Professional Certificates</strong> strengthen a candidate's job application.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6">
                <span className="text-4xl lg:text-5xl font-bold text-white block mb-2">90%</span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  of students agree that a <strong>Professional Certificate</strong> will help them secure a job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section id="partners" className="py-16 bg-gray-50 border-b border-gray-200 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-3xl mx-auto mb-12">
              Offer students 10,600+ courses from 350+ leading universities and industry partners
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {['Michigan', 'Meta', 'Google', 'AWS', 'IBM', 'Imperial'].map((partner, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center h-20 text-gray-700 font-bold text-lg">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Academy Section */}
        <section id="career-academy" className="py-16 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="Career preparation"
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2 block">Career Academy</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Prepare your students for in-demand jobs
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Strengthen student employability with job-ready skill training from world-leading partners.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-700 font-bold">✓</span> Enable students to gain job-ready skills independently
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-700 font-bold">✓</span> Provide hands-on experience with guided projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-700 font-bold">✓</span> Offer entry-level Professional Certificates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Indigo Feature Banner */}
        <section id="solutions" className="bg-indigo-700 text-white py-16 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 max-w-2xl leading-tight">
              Expand your curriculum with a university learning platform that empowers faculty
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-indigo-800/60 p-6 rounded-lg border border-indigo-500/40">
                <h4 className="text-xl font-semibold mb-3">World-Class Content</h4>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Connect students to a wide range of content topics from hundreds of industry leaders.
                </p>
              </div>
              <div className="bg-indigo-800/60 p-6 rounded-lg border border-indigo-500/40">
                <h4 className="text-xl font-semibold mb-3">Guided Projects</h4>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Give students hands-on projects and job-relevant experiences through interactive learning.
                </p>
              </div>
              <div className="bg-indigo-800/60 p-6 rounded-lg border border-indigo-500/40">
                <h4 className="text-xl font-semibold mb-3">Professional Certificates</h4>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Help your students grow job confidence, apply learning, and prove critical skills.
                </p>
              </div>
              <div className="bg-indigo-800/60 p-6 rounded-lg border border-indigo-500/40">
                <h4 className="text-xl font-semibold mb-3">LMS Integration</h4>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Seamlessly connect EduPulse to your university learning management system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="resources" className="py-20 bg-gray-50 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Here's how innovative universities are using EduPulse for University
            </h3>
            <blockquote className="text-xl sm:text-2xl text-gray-800 italic leading-relaxed mb-6">
              "EduPulse gives us confidence that we're providing our students high-quality education that furthers their career opportunities. Without EduPulse, we couldn't develop courses so quickly on our own."
            </blockquote>
            <div className="font-semibold text-gray-900">Yevgenia D.</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
              Vice Rector for Science and International Collaboration
            </div>
          </div>
        </section>

        {/* Contact Sales Form Section */}
        <section id="contact" className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get in touch with our sales team
                </h2>
                <p className="text-gray-600 mb-6 font-medium">Learn more about how you can:</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-700">✓</span> Connect curriculum to careers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-700">✓</span> Strengthen employment outcomes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-700">✓</span> Enhance learning experiences
                  </li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none text-sm"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="workEmail"
                    placeholder="Work Email Address *"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none text-sm"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number *"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    name="institutionType"
                    value={formData.institutionType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none text-sm text-gray-600"
                  >
                    <option value="">Institution Type</option>
                    <option value="university">University / Higher Ed</option>
                    <option value="college">Community College</option>
                    <option value="government">Government / Ministry</option>
                  </select>

                  <input
                    type="text"
                    name="institutionName"
                    placeholder="Institution Name *"
                    required
                    value={formData.institutionName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition-colors text-sm mt-2 shadow-sm"
                >
                  Submit
                </button>

                <p className="text-[11px] text-gray-500 leading-tight mt-2">
                  By submitting this form, you agree to receive communications from EduPulse regarding services and products.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Micro-Credentials Impact Report 2026</h4>
                  <p className="text-xs text-gray-600 mb-6">Explore insights from over 3,500 students, employers, and higher education leaders.</p>
                </div>
                <a href="#" className="text-indigo-700 text-xs font-semibold hover:underline">Get report →</a>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Global Skills Report 2026</h4>
                  <p className="text-xs text-gray-600 mb-6">Discover top in-demand skills and benchmark trends across 100+ countries.</p>
                </div>
                <a href="#" className="text-indigo-700 text-xs font-semibold hover:underline">Learn More →</a>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">EU AI Act Playbook</h4>
                  <p className="text-xs text-gray-600 mb-6">Ensure your institution is compliant with Article 4 of the EU AI Act.</p>
                </div>
                <a href="#" className="text-indigo-700 text-xs font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Constant Footer (Pinned to the bottom across all pages) */}
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
                <button className="bg-black text-white px-3 py-1.5 rounded-md text-[11px] font-medium w-32 text-left">
                  App Store
                </button>
                <button className="bg-black text-white px-3 py-1.5 rounded-md text-[11px] font-medium w-32 text-left">
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