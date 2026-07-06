import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 text-3xl font-bold text-cyan-400">
            <FaGraduationCap />
            LearnHub
          </div>

          <p className="text-gray-400 mt-4 leading-7">
            Learn modern web development with React, JavaScript and Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link className="hover:text-cyan-400 duration-300" to="/">
              Home
            </Link>

            <Link className="hover:text-cyan-400 duration-300" to="/about">
              About
            </Link>

            <Link className="hover:text-cyan-400 duration-300" to="/user">
              User
            </Link>

            <Link className="hover:text-cyan-400 duration-300" to="/settings">
              Settings
            </Link>

            <Link className="hover:text-cyan-400 duration-300" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>

          <p className="text-gray-400 mb-4">
            Subscribe to receive the latest updates.
          </p>

          <input
            type="email"
            placeholder="Your email..."
            className="w-full p-3 rounded-lg bg-slate-800 outline-none border border-slate-700 focus:border-cyan-400"
          />

          <button className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 duration-300 py-3 rounded-lg font-semibold">
            Subscribe
          </button>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-2xl">

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-full hover:bg-pink-500 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-full hover:bg-sky-500 duration-300"
            >
              <FaTelegram />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-3 rounded-full hover:bg-gray-700 duration-300"
            >
              <FaGithub />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 py-5 text-center text-gray-500">
        © 2026 LearnHub. All Rights Reserved. | Made with ❤️ using React & Tailwind CSS
      </div>
    </footer>
  );
}

export default Footer;