import React from "react";
import format from "number-format.js";
import Link from "next/link";

const Post = ({ title, image, description, price }) => {
  return (
    <div className="flex flex-col mx-3 mt-5 cursor-pointer">
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
      {price == 0 ? (
        "FREE"
      ) : (
        <div>{format("$ #,###.00", price, { enforceMaskSign: true })}</div>
      )}

      <p className="text-gray-400 text-sm ">{description}</p>
    </div>
  );
};

const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4 place-items-stretch ">
      {posts.map((post) => (
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
