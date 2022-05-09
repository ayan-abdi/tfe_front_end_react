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
//  Methode Add
  useEffect(() => {
    const themes = async () => {
      ThemeController.addTheme({ title: "test", content: "paragraphe" });
    };
    themes();
//  Methode Get
    const getTheme = async () => {
      const data = await ThemeController.getAll();
      setThemes(data);
    };
    getTheme();
  }, []);

  // const handleClick = (data) => {};
  //   useRedirectPost();
  
  return (
    <div>
      <h1>HELLO THEME</h1>
      {themes && 
      themes.map((theme) => {
        return <tr>
             <td  style={{border: '1px solid black'}}>{theme.id}</td>
            <td  style={{border: '1px solid black'}}>{theme.title}</td>
            <td  style={{border: '1px solid black'}}>{theme.content}</td>
          </tr>
        
      })}
      
    </div>
  );
};
export default ThemesPage;