import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaSearch, FaGraduationCap } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "User", path: "/user" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-lg shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-cyan-400"
        >
          <FaGraduationCap />
          LearnHub
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "text-gray-300 hover:text-cyan-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {/* Search */}
          <div className="flex items-center bg-slate-800 rounded-lg px-3 py-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>

          <button className="px-4 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black duration-300">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 duration-300">
            Sign Up
          </button>

          <FaUserCircle
            size={34}
            className="text-cyan-400 cursor-pointer hover:scale-110 duration-300"
          />
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-2xl"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4">

          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenu(false)}
              className="block hover:text-cyan-400"
            >
              {item.name}
            </NavLink>
          ))}

          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-slate-700 outline-none"
          />

          <button className="w-full py-2 rounded bg-cyan-500 hover:bg-cyan-600">
            Login
          </button>

          <button className="w-full py-2 rounded border border-cyan-400 hover:bg-cyan-400 hover:text-black">
            Sign Up
          </button>

        </div>
      )}
    </header>
  );
}

export default Header;