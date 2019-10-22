import React from "react";
import Post from "./Post/Post";
import c from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={c.posts}>
      POSTS
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
