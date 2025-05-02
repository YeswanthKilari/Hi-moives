import React, { useEffect } from "react";
import Sidenav from "./Sidenav";
import { Topnav } from "./Topnav";
import { useState } from "react";
import axios from "../utils/axios";

function Home() {
  document.title = "Project x | Home-Page";

  const [wallpaper, setwallpaper] = useState(null);
  const [error, setError] = useState(null);

  const getheaderwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
      // console.log(data);
    } catch (error) {
      console.log("Error:", error);
      setError("Failed to fetch wallpaper data.");
    }
    
  };

  console.log(wallpaper);
  useEffect(() => {
     !wallpaper && getheaderwallpaper()
  }, []);
  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-hidden">
        <Topnav />
      </div>
    </>
  );
}

export default Home;
