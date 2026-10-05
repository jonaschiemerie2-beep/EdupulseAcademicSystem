function DegreeExperience() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#073b78]">
              The online degree experience
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Learn on your terms and build skills for your future
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Online degrees give you the flexibility to learn while balancing
              your education with work, family, and other responsibilities.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Flexible learning
                </h3>
                <p className="mt-2 leading-6 text-gray-600">
                  Study from wherever you are and fit your learning around
                  your schedule.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Learn from experienced educators
                </h3>
                <p className="mt-2 leading-6 text-gray-600">
                  Connect with university instructors and learn through
                  structured online programs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Build career-ready skills
                </h3>
                <p className="mt-2 leading-6 text-gray-600">
                  Develop knowledge and practical skills that can help you
                  progress toward your professional goals.
                </p>
              </div>
            </div>

            <button className="mt-8 rounded-md bg-[#073b78] px-6 py-3 font-semibold text-white transition hover:bg-[#052d5d]">
              Explore degree programs
            </button>
          </div>

          {/* Right side */}
          <div className="relative">
            <div className="rounded-2xl bg-[#073b78] p-8 text-white shadow-xl md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                Your learning journey
              </p>

              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                A degree designed around your goals
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#073b78]">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold">Choose your program</h4>
                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      Find a degree that matches your interests and career
                      direction.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#073b78]">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold">Learn online</h4>
                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      Complete lessons, assignments, projects, and assessments
                      through your online learning environment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#073b78]">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold">Earn your degree</h4>
                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      Complete your program and earn a degree from your
                      university.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DegreeExperience; 