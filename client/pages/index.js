import React from "react";
import axios from "axios";

import Header from "../components/header";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";

const index = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <NavBar />
      <Posts />
    </div>
  );
};

export const getServerSideProps = async () => {
  const posts = await axios.get("http://localhost:8000/api/posts");

  return {
    props: {
      post: posts.data,
    },
  };
};

export default index;
