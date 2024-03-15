"use client";

import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "../../utils/constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(NavLinks);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black font-semibold rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1">Lopes</span>
          <span className="w-10 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div>
        {/* MENU BUTTON */}
        <button
          className="w-10 h-7 flex flex-col justify-between cursor-pointer z-50 relative "
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <div className="w-10 h-1 rounded bg-white"></div>
          <div className="w-10 h-1 rounded bg-white"></div>
          <div className="w-10 h-1 rounded bg-white"></div>
        </button>

        {/* MENU LIST */}
        {toggleMenu && (
          <div className="absolute top-0  left-0 w-screen h-screen text-white bg-black flex flex-col items-center justify-center gap-8 text-4xl">
            {NavLinks.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                className="hover:text-blue-400 transition-all ease-in-out duration-300 "
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
