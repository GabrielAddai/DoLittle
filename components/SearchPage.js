import React from "react";


const SearchPage = () => {
  return (
    <>
  <div classname="flex flex-col items-center mt-10">
    <img src="/google_logo.png" alt="Google" classname="w-40 h-auto" />
    <div classname="flex mt-10 space-x-4">
      <input
        type="text"
        classname="px-4 py-2 w-96 border border-gray-300 rounded-l"
        placeholder="Search..."
      />
      <button classname="px-4 py-2 font-semibold text-white bg-blue-500 rounded-r">
        Search
      </button>
    </div>
    <div classname="flex flex-col mt-10">
      <a href="#" classname="text-blue-700">
        About
      </a>
      <a href="#" classname="text-blue-700">
        Store
      </a>
      <a href="#" classname="text-blue-700">
        Gmail
      </a>
      <a href="#" classname="text-blue-700">
        Images
      </a>
    </div>
  </div>
  );
  {"}"};
</>
  )
};
export default SearchPage;