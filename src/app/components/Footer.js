import React from "react";

const Footer = () => {
  return (
    <footer className="h-[40px] bottom-0 left-0 right-0 text-black bg-white border-[1px] border-t-[#d3d3d3] shadow-2xl border-t-4 border-gray-400 border-opacity-25">
      <div className="container mx-auto px-1 flex justify-between items-center">
        <p className="text-start text-black">© Primeflix</p>
        <div className="flex space-x-4">
          <p>
            <a
              className="text-black font-medium"
              href="https://github.com/iamsadat/primeflix.git"
            >
              Source Code
            </a>
          </p>
          <p>
            <a
              className="text-black font-medium"
              href="https://www.netflix.com"
            >
              Original
            </a>
          </p>
          <p>
            <a
              className="text-black font-medium"
              href="https://www.twitter.com/sxdatt"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
