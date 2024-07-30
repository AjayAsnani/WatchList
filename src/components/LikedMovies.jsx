import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const LikedMovies = ({ userEmail, onLogout, likedMovies, onRemoveMovie }) => {
  return (
    <div className="flex ">
      <Sidebar
        onLogout={onLogout}
        userEmail={userEmail}
        likedMovies={likedMovies}
      />
      <div className=" p-10">
        <h1 className="text-4xl mb-4 lg:mb-0">
          Liked <span className="text-red-500">Movies</span>
        </h1>
        {likedMovies.length === 0 ? (
          <p>No Liked Movies</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {likedMovies.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <Link to={`/movie/${movie.imdbID}`}>
                  <img src={movie.Poster} />

                  <h3 className="text-lg font-bold">{movie.Title}</h3>
                  <p className="text-sm">{movie.Year}</p>
                </Link>
                <button
                  onClick={() => onRemoveMovie(movie.imdbID)}
                  className=" border mt-3 bg-red-500 rounded-xl p-2 w-full text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedMovies;
