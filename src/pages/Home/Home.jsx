function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Learn without limits
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Learn the skills you need to build your future.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Explore courses, professional certificates, and learning
              opportunities designed to help you grow your knowledge and
              achieve your goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-md bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
                Explore courses
              </button>

              <button className="rounded-md border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50">
                Learn more
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Learning Categories */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Explore learning opportunities
          </h2>

          <p className="mt-3 text-gray-600">
            Find learning experiences designed for different goals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Individual
              </h3>
              <p className="mt-3 text-gray-600">
                Build skills and advance your career through flexible learning.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Universities
              </h3>
              <p className="mt-3 text-gray-600">
                Connect learners with university programs and opportunities.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Business
              </h3>
              <p className="mt-3 text-gray-600">
                Help organizations develop the skills of their teams.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Government
              </h3>
              <p className="mt-3 text-gray-600">
                Create learning opportunities for communities and workforces.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;