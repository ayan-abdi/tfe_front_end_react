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
    const [themes, setThemes] = useState(null);
    const [titleTheme, setTitleTheme] = useState('');
    const [contentTheme, setContentTheme] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const themes = async () => {
            const newTheme = { title: titleTheme, content: contentTheme };
            ThemeController.addTheme({ newTheme });

        };
        setTitleTheme('');
        setContentTheme('')
        setThemes();
        themes();
        navigate('/themes');


    }, []);
    const { register, handleSubmit } = useForm();
    // const handleClick = (data) => { };
    //   useRedirectPost();

    return (
        <div>
            <h1>Create Theme</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titleTheme">title</label>
                <textarea {...register('titleTheme', { required: true })} ></textarea>
                <input type="submit" value="send" />
            </form>

        </div>
    );
};
export default CreateThemesPage;