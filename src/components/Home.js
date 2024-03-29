import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../commons/Card";
import { api_key } from "./../config.json";

const Home = () => {
  const tmdbAPI = "https://api.themoviedb.org/3";

  const [movie, setMovie] = useState({});
  const data = new Date().getDate() - 1;

  let reqOfDay;

  if (data > 19) {
    reqOfDay = data - 19;
  } else {
    reqOfDay = data;
  }

  const popular = async () => {
    try {
      await axios
        .get(`${tmdbAPI}/movie/popular${api_key}`)
        .then((res) => res.data)
        .then((data) => {
          setMovie(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    popular();
  }, []);

  return (
    <div className="div">
      <h1 className="title is-1 "> Welcome at TMDB</h1>
      <h2 className="title is-3">Today we recommend you to watch:</h2>
      <div className="img">
        {movie.results && <Card movie={movie.results[reqOfDay]} />}
      </div>
    </div>
  );
};

export default Home;
