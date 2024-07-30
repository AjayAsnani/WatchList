import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";

const Sidebar = ({ onLogout, userEmail, likedMovies, isSidebarVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0  p-4 transition-transform duration-300 ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:relative lg:w-[20%] bg-white`}
    >
      <div className="h-full">
        <h2 className="text-3xl font-bold text-red-500 text-center">
          WatchLists
        </h2>
        <div className="flex items-center justify-start border p-2 rounded-lg mt-10 gap-4">
          <IoIosSearch className="h-5 w-5 " />
          <input
            type="text"
            className="w-full p-1 rounded-lg  text-black"
            placeholder="Search"
          />{" "}
        </div>
        <Link
          to="/"
          className="flex items-center justify-start border p-2 rounded-lg mt-5 gap-4 text-white bg-red-500 "
        >
          <IoHomeOutline className="h-5 w-5 " />
          <p>Home</p>
        </Link>
        <Link
          to="/liked-movies"
          className="flex items-center justify-start border p-2 rounded-lg mt-5 gap-4 text-white bg-red-500 "
        >
          <SlLike className="h-5 w-5 " />
          <p>Liked Movies</p>
        </Link>
        <hr className="border-t border-gray-600 mt-4" />
        <h2 className="text-2xl text-left mt-3">My Lists</h2>
        <ul className="mt-2 ">
          {likedMovies.map((movie) => (
            <li
              key={movie.imdbID}
              className="text-left text-white border mt-3 p-2 font-bold rounded-lg bg-gray-600 "
            >
              {movie.Title}
            </li>
          ))}
        </ul>
      </div>
      <div className="  p-2 ">
        <div className="flex items-center justify-start border p-2 rounded-lg mt-10 gap-4">
          <FaRegUserCircle className="h-5 w-5 " />
          <p className="text-l">{userEmail}</p>
        </div>
        <button
          className="mt-4 p-2 bg-red-500 text-white rounded-lg w-full"
          onClick={onLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
