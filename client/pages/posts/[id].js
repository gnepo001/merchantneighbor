import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import format from "number-format.js";
import Link from "next/link";
import moment from "moment";
import { RxAvatar } from "react-icons/rx";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineFlag,
} from "react-icons/ai";

import { Header, NavBar, Footer, Mini_Card } from "../../components/index.js";

const Post = () => {
  const router = useRouter(); //create router to pull data from url params
  const { id } = router.query;

  const [postData, setPostData] = useState({});
  const [userData, setUserData] = useState([]);
  const [arrs, setArrs] = useState();

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:8000/api/posts/${id}`);
    setPostData(data.data[0]);
  };

  const fetchClientData = async (username) => {
    const data = await axios.get(
      `http://localhost:8000/api/creatorAllPosts/${username}`
    );
    setUserData(data.data);
  };

  //runs during first render and any re renders
  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);

  useEffect(() => {
    setArrs(postData.tags && postData.tags.split(","));
  }, [postData.tags]);

  useEffect(() => {
    if (postData.userkey) {
      fetchClientData(postData.userkey);
    }
  }, [postData]);

  return (
    <div className="bg-white text-black flex flex-col justify-between">
      <Header />
      <NavBar />

      {/* Post Info */}
      <div className="flex flex-row mt-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-2/5 mt-5 mx-5">
          <div className="w-full bg-gray-100 p-4">
            {postData.image ? (
              <img className="rounded-xl" src={postData.image} />
            ) : (
              <div className="text-center p-32">No Image</div>
            )}
          </div>
          <div className="flex flex-row mt-5 border-t-2 border-b-2">
            <button className="bg-gray-300 rounded-2xl p-2 m-2 flex items-center">
              <AiOutlineHeart />
              Save
            </button>
            <button className="bg-gray-300 rounded-2xl p-2 m-2 flex items-center">
              <AiOutlineShareAlt />
              Share
            </button>
            <button className="bg-gray-300 rounded-2xl p-2 m-2 flex items-center">
              <AiOutlineFlag />
              Report
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-3/5 border-t-2 mt-5">
          <h1 className="text-center text-5xl mt-2">{postData.title}</h1>
          <div className="pb-12">
            <h1 className="mx-5 font-bold text-2xl">
              {postData.price == 0
                ? "Free"
                : format("$ #,###", postData.price, {
                    enforceMaskSign: true,
                  })}
            </h1>

            {/* <h1>{moment(postData.created).format("M-D-YYYY")}</h1> */}
            <h1 className="mx-5">{moment(postData.created).fromNow()}</h1>

            <h1 className="w-full mx-5">{postData.description}</h1>
          </div>
          <div className="flex flex-col items-center border-b-2 pb-5">
            <button className="rounded-xl border-[#0FE2D5] border-2 w-1/2 mt-5 hover:bg-gray-100">
              Ask
            </button>
            <button className="rounded-xl bg-[#0FE2D5] text-white w-1/2 mt-1 hover:bg-[#0cc9be]">
              Make Offer
            </button>
          </div>
          <div className="flex flex-row justify-around w-2/5 mt-5">
            <div className="rounded-full text-3xl w-5 text-center justify-center">
              <RxAvatar />
            </div>
            <div className="ml-5">
              <Link
                href={{
                  pathname: `../users/${postData.userkey}`,
                }}
              >
                <div className="font-bold">{postData.user}</div>
              </Link>
              <h1>
                Member since {moment(postData.datejoined).format("MMM YYYY")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-2 ml-5 font-bold text-2xl">Related Searches</div>
      <div className="flex flex-row ml-12">
        {/* Getting arrs will return undefiend this checks first if useEffect has  */}
        {/* taken affect, dont know exactly what caused the error but this fixes it */}
        {arrs &&
          arrs.map((tag) => (
            <Link
              href={
                {
                  // get related searches
                }
              }
              key={`arrs${tag}`}
              className="rounded-lg bg-gray-300 p-1 ml-2"
            >
              {tag}
            </Link>
          ))}
      </div>
      <div className="mt-12 mb-2 ml-5 font-bold text-2xl">Similar Items</div>
      <div className="mt-12 mb-2 ml-5 font-bold text-2xl">
        Other Items By the same seller
      </div>
      <div className="flex flex-row">
        {/* Checks to see if useEffect array is empty if empty return none if not then return values*/}
        {userData.lenght !== 0 &&
          userData.map((item) => (
            <Mini_Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const itemsSoldSame = await axios.get("http://")
// }

export default Post;
