import React, { useEffect, useState } from "react";
import { fetchDataUpcoming } from "../API/apiHandler";
import Navbar from "../components/Navbar";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const Upcoming = () => {
  const [dataUpcoming, setDataUpcoming] = useState([]);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    fetchDataUpcoming(setDataUpcoming, setIsLoading);
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollToTopVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);
  const upcoming = dataUpcoming.map((data, id) => {
    const image_url = data.images.jpg.image_url;
    const title = data.title;
    const airedYear = data.aired.prop.from.year;
    const airedMonth = data.aired.prop.from.month;
    const airedDay = data.aired.prop.from.day;

    return (
      <div
        key={id}
        className="container md:max-w-[200px] max-w-[150px] mb-3 text-center bg-blue-600 text-white  mx-auto  mt-10 p-1 rounded-lg "
      >
        <div className="shadow-neutral-600">
          <img
            src={image_url}
            alt=""
            className="object-cover w-[200px] rounded-lg "
          />
          <div className="text-gray-600font-semibold mt-2 pb-3 ">{title}</div>
          <div className="text-gray-600font-semibold mt-2 pb-3 ">
            {airedDay}
            -
            {airedMonth === 1
              ? "januari"
              : airedMonth === 2
              ? "februari"
              : airedMonth === 3
              ? "maret"
              : airedMonth === 4
              ? "april"
              : airedMonth === 5
              ? "mei"
              : airedMonth === 6
              ? "juni"
              : airedMonth === 7
              ? "juli"
              : airedMonth === 8
              ? "agustus"
              : airedMonth === 9
              ? "september"
              : airedMonth === 10
              ? "oktober"
              : airedMonth === 11
              ? "november"
              : airedMonth === 12
              ? "desember"
              : airedMonth}
            -{airedYear}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="bg-blue-950 ">
      <h1 className="text-xl text-center  py-6 uppercase text-gray-300 font-serif">
         Anime yang akan di rilis
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 ">{upcoming}</div>
        {isLoading && (
          <div className="flex justify-center mt-4 h-full">
            <motion.div className="loader " animate={{ x: 100 }} />
          </div>
        )}
        {isScrollToTopVisible && (
          <button
            className="fixed bottom-10 right-10 bg-white p-2 rounded-full shadow-md"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-black" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Upcoming;
