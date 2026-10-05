import DegreeLevelCard from "../DegreeLevelCard/DegreeLevelCard";
import { degreeLevels } from "../../data/degrees";

function ProgramLevels() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-20">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#073b78]">
            Explore your options
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Browse degrees by program level
          </h2>

          <p className="mt-4 text-lg leading-7 text-gray-600">
            Find a degree that matches where you are in your education and
            where you want your career to go.
          </p>

        </div>


        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {degreeLevels.map((level, index) => (
            <DegreeLevelCard
              key={index}
              title={level.title}
              description={level.description}
              programs={level.programs}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProgramLevels;