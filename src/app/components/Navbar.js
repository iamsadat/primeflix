import React from "react";

export default function Navbar() {
  return (
    <nav className="text-black bg-white border-[1px] border-b-[#d3d3d3] shadow-2xl border-b-4 border-gray-400 border-opacity-25">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.dribbble.com/users/9378043/screenshots/16832559/netflix__1_.png"
            className="h-8 mr-3"
            alt="Netflix Logo"
          />
          <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-black">
            Primeflix
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="/"
                className=" px-3 py-2 text-gray-900 rounded bg-white hover:bg-red-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="px-3 py-2 text-gray-900 rounded bg-white hover:bg-red-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/watch"
                className="px-3 py-2 text-gray-900 rounded bg-white hover:bg-red-500"
              >
                Watch
              </a>
            </li>
            <li>
              <a
                href="/account"
                className="px-3 py-2 text-gray-900 rounded bg-white hover:bg-red-500"
              >
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
