import React from "react";
import { useEffect } from "react";
import { fetchDataRecomendation } from "../API/apiHandler";
import { useState } from "react";
import Navbar from "../components/Navbar";
const Recomendation = () => {
  const [recomendation, setRecomendation] = useState([]);
  useEffect(() => {
    fetchDataRecomendation(setRecomendation);
  }, []);
  const dataRecomendation = recomendation.map((data, id) => {
    const image_url = data.entry[0].images.jpg.image_url;
    const title = data.entry[0].title;
    console.log(title);
    return (
      <div
        key={id}
        className="container md:max-w-[200px] max-w-[150px] mb-3 text-center bg-blue-600 text-white  mx-auto shadow-lg mt-10 "
      >
        <img src={image_url} alt="" className="object-cover w-[200px] " />
        <div className="text-white font-semibold mt-2 pb-3">{title}</div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="bg-blue-950 ">
        <h1 className="text-white font-semibold capitalize text-center pt-7 ">
          berikut list anime yg direkomendasikan untuk wibu pemula
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {dataRecomendation}
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
