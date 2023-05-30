import React from "react";
import Navbar from "../components/Navbar";
import Card from "@/app/components/Card";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

const Watch = async () => {
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

  return (
    <div class="bg-white">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 py-24">
        <h1 className="text-black font-extrabold pb-[16px]">Series & Movies</h1>
        <div className="w-full flex gap-4 justify-between items-center flex-wrap">
          {main_data.map((curr) => {
            return <Card key={curr.id} {...curr} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Watch;

/*
    <div class="mx-4">
        <h1 class="text-black font-extrabold pb-4">Series & Movies</h1>
        <div class="slider-container">
          <div class="slider flex overflow-x-auto scrollbar-hide">
            {main_data.map((curr) => {
              return (
                <div class="slide flex-shrink-0">
                  <div class="h-360 w-175 text-xs flex-shrink-0 flex flex-col items-stretch relative mx-auto rounded-lg my-2 transition-shadow duration-200 ease-in shadow-md">
                    <Card key={curr.id} {...curr} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  */

/*
      <div className="max-w-screen-2xl mx-auto px-12 py-24">
        <h1 className="text-black font-extrabold pb-[16px]">Series & Movies</h1>
        <div className="w-full flex gap-12 justify-between items-center flex-wrap">
          {main_data.map((curr) => {
            return <Card key={curr.id} {...curr} />;
          })}
        </div>
      </div>
*/

/*
    <div className="bg-white">
      <Navbar />
      <div className="mx-4 overflow-x-auto">
        <section className="flex flex-nowrap gap-8 mx-auto p-1 max-w-full">
          <h1 className="text-black font-extrabold pb-[16px]">
            Series & Movies
          </h1>
          <div className="h-360 w-175 text-xs flex-shrink-0 flex flex-col items-stretch relative mx-auto border border-gray-500 rounded-lg p-8 my-10 mx-8 transition-shadow duration-200 ease-in">
            {main_data.map((curr) => {
              return <Card key={curr.id} {...curr} />;
            })}
          </div>
        </section>
      </div>
    </div>
*/

/*
    <div className="flex justify-between">
      <Searchbar />
    </div>
*/
