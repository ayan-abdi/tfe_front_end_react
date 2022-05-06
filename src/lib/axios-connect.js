import axios from "axios";

export const getInstanceAxios = () => {
  const data = JSON.parse(localStorage.getItem("token"));

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
      Authorization: data ? "Bearer " + data.token : null,
    },
  });
};
