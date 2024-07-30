import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://www.omdbapi.com/";

const useFetchMovies = (searchTerm = "Marvel") => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm) {
        setMovies([]);
        setLoading(false);
        return;
      }

      try {
        const promises = [];
        for (let page = 1; page <= 2; page++) {
          promises.push(
            axios.get(
              `${API_URL}?s=${searchTerm}&apikey=${API_KEY}&page=${page}`
            )
          );
        }
        const results = await Promise.all(promises);
        const moviesData = results.flatMap((response) => response.data.Search);

        setMovies(moviesData.slice(0, 20));
        setLoading(false);
      } catch (error) {
        setError(error.message || "An error occured");
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchTerm]);

  return { movies, loading, error };
};

export default useFetchMovies;
