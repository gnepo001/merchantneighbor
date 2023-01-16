import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [postData, setPostData] = useState({});

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:8000/api/posts/${id}`);
    console.log(data.data);
    setPostData(data.data[0]);
  };

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);

  return (
    <div>
      <img src={postData.image} />
      <h1>{postData.title}</h1>
      <h1>{postData.price}</h1>
      <h1>{postData.description}</h1>
      <h1>{postData.user}</h1>
    </div>
  );
};

export default Post;
