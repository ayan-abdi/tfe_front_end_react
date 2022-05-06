import axios from "axios";
import { getInstanceAxios } from "../lib/axios-connect";

const postController = {
  getAll: async () => {
    try {
      const response = await getInstanceAxios().get("api/posts");
      return response.data.results;
    } catch (error) {
      console.log("oups");
    }
  },
  addSubject: async (data) => {
    try {
      await getInstanceAxios().post("/api/posts", { ...data });
      console.log("sended");
    } catch (error) {
      console.log("prblem");
    }
  },
};

export default postController;
