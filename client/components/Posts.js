import React from "react";

const Post = ({ title, image, description, price }) => {
  return (
    <div className="flex flex-col w-1/5">
      <h1>{title}</h1>
      {image ? (
        <div className="h-full w-full">
          <img src={image} />
        </div>
      ) : (
        <div className="h-full w-full">
          <h1 className="text-center mt-[40%]">No Image</h1>
        </div>
      )}
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
          image={post.image}
          price={post.price}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default Posts;
