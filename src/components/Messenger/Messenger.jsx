import React from "react";
import c from "./Messenger.module.css";
import { NavLink } from "react-router-dom";

let dialogsData = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Marina" },
  { id: 3, name: "Maxim" },
  { id: 4, name: "Julia" },
  { id: 5, name: "Alex" }
];

let messagesData = [
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
  let path = "/messenger/" + props.id;

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

let dialogs = dialogsData.map(d => <Dialog id={d.id} name={d.name} />);

let messages = messagesData.map(m => (
  <Message id={matchMedia.id} message={m.text} />
));

const Messenger = props => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>{dialogs}</div>
      <div className={c.messages}>{messages}</div>
    </div>
  );
};

export default Messenger;
