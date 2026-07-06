import React, { useState } from "react";
import { FaTrash, FaUserPlus, FaUsers, FaSearch } from "react-icons/fa";

function User() {
  const [users, setUsers] = useState([
    "Ali",
    "Vali",
    "Hasan",
    "Husan",
    "John",
    "Emily",
    "James",
    "Sophia",
    "Michael",
    "Emma",
    "Daniel",
    "Olivia",
  ]);

  const [newUser, setNewUser] = useState("");
  const [search, setSearch] = useState("");

  const addUser = () => {
    if (newUser.trim() === "") return;

    setUsers([...users, newUser]);
    setNewUser("");
  };

  const deleteUser = (name) => {
    setUsers(users.filter((user) => user !== name));
  };

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-10">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">

        <div>
          <h1 className="text-5xl font-bold">
            User Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all users easily
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-2xl">
          <FaUsers className="text-cyan-400 text-2xl" />
          <div>
            <p className="text-sm text-gray-400">
              Total Users
            </p>

            <h2 className="text-2xl font-bold">
              {users.length}
            </h2>
          </div>
        </div>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search User..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-800 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-cyan-500"
        />

      </div>

      {/* Add User */}

      <div className="flex gap-3 mb-10">

        <input
          type="text"
          placeholder="Enter User Name..."
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="flex-1 bg-slate-800 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <button
          onClick={addUser}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 rounded-xl flex items-center gap-2 duration-300"
        >
          <FaUserPlus />
          Add
        </button>

      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">

        {filteredUsers.map((user) => (

          <div
            key={user}
            className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-700 hover:border-cyan-500 hover:-translate-y-2 duration-300 group"
          >

            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-4xl font-bold mx-auto shadow-lg">
              {user[0]}
            </div>

            <h2 className="text-2xl font-bold text-center mt-5">
              {user}
            </h2>

            <p className="text-gray-400 text-center mt-2">
              Frontend Developer
            </p>

            <button
              onClick={() => deleteUser(user)}
              className="mt-6 w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl flex justify-center items-center gap-2 duration-300"
            >
              <FaTrash />
              Delete
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default User;