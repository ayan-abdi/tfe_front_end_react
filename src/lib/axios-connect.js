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
// Ce folder va etre utiliser comme un hook et qu'il va etre importer dans mon user-action
//  juste avant ma requete permet de me
// => connecter à ma data base et
// =>d'autoriser comme quand il faut mettre un token
// => d'enlever le prefixe de ma requete http ....
