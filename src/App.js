import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messenger from "./components/Messenger/Messenger";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapper_content">
        {/* <Profile /> */}
        <Messenger />
      </div>
    </div>
  );
};

export default App;
