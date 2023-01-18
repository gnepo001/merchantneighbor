import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import format from "number-format.js";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Post = () => {
  const router = useRouter(); //create router to pull data from url params
  const { id } = router.query;

  const [postData, setPostData] = useState({});

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:8000/api/posts/${id}`);
    console.log(data.data);
    setPostData(data.data[0]);
  };

  //runs during first render and any re renders
  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);

  return (
    <div className="bg-white text-black">
      <Header />
      <NavBar />
      <div className="flex flex-row  mt-12">
        <div className="w-1/3 h-1/3 mt-5 mx-5">
          <img className="rounded-xl" src={postData.image} />
        </div>
        <div className="w-1/2 border-t-2">
          <h1 className="text-center text-2xl font-bold">{postData.title}</h1>
          <div className=" pb-12">
            <h1 className="mx-5 font-bold">
              {format("$ #,###.00", postData.price, { enforceMaskSign: true })}
            </h1>
            <h1 className="w-full mx-5">{postData.description}</h1>
          </div>
          <div className="flex flex-col items-center border-b-2 pb-5">
            <button className="rounded-xl border-[#0FE2D5] border-2 w-1/2 mt-5">
              Ask
            </button>
            <button className="rounded-xl bg-[#0FE2D5] text-white w-1/2 mt-1">
              Make Offer
            </button>
          </div>
          {/* <h1>{postData.user}</h1> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
