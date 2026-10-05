function DegreeProgramCard({ program }) {
  return (
    <div className="min-w-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:min-w-[350px]">

      {/* University Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 p-5">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 font-bold text-[#073b78]">
          {program.university.charAt(0)}
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">
            {program.university}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            University Partner
          </p>
        </div>

      </div>


      {/* Program Information */}
      <div className="p-5">

        <p className="text-sm font-medium text-blue-700">
          {program.type}
        </p>

        <h3 className="mt-2 text-xl font-bold leading-7 text-gray-900">
          {program.program}
        </h3>

        <p className="mt-4 text-sm leading-6 text-gray-600">
          {program.description}
        </p>


        {/* Bottom information */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">

          <div>
            <p className="text-xs text-gray-500">
              Duration
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-900">
              {program.duration}
            </p>
          </div>

          <button className="font-semibold text-blue-700 hover:text-blue-900">
            View program →
          </button>

        </div>

      </div>

    </div>
  );
}

export default DegreeProgramCard;