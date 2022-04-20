import React from "react";
import { Link } from "react-router-dom";
import Card from "../commons/Card";

const Content = ({ movie }) => {
  
  return (
    <div className="container is-fluid columns">
      <div className="columns is-multiline layout">
        {movie.results ? (
          movie.results.map((movie, i) => {
            return (
              <div className="column is-3" key={i}> 
                <Link to={`/movie/${movie.id}`}>
                  <Card movie={movie} />
                </Link>
              </div>
            );
          })
        ) : (
          <Link to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Content;
