import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ChevronDown, Menu, X, Sparkles } from "lucide-react";
import AuthModal from "../auth/AuthModal";

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);

    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState("login");

    const openLogin = () => {
        setAuthMode("login");
        setIsAuthOpen(true);
    };

    const openSignUp = () => {
        setAuthMode("signup");
        setIsAuthOpen(true);
    };

    const location = useLocation();

    const getAudience = () => {
        if (location.pathname.startsWith("/individual")) {
            return "Individual";
        }

        if (location.pathname.startsWith("/business")) {
            return "Business";
        }

        if (location.pathname.startsWith("/university")) {
            return "University";
        }

        if (location.pathname.startsWith("/government")) {
            return "Government";
        }

        return "";
    };

    const currentAudience = getAudience();

    return (
        <header className="w-full bg-white sticky top-0 z-50">

            {/* =====================================================
                TOP AUDIENCE BAR
            ====================================================== */}

            <div className="bg-black text-white">
                <div className="mx-auto flex max-w-[1600px] items-center gap-10 px-6">

                    {/* For Individuals */}
                    <NavLink
                        to="/individual"
                        className={({ isActive }) =>
                            `group relative py-4 text-base font-bold transition-all duration-200 ${
                                isActive
                                    ? "text-white"
                                    : "text-white/85 hover:text-white"
                            }`
                        }
                    >
                        For Individuals

                        <span
                            className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-white transition-all duration-200 ${
                                location.pathname.startsWith("/individual")
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </NavLink>

                    {/* For Businesses */}
                    <NavLink
                        to="/business"
                        className={({ isActive }) =>
                            `group relative py-4 text-base font-bold transition-all duration-200 ${
                                isActive
                                    ? "text-white"
                                    : "text-white/85 hover:text-white"
                            }`
                        }
                    >
                        For Businesses

                        <span
                            className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-white transition-all duration-200 ${
                                location.pathname.startsWith("/business")
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </NavLink>

                    {/* For Universities */}
                    <NavLink
                        to="/university"
                        className={({ isActive }) =>
                            `group relative py-4 text-base font-bold transition-all duration-200 ${
                                isActive
                                    ? "text-white"
                                    : "text-white/85 hover:text-white"
                            }`
                        }
                    >
                        For University

                        <span
                            className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-white transition-all duration-200 ${
                                location.pathname.startsWith("/university")
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </NavLink>

                    {/* For Governments */}
                    <NavLink
                        to="/government"
                        className={({ isActive }) =>
                            `group relative py-4 text-base font-bold transition-all duration-200 ${
                                isActive
                                    ? "text-white"
                                    : "text-white/85 hover:text-white"
                            }`
                        }
                    >
                        For Governments

                        <span
                            className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-white transition-all duration-200 ${
                                location.pathname.startsWith("/government")
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </NavLink>

                </div>
            </div>


            {/* =====================================================
                SECOND / MAIN NAVBAR
                ONLY SHOWS ON INDIVIDUAL
            ====================================================== */}

            {(currentAudience === "Individual" ||location.pathname.startsWith("/degree")) && (
              
                <div className="border-b border-gray-200  bg-white">

                    <div className="mx-auto flex max-w-[1600px] items-center gap-6 px-6 py-5">

                        {/* Logo + Current Audience */}
                        <div className="flex shrink-0 items-center gap-2">

                            <Link
                                to="/"
                                className="text-3xl font-bold tracking-tight text-blue-700"
                            >
                                EduPulse
                            </Link>

                            {currentAudience && (
                                <span className="text-xs italic text-gray-500">
                                    {currentAudience}
                                </span>
                            )}

                        </div>


                        {/* =====================================================
                            EXPLORE DROPDOWN
                        ====================================================== */}

                        <div className="relative hidden lg:block">

                            <button
                                onClick={() => setExploreOpen(!exploreOpen)}
                                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-700"
                            >
                                Explore

                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${
                                        exploreOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {exploreOpen && (
                                <div className="absolute left-1/2 top-14 z-50 w-[1100px] -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-8 shadow-2xl">

                                    <div className="grid grid-cols-4 gap-10">

                                        {/* Explore Roles */}
                                        <div>

                                            <h3 className="mb-4 text-sm font-bold text-gray-900">
                                                Explore roles
                                            </h3>

                                            <div className="space-y-2 text-sm text-gray-700">

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Data Analyst
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Project Manager
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Cyber Security Analyst
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Data Scientist
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Business Intelligence Analyst
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Digital Marketing Specialist
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    UI / UX Designer
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Machine Learning Engineer
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Social Media Specialist
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Computer Support Specialist
                                                </Link>

                                                <Link
                                                    className="mt-3 block font-medium underline hover:text-blue-700"
                                                    to="/courses"
                                                >
                                                    View all
                                                </Link>

                                            </div>
                                        </div>


                                        {/* Explore Categories */}
                                        <div>

                                            <h3 className="mb-4 text-sm font-bold text-gray-900">
                                                Explore categories
                                            </h3>

                                            <div className="space-y-2 text-sm text-gray-700">

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Artificial Intelligence
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Business
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Data Science
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Information Technology
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Computer Science
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Healthcare
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Physical Science and Engineering
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Personal Development
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Social Sciences
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Language Learning
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Arts and Humanities
                                                </Link>

                                                <Link
                                                    className="mt-3 block font-medium underline hover:text-blue-700"
                                                    to="/courses"
                                                >
                                                    View all
                                                </Link>

                                            </div>
                                        </div>


                                        {/* Certificates + Degrees */}
                                        <div>

                                            <h3 className="mb-4 text-sm font-bold text-gray-900">
                                                Earn a Professional Certificate
                                            </h3>

                                            <div className="space-y-2 text-sm text-gray-700">

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Business
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Computer Science
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Data Science
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Information Technology
                                                </Link>

                                                <Link
                                                    className="mt-3 block font-medium underline hover:text-blue-700"
                                                    to="/courses"
                                                >
                                                    View all
                                                </Link>

                                            </div>


                                            <h3 className="mb-4 mt-8 text-sm font-bold text-gray-900">
                                                Earn an online degree
                                            </h3>

                                            <div className="space-y-2 text-sm text-gray-700">

                                                <Link
                                                    className="block hover:text-blue-700"
                                                    to="/degrees"
                                                >
                                                    Bachelor's Degrees
                                                </Link>

                                                <Link
                                                    className="block hover:text-blue-700"
                                                    to="/degrees"
                                                >
                                                    Master's Degrees
                                                </Link>

                                                <Link
                                                    className="block hover:text-blue-700"
                                                    to="/degrees"
                                                >
                                                    University Certificates
                                                </Link>

                                                <Link
                                                    className="mt-3 block font-medium underline hover:text-blue-700"
                                                    to="/degrees"
                                                >
                                                    View all
                                                </Link>

                                            </div>

                                        </div>


                                        {/* Trending Skills */}
                                        <div>

                                            <h3 className="mb-4 text-sm font-bold text-gray-900">
                                                Explore trending skills
                                            </h3>

                                            <div className="space-y-2 text-sm text-gray-700">

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Python
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Artificial Intelligence
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Excel
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Machine Learning
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    SQL
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Project Management
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Power BI
                                                </Link>

                                                <Link className="block hover:text-blue-700" to="/courses">
                                                    Marketing
                                                </Link>

                                            </div>


                                            <h3 className="mb-4 mt-8 text-sm font-bold text-gray-900">
                                                Prepare for a certification exam
                                            </h3>

                                            <Link
                                                to="/courses"
                                                className="text-sm font-medium underline hover:text-blue-700"
                                            >
                                                View all
                                            </Link>

                                        </div>

                                    </div>


                                    {/* Bottom line */}
                                    <div className="mt-8 border-t border-gray-200 pt-5 text-sm text-gray-600">

                                        Not sure where to begin?

                                        <Link
                                            to="/courses"
                                            className="ml-2 font-medium underline hover:text-blue-700"
                                        >
                                            Browse free courses
                                        </Link>

                                        <span className="mx-2">or</span>

                                        <Link
                                            to="/resources"
                                            className="font-medium underline hover:text-blue-700"
                                        >
                                            Learn more about EduPulse
                                        </Link>

                                    </div>

                                </div>
                            )}

                        </div>


                        {/* Degrees */}
                        <Link
                            to="/degrees"
                            className="hidden text-sm font-medium text-gray-800 hover:text-blue-700 lg:block"
                        >
                            Degrees
                        </Link>


                        {/* Search Bar */}
                        <div className="hidden flex-1 lg:block">

                            <div className="mx-auto flex max-w-3xl items-center rounded-full border border-gray-300 bg-white px-5 py-3 shadow-sm focus-within:border-blue-500">

                                <Search
                                    size={22}
                                    className="mr-3 shrink-0 text-gray-700"
                                />

                                <input
                                    type="text"
                                    placeholder="What do you want to learn?"
                                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500"
                                />

                            </div>

                        </div>


                        {/* Sparkles */}
                        <div className="hidden shrink-0 items-center gap-6 lg:flex">

                            <Sparkles
                                size={23}
                                className="text-blue-700"
                            />

                        </div>


                        {/* Log In */}
                        <button
                            type="button"
                            onClick={openLogin}
                            className="text-sm font-semibold text-blue-700 hover:text-blue-800 px-3 py-2 cursor-pointer"
                        >
                            Log In
                        </button>


                        {/* Join for Free */}
                        <button
                            type="button"
                            onClick={openSignUp}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer"
                        >
                            Join for Free
                        </button>


                        {/* Mobile Button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="ml-auto lg:hidden"
                        >
                            {mobileMenu ? (
                                <X size={28} />
                            ) : (
                                <Menu size={28} />
                            )}
                        </button>

                    </div>


                    {/* =====================================================
                        MOBILE MENU
                    ====================================================== */}

                    {mobileMenu && (
                        <div className="border-t border-gray-200 px-6 py-5 lg:hidden">

                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="What do you want to learn?"
                                    className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none"
                                />
                            </div>

                            <div className="flex flex-col">

                                <Link
                                    to="/individual"
                                    onClick={() => setMobileMenu(false)}
                                    className="border-b py-4 font-medium"
                                >
                                    For Individual
                                </Link>

                                <Link
                                    to="/business"
                                    onClick={() => setMobileMenu(false)}
                                    className="border-b py-4 font-medium"
                                >
                                    For Businesses
                                </Link>

                                <Link
                                    to="/universities"
                                    onClick={() => setMobileMenu(false)}
                                    className="border-b py-4 font-medium"
                                >
                                    For Universities
                                </Link>

                                <Link
                                    to="/government"
                                    onClick={() => setMobileMenu(false)}
                                    className="border-b py-4 font-medium"
                                >
                                    For Governments
                                </Link>

                                <Link
                                    to="/courses"
                                    onClick={() => setMobileMenu(false)}
                                    className="border-b py-4 font-medium"
                                >
                                    Courses
                                </Link>

                                <Link
                                    to="/login"
                                    onClick={() => setMobileMenu(false)}
                                    className="mt-5 rounded-lg border px-5 py-3 text-center font-medium"
                                >
                                    Log In
                                </Link>

                                <Link
                                    to="/register"
                                    onClick={() => setMobileMenu(false)}
                                    className="mt-3 rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white"
                                >
                                    Join for Free
                                </Link>

                            </div>

                        </div>
                    )}

                </div>
            )}


            {/* Auth Modal */}
            <AuthModal
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
                initialMode={authMode}
            />

        </header>
    );
}

export default Navbar;  