import React from "react";
import c from "./Post.module.css";

const Post = () => {
  return (
    <div className={c.item}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png"
        className={c.avatar}
      />
      <p className={c.text}>Post 1 text</p>
      <div className="c.like_btn">
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
