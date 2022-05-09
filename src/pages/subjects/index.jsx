import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
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

const PostPage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // Methode Add
    const postSubject = async () => {
      const data = await postController.addSubject({
        title: "test",
        content: "paragraphe",
      });
    };
    postSubject();

    // Methode GetAll
    const getSubject = async () => {
      const data = await postController.getAll();
      setPosts(data);
    };
    getSubject();
  }, []);
  // Methode delete
  const deleteSubject = async () => {
    const data = await postController.deletePost();
    setPosts(data);
  };

  const handleClick = (data) => {
    deleteSubject(data);
  };
  //   useRedirectPost();

  return (
    <div>
      <h1>Par où commencer ?</h1>
      <table>
        <tbody>
          {posts &&
            posts.map((post) => {
              return (
                <tr>
                  <td style={{ border: "1px solid black" }}>{post.id}</td>
                  <td style={{ border: "1px solid black" }}>{post.title}</td>
                  <td style={{ border: "1px solid black" }}>{post.content}</td>
                </tr>
              );
              // WARNING: si je met key= {subject.id} cela impacte l'ordre des id envoyé dans la requete
            })}
        </tbody>
      </table>
      <h2>Pour finir je suis au point mort!!!!!!</h2>
      <button onClick={handleClick}>Supprime</button>
    </div>
  );
};

export default PostPage;
