import React, { useState } from "react";
import {
  FaMoon,
  FaBell,
  FaLock,
  FaGlobe,
  FaUser,
  FaSave,
  FaSignOutAlt,
  FaTrash,
} from "react-icons/fa";

function Settings() {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    security: true,
    twoFactor: false,
  });

  const handleChange = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-10">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            ⚙ Settings
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your account preferences and security.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left */}

          <div className="space-y-6">

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

              <h2 className="text-2xl font-bold mb-5 flex items-center gap-3">
                <FaUser className="text-cyan-400" />
                Profile
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-4 bg-slate-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 bg-slate-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full bg-slate-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
              />

            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

              <h2 className="text-2xl font-bold mb-5">
                🌐 Language
              </h2>

              <select className="w-full bg-slate-800 p-3 rounded-xl outline-none">
                <option>English</option>
                <option>Uzbek</option>
                <option>Russian</option>
              </select>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-6">

            {/* Switches */}

            {[
              {
                icon: <FaMoon />,
                title: "Dark Mode",
                key: "darkMode",
              },
              {
                icon: <FaBell />,
                title: "Notifications",
                key: "notifications",
              },
              {
                icon: <FaLock />,
                title: "Security Alerts",
                key: "security",
              },
              {
                icon: <FaGlobe />,
                title: "Two Factor Authentication",
                key: "twoFactor",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="bg-slate-900 rounded-2xl p-5 border border-slate-800 flex justify-between items-center hover:border-cyan-500 duration-300"
              >
                <div className="flex items-center gap-4">

                  <div className="text-cyan-400 text-2xl">
                    {item.icon}
                  </div>

                  <span className="text-lg">
                    {item.title}
                  </span>

                </div>

                <input
                  type="checkbox"
                  checked={settings[item.key]}
                  onChange={() => handleChange(item.key)}
                  className="w-5 h-5 accent-cyan-500"
                />

              </div>
            ))}

            {/* Buttons */}

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 duration-300">

              <FaSave />

              Save Changes

            </button>

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 duration-300">

              <FaSignOutAlt />

              Logout

            </button>

            <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 duration-300">

              <FaTrash />

              Delete Account

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Settings;