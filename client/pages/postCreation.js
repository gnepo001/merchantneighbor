import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineFileImage } from "react-icons/ai";

import { Header, NavBar, Footer } from "../components/index.js";

import { createPost } from "../services/index";

//-----This will handle post creation from the client side-----//
//     and add it to the database                             //

const NotLoggedIn = () => {
  return (
    <div>
      <div className="mt-32 text-center text-xl">
        <div>Create Your Profile and start selling today!</div>
        <button className="bg-[#0FE2D5] rounded-xl p-3 text-white">
          {" "}
          Sign Up!
        </button>
      </div>
    </div>
  );
};

const postCreation = () => {
  const [token, setToken] = useState(null);

  //waits for page to load in before calling on token item
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const [post, setPost] = useState({
    title: "",
    description: "",
    tags: "",
    price: 0,
    likes: 0,
    image: "",
  });

  const handleSumbitForm = (e) => {
    createPost(post, token);
    e.preventDefault();
  };

  return (
    <div className="bg-white text-black flex flex-col justify-between min-h-screen">
      <div>
        <div>
          <Header />
          <NavBar />
        </div>
        {token == null || token === "" ? (
          <NotLoggedIn />
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
              <button
                type="file"
                name="filename"
                className="mt-2 flex flex-row bg-[#0FE2D5] rounded-xl mx-auto justify-center items-center text-white py-1 w-1/2 hover:text-gray-500"
              >
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
              <div className="flex flex-row items-center">
                <label>Tags</label>
                <p className="text-gray-400 text-xs ml-2">
                  Add tags that best describe your item, helps promote to
                  related items
                </p>
              </div>
              <input className="bg-white border-2 rounded-2xl" />
              <div className="w-full flex justify-end mt-5">
                <button
                  type="submit"
                  className="rounded-2xl bg-[#0FE2D5] py-2 w-1/5 text-white hover:text-gray-500"
                >
                  Create Post
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default postCreation;
