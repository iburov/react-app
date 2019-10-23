import React from "react";
import c from "./Messenger.module.css";
import { NavLink } from "react-router-dom";

const Messenger = props => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        <div className={c.dialog}>
          <NavLink to="/messenger/1">Ivan</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/messenger/2">Marina</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/messenger/3">Maxim</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/messenger/4">Julia</NavLink>
        </div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Hi!</div>
        <div className={c.message}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className={c.message}>Photo</div>
      </div>
    </div>
  );
};

export default Messenger;
