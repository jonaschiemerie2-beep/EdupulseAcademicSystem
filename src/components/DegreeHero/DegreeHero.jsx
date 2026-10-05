function DegreeHero() {
  return (
    <section className="bg-[#073b78] px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-4xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-100">
            EduPulse Degrees
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Earn a degree online from leading universities
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
            Build the knowledge and skills you need for your future with
            flexible online degree programs from universities and institutions
            around the world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-md bg-white px-6 py-3 font-semibold text-[#073b78] transition hover:bg-gray-100">
              Explore degrees
            </button>

            <button className="rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#073b78]">
              Learn how degrees work
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DegreeHero;