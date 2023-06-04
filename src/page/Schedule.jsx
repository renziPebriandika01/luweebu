import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { fetchDataSchedule } from "../API/apiHandler";
import "../style/Trends.css";
import { motion } from "framer-motion";
const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDataSchedule(setIsLoading, setSchedule);
  }, []);

  const dataSchedule = schedule.map((data, id) => {
    return (
      <div
        className="container md:max-w-[200px] max-w-[150px] mb-3 text-center bg-blue-600 text-white  mx-auto shadow-lg mt-10 "
        key={id}
      >
        <div className="">
          <div className="flex justify-center">
            <img
              src={data.images.webp.image_url}
              alt=""
              className="object-cover w-[200px] "
            />
          </div>
          <div className=" truncate mt-5 px-2">{data.title}</div>
          <div className=" truncate mt-2">{data.genres.name}</div>
          <div className="  mt-2">jadwal tayang: {data.broadcast.day}</div>
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
      <div className="grid grid-cols-2 md:grid-cols-4 bg-blue-950">
        {dataSchedule}
      </div>
      {isLoading && (
        <div className="flex justify-center mt-4 h-full">
          <motion.div className="loader " animate={{ x: 100 }} />
        </div>
      )}
    </div>
  );
};

export default Schedule;
