import React from "react";
import Card from "../commons/Card";

const Content = ({ movie }) => {
  return (
    <div className="container is-fluid columns">
      <div className="columns is-multiline layout">
        {movie.results.length > 3
          ? movie.results.map((movie, i) => {
              return (
                <div className="column is-3" key={i}> 
                  <Card movie={movie} />
                </div>
              );
            })
          : movie.results.map((movie, i) => {
              return (
                <div className="column" key={i}>
                  <Card movie={movie} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Content;
