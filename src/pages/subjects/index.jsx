import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import postController from "../../controllers/post-controller";
// import { useRedirectPost } from "../../hooks/redirect-pagesjs";

const postsSchema = yup
  .object({
    title: yup.string().required().max(50),
    content: yup.string().required().max(2000),
    themes: yup.array(yup.number()).default([]),
  })
  .required();

const SubjectPage = () => {
  const [subjects, setSubjects] = useState(null);

  useEffect(() => {
    const postSubject = async () => {
      postController.addSubject({ title: "test", content: "paragraphe" });
    };
    postSubject();
    const getSubject = async () => {
      const data = await postController.getAll();
      setSubjects(data);
    };
    getSubject();
  }, []);

  const handleClick = (data) => {};
  //   useRedirectPost();

  return (
    <div>
      {subjects &&
        subjects.map((subject) => <p key={subject.id}>{subject.title}</p>)}
    </div>
    // <h1>Je suis sur la page sujet</h1>
  );
};

export default SubjectPage;
