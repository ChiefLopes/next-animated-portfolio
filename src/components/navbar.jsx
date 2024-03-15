"use client";

import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "../../utils/constants";
import Image from "next/image";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(NavLinks);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-8">
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
      {/* LOGO */}
      <div className="md:hidden ">
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
      <div className="hidden md:flex gap-4 hi">
        <Link href="https://github.com/ChiefLopes" target="_blank">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/dribble.png" alt="dribble" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/facebook.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/pinterest.png" alt="linkedin" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
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
