import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="text-black bg-[#333]">
      <Navbar />
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 my-8">
        <h1 className="text-3xl font-bold mb-4">Enjoy on your TV</h1>
        <h3>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h3>
      </div>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 my-8">
        <h1 className="text-3xl font-bold mb-4">
          Download your shows to watch offline
        </h1>
        <h3>Save your favourites easily and always have something to watch.</h3>
      </div>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 my-8">
        <h1 className="text-3xl font-bold mb-4">Watch everywhere</h1>
        <h3>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h3>
      </div>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 my-8">
        <h1 className="text-3xl font-bold mb-4">Create profiles for kids</h1>
        <h3>
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default About;
