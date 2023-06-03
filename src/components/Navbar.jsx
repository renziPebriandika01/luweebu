import React, { useState } from "react";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <div className="md:flex justify-center capitalize  mt-4 shadow-lg mb-2 hidden">
            <div className="pb-2 space-x-6 text-shadow ">
              <AnimatedLink
                to="/"
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

              <motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
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
              </motion.a>

              <motion.a
                href="#"
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
              </motion.a>
            </div>
          </div>
          {/* desktop */}
          {/* mobile */}
          <div className="relative md:hidden bg-blue-500 p-4 mt-2 space-x-2">
            <button
              className="absolute top-0 right-0 flex items-center p-2"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={toggleBtnIcon} className="text-zinc-400" />
            </button>
            <div className="md:hidden">
              {/* Tampilkan menu ketika hamburger diklik */}
              {isMobileMenuOpen && (
                <div className=" p-4 mt-2 space-x-2 font-semibold text-black">
                  <Link to="/" className="underline text-white rounded-md px-1 py-1 capitalize">top anime</Link>
                  <Link to="/character" className="underline text-white rounded-lg px-1 py-1 capitalize">Random character</Link>
                
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
