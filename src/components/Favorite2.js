import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../commons/Card";

const Favorite2 = ({ movie }) => {
  const tmdbAPI = "https://api.themoviedb.org/3";
  const api_key = "?api_key=3ba880eccd3167111b00500430da36aa&language=es-MX";
  const [film, setFilm] = useState([]);

  const peli = async () => {
    const { data } = await axios.get(`${tmdbAPI}/movie/${movie}${api_key}`);
    setFilm(data);
  };

  useEffect(() => {
    peli();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card">
      <Card movie={film} />
    </div>
  );
};

export default Favorite2;
