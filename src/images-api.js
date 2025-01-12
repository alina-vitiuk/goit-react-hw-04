import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com/`;
const ACCESS_KEY = `8wBxuKq4g1G2vfaNSWNK3rqHeyMTg4c6MW30jz2sm0c`;

export const getImagesUnplash = async (searchImg, pageNumber) => {
  const params = {
    query: searchImg,
    page: pageNumber,
    per_page: 3,
    client_id: ACCESS_KEY,
  };
  try {
    const respons = await axios.get(
      `search/photos/?${new URLSearchParams(params).toString()}`
    );
    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};
