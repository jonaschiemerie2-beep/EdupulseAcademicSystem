import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Individual from "../pages/Individual/Individual";
import Degrees from "../pages/Degrees/Degrees";
import Business from "../pages/Business/Business";
import University from "../pages/University/University";
import Government from "../pages/Government/Government";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
     <Route path="/" element={<Home />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/business" element={<Business />} />
        <Route path="/degrees" element={<Degrees />} />
        <Route path="/university" element={<University />} />
        <Route path="/government" element={<Government />} />

      </Route>
    </Routes>
  );
}

export default AppRoutes;



// import { Routes, Route } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";

// import Home from "../pages/Home/Home";

// import Individual from "../pages/Individual/Individual";
// import OnlineDegrees from "../pages/Individual/OnlineDegrees";
// import IndividualCourses from "../pages/Individual/Courses";
// import Certificates from "../pages/Individual/Certificates";

// import Universities from "../pages/Universities/Universities";
// import UniversityPrograms from "../pages/Universities/UniversityPrograms";
// import UniversityPartners from "../pages/Universities/UniversityPartners";

// import Business from "../pages/Business/Business";
// import Enterprise from "../pages/Business/Enterprise";
// import BusinessResources from "../pages/Business/BusinessResources";

// import Government from "../pages/Government/Government";
// import GovernmentPrograms from "../pages/Government/GovernmentPrograms";
// import GovernmentResources from "../pages/Government/GovernmentResources";

// import Courses from "../pages/Courses/Courses";
// import Resources from "../pages/Resources/Resources";

// function AppRoutes() {
//   return (
//     <Routes>

//       <Route element={<MainLayout />}>

//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* Individual */}
//         <Route path="/individual" element={<Individual />} />

//         <Route
//           path="/individual/online-degrees"
//           element={<OnlineDegrees />}
//         />

//         <Route
//           path="/individual/courses"
//           element={<IndividualCourses />}
//         />

//         <Route
//           path="/individual/certificates"
//           element={<Certificates />}
//         />

//         {/* Universities */}
//         <Route
//           path="/universities"
//           element={<Universities />}
//         />

//         <Route
//           path="/universities/programs"
//           element={<UniversityPrograms />}
//         />

//         <Route
//           path="/universities/partners"
//           element={<UniversityPartners />}
//         />

//         {/* Business */}
//         <Route
//           path="/business"
//           element={<Business />}
//         />

//         <Route
//           path="/business/enterprise"
//           element={<Enterprise />}
//         />

//         <Route
//           path="/business/resources"
//           element={<BusinessResources />}
//         />

//         {/* Government */}
//         <Route
//           path="/government"
//           element={<Government />}
//         />

//         <Route
//           path="/government/programs"
//           element={<GovernmentPrograms />}
//         />

//         <Route
//           path="/government/resources"
//           element={<GovernmentResources />}
//         />

//         {/* Courses */}
//         <Route
//           path="/courses"
//           element={<Courses />}
//         />

//         {/* Resources */}
//         <Route
//           path="/resources"
//           element={<Resources />}
//         />

//       </Route>

//     </Routes>
//   );
// }

// export default AppRoutes;