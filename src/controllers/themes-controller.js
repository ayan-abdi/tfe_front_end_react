import { getInstanceAxios } from "../lib/axios-connect";

const ThemeController = {
  getAll: async () => {
    try {
      const response = await getInstanceAxios().get("api/themes", {
        params: {
          limit: 0,
        },
      });
      console.log(response);
      return response.data.results;
    } catch (error) {
      console.log("oups! plus aucun thème disponible");
    }
  },
  addTheme: async (data) => {
    try {
      await getInstanceAxios().post("api/themes", {
        ...data,
      });
    } catch (error) {
      console.log("Vous n'avez pas bien poster un thème");
    }
  },
};

export default ThemeController;
