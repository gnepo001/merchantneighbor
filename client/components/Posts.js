import React from "react";

const Post = ({ title, image, description, price }) => {
  return (
    <div className="flex flex-col mx-5 mt-5">
      {image ? (
        <img className="object-cover h-48 w-96" src={image} />
      ) : (
        <div className="h-full w-full">
          <h1 className="text-center mt-[40%]">No Image</h1>
        </div>
      )}
      <h1 className="font-bold">{title}</h1>
      <div>{price}</div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4 place-items-stretch ">
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
