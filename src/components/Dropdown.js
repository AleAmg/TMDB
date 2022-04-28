import axios from "axios";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const DropDown = () => {
  const usuario = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    try {
      axios.post("/api/user/logout");
      usuario.toggleAuth(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="drop">
      {usuario.isAuthenticated ? (
        <>
          <div className="buttons">
            <button onClick={logOut} className="button my-2 is-light">
              Log Out
            </button>
          </div>
          <Link to={"/favorites"}>
            <div className="buttons">
              <button className="button my-2 is-light">Favorites</button>
            </div>
          </Link>
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <div className="buttons buttonDrop">
              <button className="button my-2 is-light">Log In</button>
            </div>
          </Link>
          <Link to={"/newUser"}>
            <div className="buttons ">
              <button className="button my-2  is-light">Register</button>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};
export default DropDown;
