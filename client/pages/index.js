import React, { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const index = ({ posts }) => {
  const [user, setUser] = useState(null);

  return (
    <div className="bg-white text-black flex flex-col justify-between min-h-screen">
      <div>
        <div>
          <Header user={user} />
          <NavBar />
        </div>
        <Posts posts={posts} />
      </div>
      <Footer />
    </div>
  );
};

//Pre render data fetching
export const getServerSideProps = async () => {
  const posts = await axios.get("http://localhost:8000/api/posts");
  return {
    props: {
      posts: posts.data,
    },
  };
};

export default index;
