import ThemePage from "../pages/themes";
import CreateThemePage from "../pages/themes/create";
import Error404 from "../pages/errors/404";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import PostPage from "../pages/subjects";
import SubjectCreatePage from "../pages/subjects/create";
import SubjectShowPage from "../pages/subjects/show";

export const appRoute = [
  { path: "", element: <HomePage /> },
  {
    path: "posts",
    children: [
      {
        index: true,
        element: <PostPage />,
      },
      {
        path: ":id",
        element: <SubjectShowPage />,
      },
      {
        path: "create",
        element: <SubjectCreatePage />,
      },
    ],
  },
  {
    path: "themes",
    children: [
      {
        index: true,
        element: <ThemePage />,
      },
      {
        path: "create",
        element: <CreateThemePage />,
      },
    ],
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  { path: "*", element: <Error404 /> },
];
