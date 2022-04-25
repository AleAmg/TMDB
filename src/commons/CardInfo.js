import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import { MdDelete , MdOutlineStarBorderPurple500} from "react-icons/md";


import goku from "../assets/goku.jpg";

const CardInfo = () => {
  const tmdbAPI = "https://api.themoviedb.org/3";
  const api_key = "?api_key=3ba880eccd3167111b00500430da36aa&language=es-MX";
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [isFav, setIsFav] = useState([]);
  const [reset, setReset] = useState(1);

  const usuario = useContext(AuthContext);

  const oneMovie = async () => {
    await axios
      .get(`${tmdbAPI}/movie/${id}${api_key}`)
      .then((res) => res.data)
      .then((data) => {
        setFilm(data);
      });
  };

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
    oneMovie();
    isFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, reset]);

  const addFavorite = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/favoritos/add", {
        movieId: id,
        userId: usuario.id,
      });
      setReset(reset + 1)
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const quitFavorite = async () => {
    try {
      await axios.delete(
        `/api/favoritos/delete/${parseInt(id)}/${parseInt(usuario.id)}`
      );
      console.log("ok");
      setReset(reset + 1)
    } catch (err) {
      console.log(err);
    }
  };

  const favoritos = isFav.filter((favorite) => {
    return parseInt(id) === favorite.movieId;
  });

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image">
            <img
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : goku
              }
              alt={film.title ? `${film.title}` : "image"}
              style={{ width: "560px", height: "780px", borderRadius: "35px" }}
            ></img>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h1>{film.title}</h1>
            {film.tagline && <h3>{film.tagline}</h3>}
            <dl>
              <dt>
                <strong>Descripcion: </strong>
              </dt>
              <dd>{film.overview ? film.overview : "No data"}</dd>
            </dl>
            <p>
              <strong>Género: </strong>
            </p>
            <ul>
              {film.genres && film.genres.length >= 1
                ? film.genres.map((film, i) => {
                    return <li key={i}>{film.name}</li>;
                  })
                : "No data"}
            </ul>
            <dl>
              <dt>
                <strong>Hompage: </strong>
              </dt>
              <dd>
                {film.homepage ? (
                  <a href={film.homepage}>{film.homepage}</a>
                ) : (
                  "No data"
                )}
              </dd>
            </dl>
          </div>
        </div>
        <div>
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
      </article>
    </div>
  );
};
export default CardInfo;