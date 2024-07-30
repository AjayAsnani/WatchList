import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DataFetcher from "./DataFetcher";
import SearchBar from "./SearchBar";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = ({ userEmail, onLogout, likedMovies, onLikeMovie }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex min-h-screen ">
      <Sidebar
        onLogout={onLogout}
        userEmail={userEmail}
        likedMovies={likedMovies}
        isSidebarVisible={isSidebarVisible}
      />
      <div
        className={`flex-1 ${
          isSidebarVisible ? "ml-64" : "ml-0"
        } transition-margin duration-300`}
      >
        <button
          className="fixed top-4 left-4 lg:hidden p-2 bg-red-500 text-white rounded-full"
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? <FaTimes /> : <FaBars />}
        </button>

        <div className=" p-10">
          <div className="w=full border border-red-500 p-3 bg-gray-100">
            <h1 className="text-4xl">
              Welcome to <span className="text-red-500">Watchlists</span>
            </h1>
            <p className="mt-4 text-xl">
              Browse Movies, add them to Watchlists and share them with friends.
            </p>
            <p className=" text-xl">
              Just Click the <span className="text-red-500"> Like Button </span>
              to add a movie, or click the poster to see the details of the
              movie or mark the movie as watched.
            </p>
          </div>
          <SearchBar onSearch={handleSearch} />
          <DataFetcher
            searchQuery={searchQuery}
            onLikeMovie={onLikeMovie}
            likedMovies={likedMovies}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
