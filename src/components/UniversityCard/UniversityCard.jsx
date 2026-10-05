function UniversityCard({ university }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* University banner */}
      <div className="flex h-32 items-center justify-center bg-gray-100">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#073b78] shadow-sm">
          {university.logo}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-sm font-semibold text-[#073b78]">
          {university.university}
        </p>

        <h3 className="mt-3 text-xl font-bold leading-7 text-gray-900">
          {university.program}
        </h3>

        <p className="mt-4 text-sm leading-6 text-gray-600">
          {university.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <div>
            <p className="text-xs text-gray-500">
              Degree
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-900">
              {university.degree}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Format
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-900">
              Online
            </p>
          </div>

        </div>

        <button className="mt-6 w-full rounded-md border border-[#073b78] px-4 py-3 font-semibold text-[#073b78] transition hover:bg-[#073b78] hover:text-white">
          View program
        </button>

      </div>

    </article>
  );
}

export default UniversityCard;