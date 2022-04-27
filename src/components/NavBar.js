import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router";
import { useContext } from "react";
/* import {AiOutlineSearch} from "react-icons/ai" */
import { GoSearch } from "react-icons/go";
import useInput from "../hooks/useInput";
import axios from "axios";
const NavBar = () => {
  const usuario = useContext(AuthContext);
  const search = useInput();

  const navigate = useNavigate();

  const logOut = () => {
    try {
      axios.post("/api/user/logout");
      usuario.toggleAuth(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = () => {
    navigate(`/search/${search.value}`);
  };

  return (
    <nav className="navbar has-background-black-ter mb-4">
      <Link to={"/"}>
        <h1 className="navbar-item title is-2 has-text-primary">TMDB</h1>
      </Link>
      <Link to={"/favorites"}>
        <div className="buttons column">
          <button className="button my-2 is-light">x</button>
        </div>
      </Link>
      <div className="navbar-item navbar-end">
        <div className="navbar-item columns">
          <form onSubmit={handleSubmit} className="columns">
            <div className="buttons column" style={{ width: "1px" }}>
              <button className="button my-3 is-light">
                <GoSearch />
              </button>
            </div>
            <div className="column is-four-fifths">
              <input
                {...search}
                className="input my-3"
                type="text"
                placeholder="Search movie"
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="navbar-item columns">
          {usuario.isAuthenticated ? (
            <div className="buttons column">
              <button onClick={logOut} className="button my-2 is-light">
                Log Out
              </button>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <div className="buttons column">
                  <button className="button my-2 is-light">Log In</button>
                </div>
              </Link>
              <Link to={"/newUser"}>
                <div className="buttons column">
                  <button className="button my-2  is-light">Register</button>
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

/* 
<div class="dropdown">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
      <span>Click me</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Overview
      </a>
      <a href="#" class="dropdown-item">
        Modifiers
      </a>
      <a href="#" class="dropdown-item">
        Grid
      </a>
      <a href="#" class="dropdown-item">
        Form
      </a>
      <a href="#" class="dropdown-item">
        Elements
      </a>
      <a href="#" class="dropdown-item">
        Components
      </a>
      <a href="#" class="dropdown-item">
        Layout
      </a>
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item">
        More
      </a>
    </div>
  </div>
</div>
*/