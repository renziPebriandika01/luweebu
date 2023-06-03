import axios from "axios";

export const fetchDataTrends = async (
  currentPage,
  setTopAnime,
  setShowViewMore,
  setIsLoading
) => {
  setIsLoading(true);
  try {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime");
    const data = response.data;
    if (data.length === 0) {
      setShowViewMore("Tidak ada lagi");
    } else {
      setTopAnime((prevData) => [...prevData, ...data.data]);
      setShowViewMore("Selanjutnya");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export const fetchRandomCharacter = ()=>{
    return axios
    .get("https://api.jikan.moe/v4/random/characters")
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
