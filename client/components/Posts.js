import React from "react";
import format from "number-format.js";
import Link from "next/link";

// Post Component
const Post = ({ title, image, description, price }) => {
  return (
    <div className="flex flex-col mx-3 mt-5 cursor-pointer">
      {/* render image if none render "no image text" */}
      {image ? (
        <img
          className="object-cover h-48 w-96 rounded-lg hover:opacity-60 transition duration-300 ease-in-out"
          src={image}
        />
      ) : (
        <div className="h-full w-full bg-slate-200 rounded-lg hover:opacity-60 transition duration-300 ease-in-out">
          <h1 className="text-center py-20">No Image</h1>
        </div>
      )}
      <h1 className="font-bold">{title}</h1>
      {/* Render Price if none render "Free" */}
      {price == 0 ? (
        "FREE"
      ) : (
        <div>{format("$ #,###", price, { enforceMaskSign: true })}</div>
      )}
      <p className="text-gray-400 text-sm ">{description}</p>
    </div>
  );
};

// Posts Component
const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4 place-items-stretch ">
      {posts.map((post) => (
        // Sends link to pages/[id].js
        <Link
          key={post.id}
          href={{
            pathname: `/posts/${post.id}`,
          }}
        >
          <Post
            title={post.title}
            image={post.image}
            price={post.price}
            description={post.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
