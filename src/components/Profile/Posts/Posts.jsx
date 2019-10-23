import React from "react";
import Post from "./Post/Post";
import c from "./Posts.module.css";

let postsData = [
  {
    id: 1,
    username: "odduone",
    img: "https://picsum.photos/90/90",
    text: "Hello World!",
    like_count: 1234
  },
  {
    id: 2,
    username: "randomUser",
    img: "https://picsum.photos/90/90",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et.",
    like_count: 9
  },
  {
    id: 3,
    username: "BaNaNa",
    img: "https://picsum.photos/90/90",
    text: ":3",
    like_count: 99999
  }
];

let posts = postsData.map(p => (
  <Post
    id={p.id}
    username={p.username}
    img={p.img}
    text={p.text}
    like_count={p.like_count}
  />
));

const Posts = props => {
  return (
    <div className={c.postsData}>
      <h2>POSTS</h2>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <input type="button" value="Submit" />
      </div>
      <hr />
      {posts}
    </div>
  );
};

export default Posts;
