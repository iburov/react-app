import React from "react";
import Post from "./Post/Post";
import c from "./Posts.module.css";

const Posts = props => {
  return (
    <div className={c.posts}>
      <h2>POSTS</h2>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <input type="button" value="Submit" />
      </div>
      <hr />
      <Post
        username="Odduone"
        img="https://vignette.wikia.nocookie.net/the-forest-survivor/images/e/e5/NatureGuideDandelion.png/revision/latest?cb=20190922115016&path-prefix=ru"
        text="Hello World!"
        like_count="1234"
      />
      <Post
        username="RandomUser"
        img="http://iconshow.me/media/images/ui/Flat-UI-icons/png/128/Infinity-Loop.png"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra."
        like_count="666"
      />
      <Post
        username="Banana"
        img="https://d2ph5fj80uercy.cloudfront.net/01/cat3149.jpg"
        text=":3"
        like_count="9999999"
      />
      <Post
        username="Admin"
        img="https://picsum.photos/90/90"
        text="React forever"
        like_count="0"
      />
    </div>
  );
};

export default Posts;
