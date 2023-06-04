import React, { useState } from "react";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Emote from "../assets/emote layla.png";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const AnimatedLink = motion(Link);

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
            <div className="pb-2 space-x-6 text-shadow">
              <AnimatedLink
                to="/"
                className=" capitalize"
                whileHover={{
                  borderRadius: 3,
                  backgroundColor: "blue",
                  scale: 1.1,
                  padding: 2,
                  color: "white",
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                top anime
              </AnimatedLink>

              <AnimatedLink
                to="/character"
                className=" capitalize"
                whileHover={{
                  borderRadius: 3,
                  backgroundColor: "blue",
                  scale: 1.1,
                  padding: 2,
                  color: "white",
                  transition: { duration: 0.1, ease: "easeInOut" },
                }}
              >
                character
              </AnimatedLink>

              <AnimatedLink
                to="/schedule"
                className=" capitalize"
                transition={{ duration: 0.5 }}
                whileHover={{
                  borderRadius: 3,
                  backgroundColor: "blue",
                  scale: 1.1,
                  padding: 2,
                  color: "white",
                  transition: { duration: 0.1, ease: "easeInOut" },
                }}
              >
                jadwal tayang
              </AnimatedLink>

              <AnimatedLink
                to="/rekomendasi"
                className=" capitalize"
                whileHover={{
                  borderRadius: 3,
                  backgroundColor: "blue",
                  scale: 1.1,
                  padding: 2,
                  color: "white",
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                rekomendasi
              </AnimatedLink>
            </div>
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
              {isMobileMenuOpen && (
                <div className="space-x-2 font-semibold text-black mb-0 h-full pb-4">
                  <img src={Emote} alt="" className="w-[150px]"/>
                  <div className="grid grid-rows-[1fr] gap-2">
                    <li>
                      <Link
                        to="/"
                        className="underline text-white rounded-md px-1 py-1 capitalize"
                      >
                        top anime
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/character"
                        className="underline text-white rounded-lg px-1 py-1 capitalize"
                      >
                        Random character
                      </Link>
                    </li>
                    <li>
              
                      <Link
                        to="/schedule"
                        className="underline text-white rounded-lg px-1 py-1 capitalize"
                      >
                        jadwal tayang
                      </Link>
                    </li>
                    <li>
                  
                      <Link
                        to="/rekomendasi"
                        className="underline text-white rounded-lg px-1 py-1 capitalize"
                      >
                        rekomendasi
                      </Link>
                    </li>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
