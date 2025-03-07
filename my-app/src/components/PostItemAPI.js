// PostItemAPI.js
import React from "react";

const PostItemAPI = ({ post }) => {
  return (
    <div className="post-item">
      <img src={post.webformatURL} alt={post.user} />
      <h3>{post.user}</h3>
      <p>{post.tags}</p>
    </div>
  );
};

export default PostItemAPI;
