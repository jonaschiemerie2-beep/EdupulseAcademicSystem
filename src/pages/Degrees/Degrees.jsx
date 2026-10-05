import DegreeHero from "../../components/DegreeHero/DegreeHero";
import DegreeFilters from "../../components/DegreeFilters/DegreeFilters";
import ProgramLevels from "../../components/ProgramLevels/ProgramLevels";
import UniversityShowcase from "../../components/UniversityShowCase/UniversityShowCase";
import DegreeExperience from "../../components/DegreeExperience/DegreeExperience";

function Degrees() {
  return (
    <div className="min-h-screen bg-white">

      <DegreeHero />

      <DegreeFilters />

      <ProgramLevels />
        
      <UniversityShowcase />

      <DegreeExperience />
    </div>
  );
}

export default Degrees;