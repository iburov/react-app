import React from "react";
import c from "./Header.module.css";

const Header = () => {
  return (
    <div className={c.header}>
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        className={c.logo}
      />
      <div className={c.title}>Learning react</div>
    </div>
  );
};

export default Header;
