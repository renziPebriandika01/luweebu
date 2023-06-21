import React from "react";
import { useEffect } from "react";
import { fetchDataRecomendation } from "../API/apiHandler";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Recomendation = () => {
  const [recomendation, setRecomendation] = useState([]);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [expandedEntries, setExpandedEntries] = useState([]);

  const toggleEntryExpand = (index) => {
    setExpandedEntries((prevExpandedEntries) => {
      const newExpandedEntries = [...prevExpandedEntries];
      newExpandedEntries[index] = !newExpandedEntries[index];
      return newExpandedEntries;
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    fetchDataRecomendation(setRecomendation);
    setExpandedEntries(new Array(recomendation.length).fill(false));
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrollToTopVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dataRecomendation = recomendation.map((data, id) => {
    const image_url = data.entry[0].images.jpg.image_url;
    const title = data.entry[0].title;
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
          <div className="max-w-md">
            <div
              className={`overflow-hidden ${expandedEntries[id] ? "max-h-full" : "h-10"}`}
            >
              <p>{data.content}</p>
            </div>
            {!expandedEntries[id] && (
              <button
                className="text-white-500 font-semibold"
                onClick={() => toggleEntryExpand(id)}
              >
                Selengkapnya...
              </button>
            )}
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
          rekomendasi anime
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {dataRecomendation}
        </div>
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

export default Recomendation;
