import React from "react";
import c from "./Messenger.module.css";
import { NavLink } from "react-router-dom";

let dialogs = [
  { userid: 1, name: "Ivan" },
  { userid: 2, name: "Marina" },
  { userid: 3, name: "Maxim" },
  { userid: 4, name: "Julia" },
  { userid: 5, name: "Alex" }
];

let messages = [
  { id: 1, text: "Hi!" },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  { id: 3, text: "Photo" },
  { id: 4, text: "React 1<3" },
  { id: 5, text: "eeee" },
  { id: 6, text: "bb" }
];

const Dialog = props => {
  let path = "/messenger/" + props.userid;

  return (
    <div className={c.dialog}>
      <NavLink to={path} activeClassName={c.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={c.message}>{props.message}</div>;
};

const Messenger = props => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        {dialogs.map(dialog => {
          return <Dialog userid={dialog.userid} name={dialog.name} />;
        })}
      </div>
      <div className={c.messages}>
        {messages.map(message => {
          return <Message id={message.id} message={message.text} />;
        })}
      </div>
    </div>
  );
};

export default Messenger;
