import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [showViewMore, setShowViewMore] = useState("");
  const fetchDataSchedule = () => {
    axios
      .get("https://api.jikan.moe/v4/seasons/now")
      .then((response) => {
        const data = response.data;
        if (data.length === 0) {
          setShowViewMore("Tidak ada lagi");
        } else {
          setSchedule([...schedule, ...data.data]);
          setShowViewMore("Selanjutnya");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDataSchedule();
  }, []);
  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  };
  const dataSchedule = schedule.map((data, id) => {

    return (
      <div
        className="container md:max-w-[200px] max-w-[150px] mb-3 text-center bg-blue-950 text-white  mx-auto shadow-lg mt-10 "
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
          <div className="  mt-2">
            jadwal tayang: {data.broadcast.day}
          </div>
          <div className="  mt-2">
             {data.broadcast.time}
          </div>
          <div className=" mt-2">
            total episode: {data.episodes ===null ?"belum tau sampe berapa":data.episodes}
          </div>
          </div>
          <div className="pb-3">{data.score}</div>
        </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-4 bg-blue-600">
        {dataSchedule}
      </div>
    </div>
  );
};

export default Schedule;
