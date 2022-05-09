import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/actions/user-action";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <header>
      {!user.token ? (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/themes">Themes</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch(userLogout());
          }}
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
