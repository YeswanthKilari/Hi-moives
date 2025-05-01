import React from "react";
import Sidenav from "./Sidenav";
import { Topnav } from "./Topnav";

function Home() {
  document.title = "Project x | Home-Page";
  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full ">
        <Topnav />
      </div>
    </>
  );
}

export default Home;
