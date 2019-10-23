import React from "react";
import c from "./Messenger.module.css";
import { NavLink } from "react-router-dom";

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
        <Dialog name="Ivan" userid="1" />
        <Dialog name="Marina" userid="2" />
        <Dialog name="Maxim" userid="3" />
        <Dialog name="Julia" userid="4" />
      </div>
      <div className={c.messages}>
        <Message message="Hi!" />
        <Message
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Message message="Photo" />
      </div>
    </div>
  );
};

export default Messenger;
