import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router";

import Home from "./components/Home";
import CardInfo from "./commons/CardInfo";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import NewUser from "./components/NewUser";
import LogIn from "./components/LogIn";
import Log from "./components/Log";
import Favorites from "./components/Favorite";

import AuthContextProvider from "./context/auth";

const App = () => {
  return (
    <AuthContextProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/movie/:id" element={<CardInfo />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/log" element={<Log />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
