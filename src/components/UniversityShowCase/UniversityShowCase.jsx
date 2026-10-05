import UniversityCard from "../UniversityCard/UniversityCard";
import { universities } from "../../data/degrees";

function UniversityShowcase() {
  return (
    <section className="px-6 py-16 md:py-20">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#073b78]">
            World-class education
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Learn from leading universities
          </h2>

          <p className="mt-4 text-lg leading-7 text-gray-600">
            Explore online degree programs from universities and institutions
            around the world.
          </p>

        </div>


        {/* University cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {universities.map((university, index) => (
            <UniversityCard
              key={index}
              university={university}
            />
          ))}

        </div>


        {/* View all */}
        <div className="mt-10 text-center">

          <button className="rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-50">
            View all degree programs
          </button>

        </div>

      </div>

    </section>
  );
}

export default UniversityShowcase;