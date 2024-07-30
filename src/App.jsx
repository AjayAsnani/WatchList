import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MovieDetails from "./components/MovieDetails";
import LikedMovies from "./components/LikedMovies";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [userEmail, setUserEmail] = useState(() => {
    try {
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        return JSON.parse(storedEmail);
      }
      return null;
    } catch (error) {
      console.error("Error retrieving user email", error);
      return null;
    }
  });

  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleSignup = (email) => {
    localStorage.setItem("userEmail", email);
    setUserEmail(email);
  };

  const handleLogin = (email) => {
    const storeEmail = localStorage.getItem("userEmail");
    if (storeEmail === null) {
      setUserEmail(email);
    } else {
      alert("Email Not Found. Please Sign UP First");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
  };

  const handleLikeMovie = (movie) => {
    if (!likedMovies.find((m) => m.imdbID === movie.imdbID)) {
      setLikedMovies((prevLikedMovies) => [...prevLikedMovies, movie]);
    }
  };

  const handleRemoveMovie = (imdbID) => {
    setLikedMovies((prevLikedMovies) =>
      prevLikedMovies.filter((movie) => movie.imdbID !== imdbID)
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            userEmail ? (
              <Home
                userEmail={userEmail}
                onLogout={handleLogout}
                likedMovies={likedMovies}
                onLikeMovie={handleLikeMovie}
              />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/liked-movies"
          element={
            <LikedMovies
              userEmail={userEmail}
              onLogout={handleLogout}
              likedMovies={likedMovies}
              onRemoveMovie={handleRemoveMovie}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
