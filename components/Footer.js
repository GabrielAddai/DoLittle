import React from "react";


const Footer = () => {
  return (
    <footer className="p-4 text-sm text-gray-500 bg-gray-100">
      <div className="flex justify-center space-x-4">
        <a href="#">Advertising</a>
        <a href="#">Business</a>
        <a href="#">How Search works</a>
      </div>
      <div className="flex justify-center mt-2 space-x-4">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Settings</a>
      </div>
    </footer>
  );
};

export default Footer;