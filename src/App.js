import React from "react";
import { Routes, Route } from "react-router";

  import CardInfo from "./commons/CardInfo";
  import NavBar from "./components/NavBar";
  import Search from "./components/Search";
  import NewUser from "./components/NewUser";
  import LogIn from "./components/LogIn";
  import Log from "./components/Log";

import AuthContextProvider from "./context/auth";


const App = () => {

  return (
    <AuthContextProvider>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<h1 className="title is-1"> Welcome at TMDB</h1>}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<CardInfo />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
