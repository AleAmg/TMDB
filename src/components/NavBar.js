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
    <div className="nav">
      <nav className="navbarFirst">
      <Link to={"/"}>
        <h1>TMDB</h1>
      </Link>

      <div className="end">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="buttons but">
              <button className="button my-3 is-light">
                <GoSearch />
              </button>
            </div>
            <input 
              {...search}
              className="input my-3 it"
              type="text"
              placeholder="Search movie"
              
            />
          </form>
        </div>
        <div>
          <div className="buttons">
            <button
              onClick={drop ? () => setDrop(false) : () => setDrop(true)}
              className="button my-3 is-light"
            >
              <GiHamburgerMenu />
            </button>

            {drop && <DropDown onClick={() => setDrop(false)} />}
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};
export default NavBar;
