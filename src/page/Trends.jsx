import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../style/Trends.css";
import { fetchDataTrends } from "../API/apiHandler";
const Trends = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDataTrends(currentPage, setTopAnime, setShowViewMore, setIsLoading);
  }, [currentPage]);

  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const dataAnime = topAnime.map((data, id) => {
    const dataImage = data.images.jpg.image_url;
    return (
      <div
        className="container max-w-[190px] mb-3 text-center text-black mx-auto  "
        key={id}
      >
        <div className="bg-white relative  shadow-red-700 rounded-lg p-1 shadow-lg pb-4 font-semibold text-gray-600">
          <div className="flex justify-center  inset-x-0 top-0 ">
            <img
              src={dataImage}
              alt=""
              className="object-cover w-[200px] rounded-lg"
            />
          </div>
          <div className=" mt-5 truncate">{data.title}</div>
          <div className=" mt-5 font-extrabold text-red-700">{data.score}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="bg-blue-950 text-white p-4">
        <p className="text-center font-serif text-xl mb-20 uppercase text-gray-300 ">
          top anime
        </p>
        <div className=" grid grid-cols-2 gap-2 sm:grid-cols-3">
          {dataAnime}
        </div>
        {isLoading && (
          <div className="flex justify-center mt-4 h-full">
            <motion.div className="loader " animate={{ x: 100 }} />
          </div>
        )}
        <button
          className="bg-orange-700 p-2 mt-4 rounded-md  "
          onClick={viewMore}
        >
          {showViewMore}
        </button>
      </div>
    </div>
  );
};

export default Trends;
