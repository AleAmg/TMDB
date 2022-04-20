import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router";
import { useContext } from "react";
import axios from "axios";
const NavBar = () => {
  const usuario = useContext(AuthContext);
  const navigate = useNavigate()

  const logOut = () => {
    try{
      axios.post("/api/logout")
      usuario.toggleAuth(null)
      navigate("/")
    }catch(err){console.log(err);}
  };

  return (
    <nav className="navbar has-background-black-ter mb-5">
      <Link to={"/"}>
        <h1 className="navbar-item title is-2 has-text-primary">TMDB</h1>
      </Link>

      <div className="navbar-item navbar-end">
        <div className="buttons">
          <Link to={"/search"}>
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-light">Search</button>
              </div>
            </div>
          </Link>
          {usuario.isAuthenticated ? (
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logOut} className="button is-light">Log Out</button>
              </div>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <div className="navbar-item">
                  <div className="buttons">
                    <button className="button is-light">Log In</button>
                  </div>
                </div>
              </Link>
              <Link to={"/newUser"}>
                <div className="navbar-item">
                  <div className="buttons">
                    <button className="button is-light">Register</button>
                  </div>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
