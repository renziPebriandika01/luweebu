import { useEffect, useState } from "react";

function App() {
  const [topAnime, setTopAnime] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("");

  const fetchData = () => {
    fetch(`https://api.jikan.moe/v4/top/anime`).then((response) => {
      response.json().then((data) => {
        if (data.length === 0) {
          setShowViewMore("Tidak ada lagi");
        } else {
          setTopAnime([...topAnime, ...data.data]);
          setShowViewMore("Selanjutnya");
        }
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const dataAnime = topAnime.map((data) => {
    return (
      <div
        className="max-w-xs mx-auto bg-white rounded overflow-hidden shadow-lg mb-4"
        key={data.mal_id}
      >
        <img
          className="w-[300px] h-48 object-cover"
          src={data.images.jpg.image_url}
          alt={data.title}
        />
        <div className="p-4">
          <p className="text-xl font-medium mb-2 text-black">{data.title}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-center font-semibold text-lg mb-20 uppercase">anime terpopuler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topAnime.length > 0 ? dataAnime : "Loading..."}
      </div>
      <button
        className="bg-orange-700 p-2 mt-4 rounded-md flex justify-center "
        onClick={viewMore}
      >
        {showViewMore}
      </button>
    </div>
  );
}

export default App;
