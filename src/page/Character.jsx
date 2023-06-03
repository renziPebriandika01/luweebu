import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Character = () => {
  const [Data, setData] = useState([]);
  const [characters, setCharacters] = useState(null);

  const fetchData = () => {
    axios
      .get("https://api.jikan.moe/v4/random/characters")
      .then((response) => {
        const data = response.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const next = () => {
    setCharacters(true);
  };
  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    if (!Data) {
      fetchData();
    } else if (characters) {
      fetchData();
      setCharacters(false);
    }
  }, [Data, characters]);

  return (
    <div>
      <Navbar />
      <div className="bg-blue-950 h-screen mb-0">
        <h1 className="text-center mb-5 font-semibold text-white capitalize">
          random character anime
        </h1>
        {Data && (
          <div>
            {Data.images && Data.images.jpg && (
              <div className="flex justify-center">
                <img src={Data.images.jpg.image_url} alt="Character Image" />
              </div>
            )}
            <p className="text-center text-white">{Data.name}</p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            className="bg-cyan-600 mt-10 p-2 rounded-lg text-gray-300 hover:text-yellow-300 mb-4"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
