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
    return (
      <div
        className="container max-w-[250px] mb-3 text-center text-black mx-auto"
        key={id}
      >
        <div className="bg-white relative p-4 shadow-red-700">
          <div className="flex justify-center pt-7  inset-x-0 top-0 ">
            <img
              src={data.images.jpg.image_url}
              alt=""
              className="object-cover w-[200px]"
            />
          </div>
          <div className="title truncate mt-5">{data.title}</div>
          <div className="status truncate">{data.title_japanese}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="bg-blue-950 text-white p-4">
        <h1 className="text-center font-semibold text-lg mb-20 uppercase">
          top anime
        </h1>
        <div className=" grid grid-cols-2 gap-2 sm:grid-cols-3">
          {dataAnime}
        </div>
        {isLoading && ( 
          <div className="flex justify-center mt-4 h-full">
           <motion.div 
           className="loader "
           animate={{ x: 100 }} />
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
