import React, { useEffect, useState } from "react";
import { fetchSearchData } from "../API/apiHandler";
import Navbar from "../components/Navbar";
import axios from "axios";

const Search = () => {
  const [dataSearch, setDataSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  console.log(dataSearch)

  useEffect(() => {
    search(setDataSearch);
  }, []);

  const search = async () => {
    try {
      const queryParams = new URLSearchParams({
        q: searchQuery,
        sfw: true, 
        unapproved: false,
      }).toString();

      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?${queryParams}`
      );

      const data = response.data;
      setDataSearch(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    search(); 
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-9">
        <input
          type="text"
          placeholder="Cari..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <p className="text-center text-5xl mt-10"> belum siap</p>
      {/* Tampilkan hasil pencarian di sini */}
      <div>
        {/* {dataSearch && dataSearch.length > 0 ? (
          dataSearch.map((anime) => (
            <div key={anime.mal_id}>
              <h2>{anime.title}</h2>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </div>
          ))
        ) : (
          <p>Tidak ada hasil pencarian.</p>
        )} */}
      </div>
    </div>
  );
};

export default Search;
