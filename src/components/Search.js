import axios from "axios";
import { useState, useEffect } from "react";
import Content from "./Content";
import { useParams } from "react-router";

const Search = () => {
  const tmdbAPI = "https://api.themoviedb.org/3";
  const api_key = "?api_key=3ba880eccd3167111b00500430da36aa&language=es-MX";

  const [searchMovie, setSearchMovie] = useState([]);

  const { search } = useParams();

  useEffect(() => {
    axios
      .get(`${tmdbAPI}/search/movie${api_key}&query=${search}`)
      .then((res) => res.data)
      .then((data) => {
        setSearchMovie(data);
      });
  }, [search]);

  return (
    <div className="container is-fluid">
      <div className="my-5">
        {searchMovie.results && <Content movie={searchMovie} />}
      </div>
    </div>
  );
};

export default Search;
