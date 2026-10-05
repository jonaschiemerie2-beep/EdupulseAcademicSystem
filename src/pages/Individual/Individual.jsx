import React, { useState } from "react";
import { ArrowRight, Sparkles, Star, ChevronRight, ExternalLink } from "lucide-react";

function Individual() {
  const [activeTab, setActiveTab] = useState("Data Analysis");

  const courseData = [
    {
      title: "Excel Basics for Data Analysis",
      type: "Course",
      rating: "4.8",
      category: "Data Analysis",
      badge: "Excel Basics",
      bgGradient: "from-blue-600 to-indigo-700",
    },
    {
      title: "Data Analysis with Python",
      type: "Course",
      rating: "4.7",
      category: "Data Analysis",
      badge: "Python",
      bgGradient: "from-sky-700 to-blue-900",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      type: "Specialization",
      rating: "4.8",
      category: "Data Analysis",
      badge: "Google Data Analysis",
      bgGradient: "from-blue-500 to-emerald-600",
    },
    {
      title: "Introduction to Data Analysis using Microsoft Excel",
      type: "Guided Project",
      rating: "4.6",
      category: "Data Analysis",
      badge: "Guided Project",
      bgGradient: "from-indigo-600 to-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* =====================================================
          HERO PROMOTIONAL CARDS (YOUR EXISTING CODE)
      ====================================================== */}
      <section className="px-5 py-8 md:px-8">
        <div className="mx-auto grid max-w-[1600px] gap-5 lg:grid-cols-2">

          {/* AI CARD */}
          <div className="relative min-h-92.5 overflow-hidden rounded-2xl bg-linear-to-r from-[#062d62] via-[#0752b8] to-[#1688ef]">
            {/* Decorative circle */}
            <div className="absolute -right-20 -top-20 h-95 w-95 rounded-full bg-blue-500/40" />

            <div className="relative z-10 flex h-full min-h-92.5 items-center">
              {/* Text */}
              <div className="w-[55%] px-7 py-10 md:px-10">
                <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  Learn AI from the
                  <br />
                  companies building it
                </h1>

                <p className="mt-5 text-sm leading-6 text-white/90 md:text-base">
                  Courses and certificates from leading technology
                  organizations for every level and role.
                </p>

                <button className="mt-7 flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-gray-100 cursor-pointer">
                  Explore AI courses
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Person / Visual */}
              <div className="absolute bottom-0 right-0 flex h-full w-[48%] items-end justify-center">
                <div className="flex h-72 w-72 items-center justify-center rounded-full bg-blue-400/40">
                  <div className="flex h-56 w-56 items-center justify-center rounded-full bg-orange-300/80">
                    <div className="text-7xl">👩🏾‍💻</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAREER CARD */}
          <div className="relative min-h-92.5 overflow-hidden rounded-2xl bg-linear-to-r from-[#0754c7] to-[#078bf0]">
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-pink-400/70" />
            <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-500/50" />

            <div className="relative z-10 flex min-h-92.5 items-center">
              <div className="w-[60%] px-7 py-10 md:px-10">
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  Start, switch, or advance
                  <br />
                  your career
                </h2>

                <p className="mt-5 text-sm leading-6 text-white/90 md:text-base">
                  Grow your skills with courses and programs
                  designed for today's careers.
                </p>

                <button className="mt-7 flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-gray-100 cursor-pointer">
                  Join for Free
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Person */}
              <div className="absolute bottom-0 right-6 text-[170px] leading-none">
                👩🏾
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          NEW AND POPULAR (YOUR EXISTING CODE)
      ====================================================== */}
      <section className="px-5 pb-16 md:px-8">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="mb-6 text-3xl font-bold text-[#073b78]">
            New and popular
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">

            {/* MOST POPULAR */}
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-5">
              <button className="mb-5 flex items-center gap-2 text-sm font-semibold text-blue-700 cursor-pointer">
                Most popular
                <ArrowRight size={17} />
              </button>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-2xl font-bold text-blue-600">
                    G
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Google</p>
                    <h3 className="mt-1 font-bold text-gray-900">Google AI</h3>
                    <p className="mt-2 text-xs text-gray-500">
                      Professional Certificate
                      <span className="mx-2">•</span>
                      <Star size={13} className="mr-1 inline fill-current text-amber-500" />
                      4.8
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HOT NEW RELEASES */}
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-5">
              <button className="mb-5 flex items-center gap-2 text-sm font-semibold text-blue-700 cursor-pointer">
                Hot new releases
                <ArrowRight size={17} />
              </button>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-2xl">
                    👨🏻
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">Dr. Ryan Ahmed</p>
                    <h3 className="mt-1 truncate font-bold text-gray-900">
                      Complete AI & Coding Program
                    </h3>
                    <p className="mt-2 text-xs text-gray-500">Specialization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TRENDING AI */}
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-5">
              <button className="mb-5 flex items-center gap-2 text-sm font-semibold text-blue-700 cursor-pointer">
                Trending AI courses
                <ArrowRight size={17} />
              </button>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xl font-bold text-orange-600">
                    AWS
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amazon Web Services</p>
                    <h3 className="mt-1 font-bold text-gray-900">
                      Generative AI Developer
                    </h3>
                    <p className="mt-2 text-xs text-gray-500">
                      Professional Certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 1: EXPLORE SKILL TRACKS                                  */}
      {/* ================================================================= */}
      <section className="max-w-[1600px] mx-auto px-5 md:px-8 py-12">
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
          EXPLORE SKILL TRACKS
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073b78] mt-2 mb-4">
          Choose the right Skills Track for your team's needs
        </h2>
        <p className="text-slate-600 max-w-4xl text-base sm:text-lg leading-relaxed mb-10">
          Each Skills Track offers a focused, measurable journey powered by a leading online learning platform for business[span_1](start_span)[span_1](end_span). Keep teams ahead with up-to-date content that drives agility, security, service excellence, and competitive advantage in a fast-changing economy[span_2](start_span)[span_2](end_span).
        </p>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-slate-200 rounded-xl p-6 bg-white flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-full h-36 bg-slate-50 rounded-lg mb-6 flex items-center justify-center p-4 border border-slate-100">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/005750fe/Data-Skills-Track.png"
                  alt="Data Skills Track"
                  className="max-h-24 max-w-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                UNCOVER INSIGHTS
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                Data Skills Track
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Strengthen data-driven decision-making with a leading online learning platform for business[span_3](start_span)[span_3](end_span). Access learning paths in analytics, data management, and automation to help teams enhance forecasting and predictive capabilities for smarter, faster decisions[span_4](start_span)[span_4](end_span).
              </p>
            </div>
            <a
              href="#master-data"
              className="inline-flex items-center text-blue-700 font-bold text-sm hover:underline"
            >
              Master essential data skills <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="border border-slate-200 rounded-xl p-6 bg-white flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-full h-36 bg-slate-50 rounded-lg mb-6 flex items-center justify-center p-4 border border-slate-100">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/005750fe/IT-Skills-Track.png"
                  alt="IT Skills Track"
                  className="max-h-24 max-w-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                MODERNISE SYSTEMS
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                IT Skills Track
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Protect your organization with cybersecurity, IT operations, and network administration learning paths[span_5](start_span)[span_5](end_span). Strengthen security and manage moving risks with scalable training built for enterprise agility[span_6](start_span)[span_6](end_span).
              </p>
            </div>
            <a
              href="#explore-it"
              className="inline-flex items-center text-blue-700 font-bold text-sm hover:underline"
            >
              Explore IT learning solutions <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="border border-slate-200 rounded-xl p-6 bg-white flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-full h-36 bg-slate-50 rounded-lg mb-6 flex items-center justify-center p-4 border border-slate-100">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/005750fe/GenAI-Skills-Track.png"
                  alt="GenAI Skills Track"
                  className="max-h-24 max-w-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                BOOST PRODUCTIVITY
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                GenAI Skills Track
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Empower every team through online learning solutions for business that drive innovation and productivity[span_7](start_span)[span_7](end_span). Deliver expert-led paths in generative AI to help professionals access AI skills, automate repetitive tasks, and accelerate innovation[span_8](start_span)[span_8](end_span).
              </p>
            </div>
            <a
              href="#explore-ai"
              className="inline-flex items-center text-blue-700 font-bold text-sm hover:underline"
            >
              Explore AI training <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 2: SKILLS-BASED LEARNING CAROUSEL                        */}
      {/* ================================================================= */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-[1600px] mx-auto px-5 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073b78] mb-6">
            Skills-based learning for teams of all sizes
          </h2>

          {/* Filter Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 border-b border-slate-200">
            {['Data Analysis', 'Software Engineering', 'Leadership & Management'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseData.map((course, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className={`h-36 bg-gradient-to-r ${course.bgGradient} p-4 flex items-center justify-center text-white text-center font-bold text-lg`}>
                    {course.badge}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 text-base mb-2 line-clamp-2">
                      {course.title}
                    </h4>
                    <p className="text-xs text-slate-500 mb-1">{course.type}</p>
                  </div>
                </div>
                <div className="px-4 pb-4 flex items-center text-xs text-slate-600">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1" />
                  <span className="font-bold mr-1">{course.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 3: PARTNER LOGOS BANNER                                  */}
      {/* ================================================================= */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-[1600px] mx-auto px-5 md:px-8 text-center">
          <p className="text-base font-bold text-slate-800 mb-8">
            Join over 4,700 companies that have partnered with Coursera to transform their workforce[span_9](start_span)[span_9](end_span).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-black text-xl tracking-widest text-slate-800">AIRBUS</span>
            <span className="font-serif font-bold text-lg text-slate-800">ESTĒE LAUDER</span>
            <span className="font-semibold text-lg text-slate-800">DANONE</span>
            <span className="font-extrabold text-xl tracking-wider text-red-600">MERCK</span>
            <span className="font-bold text-xl tracking-widest text-slate-800">TATA</span>
            <span className="font-bold text-lg text-slate-800">maxis</span>
            <span className="font-extrabold text-lg text-slate-800">Kroger</span>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 4: READY TO LEARN MORE / CONTACT FORM                    */}
      {/* ================================================================= */}
      <section className="max-w-[1600px] mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#073b78] mb-4">
              Ready to learn more?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Let's connect to discuss how Coursera can help you develop agile talent with job-aligned training to foster innovation, boost productivity, and drive business growth in a fast-changing world[span_10](start_span)[span_10](end_span). Discover how we partner with industry-leading companies to...
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name *"
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Work Email Address *"
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              />
            </div>
            <div>
              <select
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-600 bg-white"
              >
                <option value="">Organization Type *</option>
                <option value="enterprise">Enterprise</option>
                <option value="smb">Small & Medium Business</option>
                <option value="government">Government</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-md transition-colors text-sm cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 5: RESEARCH & REPORTS CARDS                              */}
      {/* ================================================================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-[1600px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Report Card 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                Coursera named a Leader in The Forrester Wave™ report[span_11](start_span)[span_11](end_span)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Learn more about why Coursera was named a Leader in Learning Experience Platforms[span_12](start_span)[span_12](end_span)...
              </p>
            </div>
            <a href="#forrester" className="inline-flex items-center text-blue-700 font-bold text-sm hover:underline">
              Forrester Wave Report <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Report Card 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                EU AI Act Playbook[span_13](start_span)[span_13](end_span)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Discover key insights and actionable guidelines to prepare your organization for EU AI regulations[span_14](start_span)[span_14](end_span)...
              </p>
            </div>
            <a href="#eu-ai" className="inline-flex items-center text-blue-700 font-bold text-sm hover:underline">
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Report Card 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                Global Skills Report 2026[span_15](start_span)[span_15](end_span)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Explore the top AI and human skill trends with insights from millions of learners worldwide[span_16](start_span)[span_16](end_span).
              </p>
            </div>
            <a href="#skills-report" className="inline-flex items-center text-blue-700 font-bold text-sm hover:underline">
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 6: FOOTER                                                */}
      {/* ================================================================= */}
      <footer className="bg-slate-100 border-t border-slate-200 pt-12 pb-8">
        <div className="max-w-[1600px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-4">What We Offer</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-700">Catalog</a></li>
                <li><a href="#" className="hover:text-blue-700">Coursera Plus</a></li>
                <li><a href="#" className="hover:text-blue-700">Professional Certificates</a></li>
                <li><a href="#" className="hover:text-blue-700">MasterTrack® Certificates</a></li>
                <li><a href="#" className="hover:text-blue-700">Degrees</a></li>
                <li><a href="#" className="hover:text-blue-700">For Enterprise</a></li>
                <li><a href="#" className="hover:text-blue-700">For Government</a></li>
                <li><a href="#" className="hover:text-blue-700">For Campus</a></li>
                <li><a href="#" className="hover:text-blue-700">Become a Partner</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-700">Learners</a></li>
                <li><a href="#" className="hover:text-blue-700">Partners</a></li>
                <li><a href="#" className="hover:text-blue-700">Beta Testers</a></li>
                <li><a href="#" className="hover:text-blue-700">The Coursera Podcast</a></li>
                <li><a href="#" className="hover:text-blue-700">Tech Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-4">More</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-700">Help</a></li>
                <li><a href="#" className="hover:text-blue-700">Accessibility</a></li>
                <li><a href="#" className="hover:text-blue-700">Contact</a></li>
                <li><a href="#" className="hover:text-blue-700">Articles</a></li>
                <li><a href="#" className="hover:text-blue-700">Directory</a></li>
                <li><a href="#" className="hover:text-blue-700">Affiliates</a></li>
                <li><a href="#" className="hover:text-blue-700">Modern Slavery Statement</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-4">Get the App</h4>
              <div className="space-y-2">
                <button className="w-full py-2 px-4 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer">
                  Download on App Store
                </button>
                <button className="w-full py-2 px-4 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer">
                  Get it on Google Play
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
            <p>© 2026 EduPulse Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Individual;