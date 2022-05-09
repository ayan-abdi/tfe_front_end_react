import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../hooks/axios-hook";
import { getInstanceAxios } from "../lib/axios-connect";



const ThemeController = {
  getAll: async () => {
    try {
      const response = await getInstanceAxios().get("api/themes");
      return response.data.results;
    } catch (error) {
      console.log("oups! plus aucun thème disponible");
    }
  },
  addTheme: async (data) => {
    try {
      const response = await getInstanceAxios().post("/api/themes")
    

      return {...response.data.results}
    } catch (error) {
      console.log("Vous n'avez pas bien poster un thème");
    }
  },
};

export default ThemeController;
