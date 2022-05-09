import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ThemeController from "../../controllers/themes-controller";
// import { useRedirectPost } from "../../hooks/redirect-pagesjs";

const themeSchema = yup
  .object({
    title: yup.string().required().max(50),
    content: yup.string().required().max(2000),
  })
  .required();

const CreateThemesPage = () => {
  //  Methode Add

  const navigate = useNavigate();

  useEffect(() => {
    const themes = async () => {
      //   const newTheme = { title: title, content: contentTheme };
      //   ThemeController.addTheme({ newTheme });
    };

    themes();
    // navigate('/themes');
  }, []);
  const { register, handleSubmit } = useForm();
  // const handleClick = (data) => { };
  //   useRedirectPost();
  const onSubmit = (data) => {
    console.log("create", data);
    ThemeController.addTheme(data);
    navigate("/themes");
  };

  return (
    <div>
      <h1>Create Theme</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">title</label>
        <input {...register("title", { required: true })} />
        <textarea {...register("content", { required: true })}></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
};
export default CreateThemesPage;
