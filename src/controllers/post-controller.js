import axios from "axios";
import { useAxios } from "../hooks/axios-hook";

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
  addPost: async (data) => {
    try {
      await getInstanceAxios().post("/api/posts", data);
      // useAxios();
      console.log("sended");
    } catch (error) {
      console.log("prblem");
    }
  },
  // deletePost: async ({ id }) => {
  //   try {
  //     await getInstanceAxios().delete(`api/posts/${id}`);
  //   } catch (error) {}
  // },
};

export default postController;
