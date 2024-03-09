import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
