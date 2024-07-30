import React, { useState } from "react";
import useFetchMovies from "./useFetchMovies";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/sl";

const DataFetcher = ({ searchQuery, onLikeMovie, likedMovies }) => {
  const { movies, loading, error } = useFetchMovies(searchQuery || "Marvel");

  const handleLike = (movie) => {
    if (!likedMovies.some((likedMovie) => likedMovie.imdbID === movie.imdbID)) {
      onLikeMovie(movie);
    }
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error Fetching Data: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Link
          to={`/movie/${movie.imdbID}`}
          key={movie.imdbID}
          className="bg-white shadow-md rounded-lg p-4"
        >
          <img src={movie.Poster} />

          <h3 className="text-lg font-bold">{movie.Title}</h3>
          <p className="text-sm mt-1">({movie.Year})</p>

          <button
            className=" border mt-3 bg-red-500 rounded-xl p-2 w-full text-white text-lg"
            onClick={(e) => {
              e.preventDefault();
              handleLike(movie);
            }}
          >
            {likedMovies.some(
              (likedMovie) => likedMovie.imdbID === movie.imdbID
            )
              ? "Added"
              : "Like"}{" "}
          </button>
        </Link>
      ))}
    </div>
  );
};
export default DataFetcher;
