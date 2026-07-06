import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaUserGraduate,
  FaArrowRight,
  FaStar,
  FaUsers,
} from "react-icons/fa";

function Home() {
  return (
    <section className="bg-slate-950 text-white">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Learn <span className="text-cyan-400">Frontend</span> <br />
            Build Your Future
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Learn React, JavaScript and Tailwind CSS with practical projects.
            Improve your skills and build modern websites.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 duration-300 flex items-center gap-2">
              Get Started
              <FaArrowRight />
            </button>

            <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Learning"
            className="rounded-2xl"
          />
        </div>

      </div>

      {/* Statistics */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

        <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 duration-300">
          <FaUsers className="text-4xl text-cyan-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold">10K+</h2>
          <p className="text-gray-400">Students</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 duration-300">
          <FaCode className="text-4xl text-cyan-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold">120+</h2>
          <p className="text-gray-400">Projects</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 duration-300">
          <FaStar className="text-4xl text-cyan-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold">4.9</h2>
          <p className="text-gray-400">Rating</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 duration-300">
          <FaLaptopCode className="text-4xl text-cyan-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold">50+</h2>
          <p className="text-gray-400">Courses</p>
        </div>

      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 duration-300">
            <FaLaptopCode className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-2xl font-bold mb-3">Modern Courses</h3>
            <p className="text-gray-400">
              Learn the latest frontend technologies with real projects.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 duration-300">
            <FaUserGraduate className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-2xl font-bold mb-3">Expert Mentors</h3>
            <p className="text-gray-400">
              Learn from experienced developers and improve your skills.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 duration-300">
            <FaCode className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-2xl font-bold mb-3">Real Projects</h3>
            <p className="text-gray-400">
              Build portfolio-ready applications using React.
            </p>
          </div>

        </div>

      </div>

      {/* Popular Courses */}
      <div className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "React JS",
            "JavaScript",
            "Tailwind CSS",
          ].map((course) => (
            <div
              key={course}
              className="bg-slate-900 rounded-2xl overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src="https://picsum.photos/400/220"
                alt={course}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{course}</h3>

                <p className="text-gray-400 mt-3">
                  Beginner to advanced level course with practical examples.
                </p>

                <button className="mt-5 bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>

   

    </section>
  );
}

export default Home;