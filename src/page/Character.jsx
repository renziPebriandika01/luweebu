import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchRandomCharacter } from "../API/apiHandler";
const Character = () => {
  const [Data, setData] = useState([]);
  const [characters, setCharacters] = useState(null);

  const fetchDataCharacter = () => {
    fetchRandomCharacter().then((data) => {
      setData(data);
    });
  };

  const next = () => {
    setCharacters(true);
  };
  useEffect(() => {
    fetchDataCharacter();
  }, []);

  useEffect(() => {
    if (!Data) {
      fetchDataCharacter();
    } else if (characters) {
      fetchDataCharacter();
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
