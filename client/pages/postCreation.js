import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineFileImage } from "react-icons/ai";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { createPost } from "../services/index";

const postCreation = () => {
  const [token, setToken] = useState(null);

  //waits for page to load in before calling on token item
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const [post, setPost] = useState({
    title: "1",
    description: "1",
    tags: "1",
    price: 22,
    likes: 1,
    image: null,
  });

  const handleSumbitForm = () => {
    createPost(post, token);
    history.go("/");
  };

  return (
    <div className="bg-white text-black">
      <Header />
      <NavBar />
      {token == null || token === "" ? (
        <div>Not Logged in!</div>
      ) : (
        <div className="max-w-5xl max-h-5xl mx-auto border-4 rounded-2xl mt-12">
          <Link
            href="/"
            className="flex justify-end mx-10 mt-6 hover:text-gray-500"
          >
            Cancel
          </Link>
          <div className="mt-16 text-2xl text-center font-bold">
            Post an Item
          </div>
          <form
            className="flex flex-col w-4/5 mx-auto mb-12"
            onSubmit={handleSumbitForm}
          >
            <button className="mt-2 flex flex-row bg-[#0FE2D5] rounded-xl mx-auto justify-center items-center text-white py-1 w-1/2">
              <AiOutlineFileImage className="text-3xl mr-2" />
              <div>Add Photo</div>
            </button>
            <div className="text-center">Add an image to entice</div>
            <label>Price</label>
            <input
              className="bg-white border-2 rounded-2xl"
              onChange={(e) => setPost({ ...post, price: e.target.value })}
            />
            <label>Title</label>
            <input
              className="bg-white border-2 rounded-2xl"
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <label>Description(optional)</label>
            <input
              className="bg-white border-2 rounded-2xl"
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
            />
            <label>Tags</label>
            <input className="bg-white border-2 rounded-2xl" />
            <button type="submit">Create Post</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default postCreation;
