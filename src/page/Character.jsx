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
          <div className="container max-w-[250px] mx-auto bg-white rounded-xl p-2">
            {Data.images && Data.images.jpg && (
              <div className="flex justify-center">
                <img
                  src={Data.images.jpg.image_url}
                  alt="Character Image"
                  className="rounded-xl"
                />
              </div>
            )}
            <p className="text-center font-bold text-zinc-950 hover:text-red-700  mt-5 pb-4 underline object-cover">
              {Data.name}
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            className="bg-cyan-600 mt-10  rounded-lg text-gray-300 hover:bg-blue-400  ease-in duration-300 px-5 uppercase"
            onClick={next}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
