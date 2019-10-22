import React from "react";
import c from "./Post.module.css";
import { tsPropertySignature } from "@babel/types";

const Post = props => {
  return (
    <div className={c.item}>
      <a className={c.username}>{props.username}</a>
      <div className={c.like_btn}>
        <img
          src="https://image.flaticon.com/icons/png/128/126/126471.png"
          className={c.like_btn_img}
        />
        <span className={c.like_count}>{props.like_count}</span>
      </div>
      <div className={c.avatar}>
        <img src={props.img} className={c.avatar_img} />
      </div>
      <p className={c.text}>{props.text}</p>
    </div>
  );
};

export default Post;
