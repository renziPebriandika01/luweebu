import React, { useState } from "react";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Emote from "../assets/emote layla.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Menus = [
    { title: "top Anime", link: "/" },
    { title: "random character", link: "/character" },
    { title: "jadwal tayang", link: "/schedule" },
    { title: "rekomendasi", link: "/rekomendasi" },
    { title: "anime yg akan rilis", link: "/upcoming" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBtnIcon = isMobileMenuOpen ? faTimes : faBars;

  return (
    <div>
      <header>
        <nav>
          {/* desktop */}
          <div className="md:flex justify-center  mt-4 shadow-lg mb-2 hidden ">
            {Menus.map((menu, index) => {
              return (
                <div key={index} className="pb-5">
                  <Link
                    to={menu.link}
                    className="text-lg text-zinc-950 px-7 capitalize hover:text-blue-900"
                  >
                    {menu.title}
                  </Link>
                </div>
              );
            })}
          </div>
          {/* desktop */}
          {/* mobile */}
          <div className="fixed md:hidden bg-blue-500 z-40 space-x-2 w-full top-0">
            <button
              className="absolute top-0 right-0 flex items-center p-2 text-2xl"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon
                icon={toggleBtnIcon}
                className="text-red-400 pr-3"
              />
            </button>
            <div className="md:hidden ">
              <div
                className={`menu-container ${
                  isMobileMenuOpen
                    ? "max-h-full transition-all duration-700"
                    : "max-h-0 "
                }`}
              >
                {isMobileMenuOpen && (
                  <div className="font-semibold text-black mb-0 h-full pb-4">
                    <img src={Emote} alt="" className="w-[150px] mx-auto" />              
          
                    <div className="">
                      {Menus.map((menu, index) => {
                        return (
                          <div key={index} className="pb-5 ">
                            <div className="w-full">
                              <Link
                                to={menu.link}
                                className={`text-lg block capitalize hover:text-cyan-700 border-b-2   ${menu.color ? "text-red-400" : "text-white"} `}
                              >
                               {menu.text?"cari...":null} {menu.title}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
