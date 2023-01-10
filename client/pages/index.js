import React from "react";
import axios from "axios";

import Header from "../components/header";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";

const index = ({ posts }) => {
  return (
    <div className="bg-white text-black">
      <Header />
      <NavBar />
      <Posts posts={posts} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const posts = await axios.get("http://localhost:8000/api/posts");

  return {
    props: {
      posts: posts.data,
    },
  };
};

export default index;
