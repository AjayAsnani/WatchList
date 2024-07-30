import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_KEY = "e03b34b9";
const API_URL = "https://www.omdbapi.com/";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${API_URL}?i=${id}&apikey=${API_KEY}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError(error.message || "An error occurred");
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error Fetching Data: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      {movie && (
        <div className="flex flex-col md:flex-row">
          <img
            src={movie.Poster}
            alt={`${movie.Title} Poster`}
            className="w-full md:w-1/2 lg:w-1/3 h-auto mb-4 md:mb-0 rounded-lg"
          />
          <div className="md:ml-6 flex-1">
            <h2 className="text-3xl font-bold mb-4">{movie.Title}</h2>
            <p className="text-lg">
              <strong>Year: </strong>
              {movie.Year}
            </p>
            <p className="text-lg">
              <strong>Rating: </strong>
              {movie.imdbRating}
            </p>
            <p className="text-lg">
              <strong>Director: </strong>
              {movie.Director}
            </p>
            <p className="text-lg">
              <strong>Plot: </strong>
              {movie.Plot}
            </p>
            <p className="text-lg">
              <strong>Actors: </strong>
              {movie.Actors}
            </p>
            <p className="text-lg">
              <strong>Genre: </strong>
              {movie.Genre}
            </p>
            <p className="text-lg">
              <strong>Language: </strong>
              {movie.Language}
            </p>
            <p className="text-lg">
              <strong>Runtime: </strong>
              {movie.Runtime}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
