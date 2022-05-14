import goku from "../assets/goku.jpg";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import { MdDelete, MdOutlineStarBorderPurple500 } from "react-icons/md";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const [isFav, setIsFav] = useState([]);
  const [reset, setReset] = useState(1);

  const usuario = useContext(AuthContext);

  const isFavorite = async () => {
    try {
      const { data } = await axios.post("/api/favoritos", {
        userId: usuario.id,
      });
      setIsFav(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  const addFavorite = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/favoritos/add", {
        movieId: movie.id,
        userId: usuario.id,
      });
      setReset(reset + 1);
      swal({
        title: "Add to favorite",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const quitFavorite = async () => {
    try {
      await axios.delete(
        `/api/favoritos/delete/${parseInt(movie.id)}/${parseInt(usuario.id)}`
      );
      setReset(reset + 1);
      swal({
        title: "Remove to favorite",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const favoritos = isFav.filter((favorite) => {
    return parseInt(movie.id) === favorite.movieId;
  });
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <div className="card-image">
          <figure className="image is-3by4">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : goku
              }
              alt={movie.title ? `${movie.title}` : "image"}
            ></img>
          </figure>
        </div>

        <div className="card-content">
          <div className="content">
            <p className="title is-6 titulo">{movie.title}</p>
          </div>
        </div>
      </Link>
      {usuario.isAuthenticated && (
        <div className="fav">
          {favoritos.length > 0 ? (
            <button className="button is-danger" onClick={quitFavorite}>
              <MdDelete />
            </button>
          ) : (
            <button className="button is-warning" onClick={addFavorite}>
              <MdOutlineStarBorderPurple500 />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
