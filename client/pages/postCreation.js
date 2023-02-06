import React from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

const postCreation = () => {
  const router = useRouter();
  const { token } = router.query;
  console.log(token);
  console.log("----");
  return (
    <div className="bg-white text-black">
      <Header />
      <NavBar />
      {token == null || token === "" ? (
        <div>Not Logged in!</div>
      ) : (
        <div className="max-w-5xl max-h-5xl mx-auto border-4 rounded-2xl mt-12">
          <div className="flex justify-end mx-10 mt-6">Cancel</div>
          <div className="mt-16 text-2xl text-center font-bold">
            Post an Item
          </div>
          <form className="flex flex-col w-4/5 mx-auto mb-12">
            <button className="mt-2 flex flex-row bg-[#0FE2D5] rounded-xl mx-auto justify-center items-center text-white py-1 w-1/2">
              <AiOutlineFileImage className="text-3xl mr-2" />
              <div>Add Photo</div>
            </button>
            <div className="text-center">Add and Image to Intice</div>
            <label>Price</label>
            <input className="bg-white border-2 rounded-2xl" />
            <label>Title</label>
            <input className="bg-white border-2 rounded-2xl" />
            <label>Description(optional)</label>
            <input className="bg-white border-2 rounded-2xl" />
            <label>Tags</label>
            <input className="bg-white border-2 rounded-2xl" />
          </form>
        </div>
      )}
    </div>
  );
};

export default postCreation;
