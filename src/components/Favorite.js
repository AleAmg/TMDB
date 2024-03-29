import { AuthContext } from "../context/auth";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Favorite2 from "./Favorite2";

const Favorites = () => {
  const usuario = useContext(AuthContext);
  const [isFav, setIsFav] = useState([]);

  const isFavorite = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/favoritos`,
        {
          userId: usuario.id,
        }
      );
      setIsFav(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container is-fluid columns">
      <div className="columns is-multiline layout">
        {isFav.length > 3
          ? isFav.map((movie, i) => {
              return (
                <div className="column is-3" key={i}>
                  <Favorite2 key={movie.id} movie={movie.movieId} />
                </div>
              );
            })
          : isFav.map((movie, i) => {
              return (
                <div className="column" key={i}>
                  <Favorite2 key={movie.id} movie={movie.movieId} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Favorites;
