"use client";
import React from "react";

const searchBar = async () => {
  const [searchInput, setSearchInput] = React.useState("");

  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "05791900d0msh10597bb4c661f8cp16290ejsnb48d26443a54",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    countries.filter((country) => {
      return main_data.jawSummary.title.match(searchInput);
    });
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="font-karla sans-serif rounded-md border border-gray-300 text-gray-700 text-sm px-10 py-2"
        value={searchInput}
        onChange={handleChange}
      />
      <h4 className="text-black cursor-pointer">
        <a onClick={handleChange}>Search</a>
      </h4>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
    </div>
  );
};

export default searchBar;
