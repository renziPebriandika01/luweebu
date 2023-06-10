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
    if (data.length === 2) {
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
export const fetchDataSchedule = async (setIsLoading, setSchedule) => {
  setIsLoading(true);
  try {
    const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
    const data = response.data;
    setSchedule((prevData) => [...prevData, ...data.data]);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export const fetchRandomCharacter = () => {
  return axios
    .get("https://api.jikan.moe/v4/random/characters")
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const fetchDataRecomendation = async (setRecomendation) => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/recommendations/anime"
    );
    const data = response.data;
    setRecomendation((prevData) => [...prevData, ...data.data]);
  } catch (error) {
    console.log(error);
  }
};
export const fetchDataUpcoming = async (setDataUpcoming, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/seasons/upcoming"
    );
    const data = response.data;
    setDataUpcoming((prevData) => [...prevData, ...data.data]);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
