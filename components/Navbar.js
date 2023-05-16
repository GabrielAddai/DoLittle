import React from "react";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <img src="/google_logo.png" alt="Google" className="w-10 h-10 mr-2" />
        <span className="text-lg font-bold">Google</span>
      </div>
      <div>
        <input
          type="text"
          className="px-2 py-1 border border-gray-300 rounded"
          placeholder="Search..."
        />
        <button className="px-4 py-2 ml-2 font-semibold text-white bg-blue-500 rounded">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
