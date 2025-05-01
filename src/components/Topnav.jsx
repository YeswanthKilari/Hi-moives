import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import images from "../assets/images.png";

export const Topnav = () => {
  const [query, setquery] = useState("");
  const [searchs, setsearchs] = useState([]);

  const getsearchs = async () => {
    try {
      const { data } = await axios.get(`search/multi?query=${query}`);
      setsearchs(data.results);
    
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getsearchs();
  }, [query]);

  return (
    <div className="w-fit h-[10vh]  relative flex justify-start ml-[15%]  items-center">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl border-none outline-none border-transparent"
        type="text"
        placeholder="search anything.."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] top-[90%] bg-zinc-200 overflow-auto">
        {searchs.map((s, i) => {
          return (
            <Link
              key={i}
              className="hover:bg-zinc-300 hover:text-black w-[100%] 
                  p-10 flex shadow-2xl justify-start items-center border-2 border-zinc-100"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded-2xl mr-5 "
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : images
                }
                alt=""
              />

              <span>
                {s.name || s.title || s.original_name || s.original_title}{" "}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
