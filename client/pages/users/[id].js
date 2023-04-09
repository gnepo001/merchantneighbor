import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [userData, setUserData] = useState({});

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:8000/api/users/${id}`);
    setUserData(data.data[0]);
    console.log(data);
  };

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);

  return (
    <div>
      Tester<div>{userData.username}</div>
    </div>
  );
};

export default UserPage;
