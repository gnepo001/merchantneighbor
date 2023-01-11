import React from "react";

const Post = ({ title, description, price }) => {
  return (
    <div className="flex flex-col w-1/5">
      <h1>{title}</h1>
      <div>{price}</div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const Posts = ({ posts }) => {
  return (
    <div className="flex flex-row justify-around">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          price={post.price}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default Posts;
