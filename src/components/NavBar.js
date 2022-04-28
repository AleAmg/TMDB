import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import useInput from "../hooks/useInput";
import DropDown from "./Dropdown";

const NavBar = () => {
  const search = useInput();
  const locate = useLocation();
  const navigate = useNavigate();

  const [drop, setDrop] = useState(false);

  useEffect(() => {
    setDrop(false);
  }, [locate]);

  const handleSubmit = () => {
    navigate(`/search/${search.value}`);
  };

  return (
    <nav className="navbar has-background-black-ter mb-4">
      <Link to={"/"}>
        <h1 className="navbar-item title is-2 has-text-primary">TMDB</h1>
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
          <div className="buttons column">
            <button
              onClick={drop ? () => setDrop(false) : () => setDrop(true)}
              className="button my-2 is-light"
            >
              <GiHamburgerMenu />
            </button>
          </div>
          {drop && <DropDown onClick={() => setDrop(false)} />}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
