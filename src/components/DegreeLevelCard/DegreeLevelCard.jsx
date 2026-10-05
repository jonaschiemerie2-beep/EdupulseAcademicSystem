function DegreeLevelCard({ title, description, programs }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 leading-6 text-gray-600">
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {programs.map((program, index) => (
          <button
            key={index}
            className="block text-left text-sm font-medium text-[#073b78] hover:underline"
          >
            {program} →
          </button>
        ))}
      </div>

      <button className="mt-7 font-semibold text-gray-900 underline underline-offset-4">
        Explore {title}
      </button>

    </div>
  );
}

export default DegreeLevelCard;