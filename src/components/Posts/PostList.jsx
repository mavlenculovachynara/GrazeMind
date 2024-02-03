import React from "react";
import PostItem from "./PostItem";
import User from "../../image/user.webp";

const PostList = () => {
  return (
    <div className="postlist_container">
      <div className="container postlist">
        <div className="postitem_add">
          {" "}
          <div className="postitem_request">
            {" "}
            <img src={User} alt="img" />
            <span>Создайте ветку...</span>
          </div>
          <div className="postitem_addbutton">
            <button>Опубликовать</button>
          </div>
        </div>
        <hr />
        <PostItem />
      </div>
    </div>
  );
};

export default PostList;
