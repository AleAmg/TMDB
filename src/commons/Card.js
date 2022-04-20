import goku from "../assets/goku.jpg"
const Card = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
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
        <div className="media">
          <div className="media-left">
            <div className="media-content">
              <p className="title is-6">{movie.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
