import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

export const userToken = createAction("user/token", ({ token, expire }) => {
  const { pseudo, isAdmin } = jwtDecode(token);
  return {
    payload: {
      token,
      expire,
      pseudo,
      isAdmin,
    },
  };
});

export const userLogout = createAction("user/logout");

export const userSendError = createAction("user/sendError");
export const userClearError = createAction("user/clearRrror");

export const userLogin = ({ identity, password }) => {
  return (dispatch) => {
    axios
      .post("http://localhost:2020/api/auth/login", { identity, password })
      .then(({ data }) => {
        localStorage.setItem("token", JSON.stringify(data));
        dispatch(userToken(data));
      })
      .catch(() => {
        dispatch(userSendError());
      });
  };
};
// export const posts = ({ title, content }) => {
//   return (dispatch) => {
//     axios
//       .get("http://localhost:2020/api/posts", { title, content })
//       .then(({ data }) => {
//         dispatch(posts(data));
//       })
//       .catch(() => {
//         dispatch(Error('le theme que vous cherchez n\existe pas!'));
//       });
//   };
// };
// export const themePage = () => {
//   const [ theme, SetTheme] = useState(''); 

//   useEffect(() =>{
//     const dataTheme = async () => {
//       try {
//         const response = await 
//       }
//     }
//   })

export const userRegister = ({ pseudo, email, password }) => {
  return (dispatch) => {
    axios
      .post("http://localhost:2020/api/auth/register", {
        pseudo,
        email,
        password,
      })
      .then(({ data }) => {
        localStorage.setItem("token", JSON.stringify(data));
        dispatch(userToken(data));
      })
      .catch(() => {
        dispatch(userSendError());
      });
  };
};
