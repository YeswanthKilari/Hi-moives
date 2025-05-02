import React from "react";
import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <div className="w-[18%] h-full border-r-2  border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold ">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">Project-X</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 p-5 ">
        <h1 className="text-white text-xl font-semibold mt-5 mb-5">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-xl">
          <i className=" mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-xl">
          <i className="  mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-xl">
          <i className=" mr-2 ri-movie-2-fill"></i>Moives
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-xl">
          <i className=" mr-2 ri-clapperboard-fill"></i>T.V shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-xl">
          <i className=" mr-2 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className="border-r-2  border-zinc-400" />
      <nav className="flex flex-col text-zinc-400 p-5">
        <h1 className="text-white  font-semibold mt-5 mb-5">
          Website info
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-xl">
          <i className=" mr-2 ri-information-fill"></i>About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-xl">
          <i className=" mr-2 ri-phone-fill"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
