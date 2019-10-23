import React from "react";
import c from "./Messenger.module.css";

const Messenger = props => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        <div className={c.dialog}>Ivan</div>
        <div className={c.dialog + " " + c.active}>Marina</div>
        <div className={c.dialog}>Maxim</div>
        <div className={c.dialog}>Julia</div>
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
