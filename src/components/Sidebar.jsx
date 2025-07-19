import React, { useState } from "react";
import { Link } from "react-scroll";

function Sidebar() {
  const [isopen, setIsopen] = useState(false);
  const sidebarlist = [
    {
      link: "home",
      name: "Home",
      image: "https://img.icons8.com/glyph-neue/2x/home.png",
    },
    {
      link: "about",
      name: "About",
      image: "https://img.icons8.com/metro/2x/about.png",
    },
    {
      link: "projects",
      name: "Projects",
      image:
        "https://img.icons8.com/external-flat-icons-inmotus-design/2x/external-book-reading-flat-icons-inmotus-design-15.png",
    },
    {
      link: "contact",
      name: "Contact",
      image: "https://img.icons8.com/glyph-neue/2x/contacts.png",
    },
  ];
  return (
    <div
      className={`h-screen ${
        isopen ? "w-44 px-2 " : "w-12"
      } duration-500 hidden sm:block sticky top-0 left-0 bg-gradient-to-l from-cyan-400 to-cyan-700 rounded-r-2xl`}
    >
      <img
        className={`${
          !isopen ? "rotate-0 right-3" : "rotate-180 -right-1"
        } duration-500 absolute cursor-pointer top-4  w-7`}
        src="https://img.icons8.com/material-two-tone/2x/circled-chevron-right.png"
        onClick={() => setIsopen(!isopen)}
      />

      <div
        className={`${
          !isopen ? "scale-0" : ""
        } duration-500 flex items-center pl-4`}
      >
        <img
          className="w-5 h-5 cursor-text"
          src="https://img.icons8.com/ios-filled/2x/portfolium.png"
        />
        <p className="py-4 text-xl font-bold">ortfolio</p>
      </div>
      <ul>
        {sidebarlist.map((item) => {
          return (
            <Link
              smooth
              duration={800}
              to={item.link}
              key={item.name}
              className="flex items-center hover:bg-gradient-to-br from-cyan-400 to-cyan-800 rounded-lg my-1 p-2 px-3 w-full text-sm font-medium cursor-pointer hover:text-white sha hover:shadow-md hover:shadow-gray-300"
            >
              <div className="shrink-0">
                <img className="w-5 h-5 mr-4 " src={item.image} />
              </div>
              <p className={`${!isopen ? "scale-0 " : ""} duration-500`}>
                {item.name}
              </p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
