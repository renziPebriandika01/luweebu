import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { fetchDataSchedule } from "../API/apiHandler";
import "../style/Trends.css";
import { motion } from "framer-motion";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchDataSchedule(setIsLoading, setSchedule);
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollToTopVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dataSchedule = schedule.map((data, id) => {
    return (
      <div
        className="container md:max-w-[200px] max-w-[150px] mb-3 text-center bg-blue-600 text-white  mx-auto shadow-lg mt-10 rounded-lg p-1 "
        key={id}
      >
        <div className="">
          <div className="flex justify-center">
            <img
              src={data.images.webp.image_url}
              alt=""
              className="object-cover w-[200px] rounded-lg "
            />
          </div>
          <div className=" truncate mt-5 px-2">{data.title}</div>
          <div className=" truncate mt-2">{data.genres.name}</div>
          <div className="mt-2 ">
            jadwal tayang:
            <br />
            {data.broadcast.day === "Sundays"
              ? "minggu"
              : data.broadcast.day === "Mondays"
              ? "senin"
              : data.broadcast.day === "Tuesdays"
              ? "selasa"
              : data.broadcast.day === "Wednesdays"
              ? "rabu"
              : data.broadcast.day === "Thursdays"
              ? "kamis"
              : data.broadcast.day === "Fridays"
              ? "jumat"
              : data.broadcast.day === "Saturdays"
              ? "sabtu"
              : data.broadcast.day}
          </div>
          <div className="  mt-2">{data.broadcast.time}</div>
          <div className=" mt-2">
            total episode:
            {data.episodes === null ? "belum tau sampe berapa" : data.episodes}
          </div>
        </div>
        <div className="pb-3 text-yellow-400">Rating: {data.score}</div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="bg-blue-950">
        <div className="text-xl text-center  py-6 uppercase text-gray-300 font-serif">
          jadwal tayang
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {dataSchedule}
        </div>
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

export default Schedule;
