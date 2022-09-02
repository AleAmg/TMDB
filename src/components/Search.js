import axios from "axios";
import { useState, useEffect } from "react";
import Content from "./Content";
import { useParams } from "react-router";
import { api_key } from "./../config.json";

const Search = () => {
  const tmdbAPI = "https://api.themoviedb.org/3";

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
    <div className="container is-fluid container__card">
      <div className="my-5">
        {searchMovie.results && <Content movie={searchMovie} />}
      </div>
    </div>
  );
};

export default Search;
