import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import goku from "../assets/goku.jpg"

const CardInfo = () => {
  const tmdbAPI = "https://api.themoviedb.org/3";
  const api_key = "?api_key=3ba880eccd3167111b00500430da36aa&language=es-MX";
  const param = useParams();
  /* console.log(param.id) */;

  const [film, setFilm] = useState([]);

  const oneMovie = async () => {
    await axios
      .get(`${tmdbAPI}/movie/${param.id}${api_key}`)
      .then((res) => res.data)
      .then((data) => {
        setFilm(data);
      });
  };

  useEffect(() => {
    oneMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* console.log(film); */

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
              {(film.genres && (film.genres.length >= 1) ?
                film.genres.map((film, i) => {
                  return <li key={i}>{film.name}</li>;
                }) : "No data")}
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
      </article>
    </div>
  );
};
export default CardInfo;
