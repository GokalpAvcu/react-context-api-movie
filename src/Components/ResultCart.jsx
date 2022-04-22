import React from "react";

const ResultCart = ({ movie }) => {
  console.log(movie);
  return (
    <div className="result-card">
    <div className="poster-wrapper">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.poster_path}`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}
    </div>
    </div>
  );
};

export default ResultCart;
