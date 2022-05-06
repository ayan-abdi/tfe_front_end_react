import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const useAxios = (url) => {
  const token = useSelector((store) => store.user.token);

  // Persitance de donnée (Sans re-render)
  const instance = useRef();

  useEffect(() => {
    // Générer l'instance axios
    instance.current = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      url,
      timeout: 1000,
      headers: {
        Authorization: token ? "Bearer " + token : null,
      },
    });
  }, [url, token]);

  return instance.current;
};
