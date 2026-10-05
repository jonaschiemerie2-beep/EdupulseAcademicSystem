import DegreeProgramCard from "../DegreeProgramCard/DegreeProgramCard";
import { degreePrograms } from "../../data/degrees";

function DegreeFilters() {
  return (
    <section className="px-6 py-16 md:py-20">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Find an online degree program
          </h2>

          <p className="mt-4 text-lg leading-7 text-gray-600">
            Explore degree programs from universities and institutions
            offering flexible online learning.
          </p>

        </div>


        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-4">

          <button className="flex min-w-[190px] items-center justify-between rounded-md border border-gray-300 bg-white px-5 py-3 text-left text-sm font-medium text-gray-800 hover:border-gray-500">
            Program Level
            <span>⌄</span>
          </button>

          <button className="flex min-w-[190px] items-center justify-between rounded-md border border-gray-300 bg-white px-5 py-3 text-left text-sm font-medium text-gray-800 hover:border-gray-500">
            Subject
            <span>⌄</span>
          </button>

        </div>


        {/* Cards */}
        <div className="mt-10 flex gap-6 overflow-x-auto pb-5">

          {degreePrograms.map((program, index) => (
            <DegreeProgramCard
              key={index}
              program={program}
            />
          ))}

        </div>


        {/* Carousel indicators */}
        <div className="mt-3 flex items-center justify-center gap-2">

          <span className="h-2 w-8 rounded-full bg-[#073b78]" />

          <span className="h-2 w-2 rounded-full bg-gray-300" />

          <span className="h-2 w-2 rounded-full bg-gray-300" />

          <span className="h-2 w-2 rounded-full bg-gray-300" />

        </div>

      </div>

    </section>
  );
}

export default DegreeFilters;