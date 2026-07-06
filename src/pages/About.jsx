import React from "react";
import {
  FaUsers,
  FaLaptopCode,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

function About() {
  return (
    <section className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <div className="text-center py-20 px-5">
        <h1 className="text-5xl font-bold text-cyan-400">
          About LearnHub
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
          LearnHub is a modern learning platform built with React Router DOM
          and Tailwind CSS. Our goal is to help students become professional
          developers through simple and practical lessons.
        </p>
      </div>

      {/* Statistics */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-5">

        <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 duration-300">
          <h2 className="text-4xl font-bold text-cyan-400">10K+</h2>
          <p className="text-gray-400 mt-2">Students</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 duration-300">
          <h2 className="text-4xl font-bold text-cyan-400">120+</h2>
          <p className="text-gray-400 mt-2">Courses</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 duration-300">
          <h2 className="text-4xl font-bold text-cyan-400">40+</h2>
          <p className="text-gray-400 mt-2">Teachers</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 duration-300">
          <h2 className="text-4xl font-bold text-cyan-400">98%</h2>
          <p className="text-gray-400 mt-2">Success Rate</p>
        </div>

      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto py-20 px-5">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl hover:-translate-y-2 duration-300">
            <FaLaptopCode className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Modern Technology
            </h3>
            <p className="text-gray-400">
              Learn React, JavaScript, Tailwind CSS and other modern web
              technologies.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl hover:-translate-y-2 duration-300">
            <FaBookOpen className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Easy Learning
            </h3>
            <p className="text-gray-400">
              Step-by-step lessons with practical projects to improve your
              skills.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl hover:-translate-y-2 duration-300">
            <FaAward className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Professional Mentors
            </h3>
            <p className="text-gray-400">
              Learn from experienced developers and build real-world projects.
            </p>
          </div>

        </div>

      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-5 pb-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Our Community
        </h2>

        <div className="bg-slate-900 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">

          <FaUsers className="text-8xl text-cyan-400" />

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Join Thousands of Learners
            </h3>

            <p className="text-gray-400 leading-8">
              Every day hundreds of students improve their programming skills
              with LearnHub. Build your portfolio, prepare for interviews,
              and become a confident frontend developer.
            </p>

            <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold duration-300">
              Join Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;