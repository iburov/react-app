import React from "react";
import Posts from "./Posts/Posts";
import c from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5630e470e4b07269a3528caf/1487616583171-J0QBV91W2VR3JP9MM0WT/ke17ZwdGBToddI8pDm48kMdCl4L8uzEwzG0e4ogPUWcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dpHl-dCcz5B8qmoh6qRuwaG4uPO4bCLZ-9mqhaf9CXPXZtJ3qR9G2BYeA0wOAaeYNg/how-long-scotland-header.jpg?format=1500w"
          className={c.cover}
        />
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53ab8f0c-1540-40d2-bada-2a6f7410b580/d65dw14-d5fe2295-e053-4d82-a469-fd67a3e27923.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzYWI4ZjBjLTE1NDAtNDBkMi1iYWRhLTJhNmY3NDEwYjU4MFwvZDY1ZHcxNC1kNWZlMjI5NS1lMDUzLTRkODItYTQ2OS1mZDY3YTNlMjc5MjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.d_KbfxUAHNmkFstwBErXWthyGsMHZweRCOXz64DIfy8"
          className={c.avatar}
        />
        <div className={c.information}>
          <ul className={c.information_list}>
            <li>Ivan Burov</li>
            <li>Date of birth: 24/03/1999</li>
            <li>City: Montreal</li>
            <li>Status: kalsarikännit</li>
          </ul>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
