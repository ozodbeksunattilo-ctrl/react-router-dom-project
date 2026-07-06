import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <div>

          <h1 className="text-5xl font-bold mb-5">
            Contact Us
          </h1>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            We'd love to hear from you. Whether you have a question,
            feedback, or a new project idea, feel free to contact us.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500 duration-300">

              <div className="bg-cyan-500 p-4 rounded-xl text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-400">
                  +998 90 123 45 67
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500 duration-300">

              <div className="bg-cyan-500 p-4 rounded-xl text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">
                  info@example.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500 duration-300">

              <div className="bg-cyan-500 p-4 rounded-xl text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-gray-400">
                  Tashkent, Uzbekistan
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500 duration-300">

              <div className="bg-cyan-500 p-4 rounded-xl text-xl">
                <FaGlobe />
              </div>

              <div>
                <h3 className="font-bold">Website</h3>
                <p className="text-gray-400">
                  www.mywebsite.com
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <form className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl space-y-6">

          <h2 className="text-3xl font-bold mb-5">
            Send Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            className="w-full bg-slate-800 p-4 rounded-xl outline-none resize-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 transition duration-300"
          >
            <FaPaperPlane />
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;