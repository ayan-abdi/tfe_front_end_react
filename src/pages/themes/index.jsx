import style from "./theme.module.css";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import ThemeController from "../../controllers/themes-controller";
// import { useRedirectPost } from "../../hooks/redirect-pagesjs";

const themeSchema = yup
  .object({
    title: yup.string().required().max(50),
    content: yup.string().required().max(2000),
  })
  .required();

const ThemesPage = () => {
  const [themes, setThemes] = useState(null);

  //  Methode Get
  const getTheme = async () => {
    const data = await ThemeController.getAll();
    setThemes(data);
  };

  console.log("normal");
  useEffect(() => {
    console.log("mount");
    getTheme();
    return () => {
      console.log("unmount");
      setThemes(null);
    };
  }, []);

  return (
    <div>
      <h1>Quelques pistes interessantes</h1>
      <table>
        <tbody>
          {themes &&
            themes.map((theme) => {
              return (
                <tr key={theme.id}>
                  <td style={{ border: "1px solid black" }}>{theme.id}</td>
                  <td style={{ border: "1px solid black" }}>{theme.title}</td>
                  <td style={{ border: "1px solid black" }}>{theme.content}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default ThemesPage;
