import React from "react";

const PostItemAPI = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>{" "}
      {/* Change title if necessary based on your API response */}
      <img src={post.imageURL} alt={post.title} />{" "}
      {/* Adjust according to your API's structure */}
      <p>{post.description}</p> {/* Other relevant field */}
    </div>
  );
};

export default PostItemAPI;
