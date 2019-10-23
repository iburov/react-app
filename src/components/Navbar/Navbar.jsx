import React from "react";
import c from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavElement = props => {
  return (
    <div className={c.item}>
      <NavLink to={"/" + props.url} activeClassName={c.active}>
        {props.text}
      </NavLink>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <NavElement url="profile" text="Profile" />
      <NavElement url="messenger" text="Messages" />
      <NavElement url="news" text="News" />
      <NavElement url="music" text="Music" />
      <NavElement url="settings" text="Settings" />
    </nav>
  );
};

export default Navbar;
