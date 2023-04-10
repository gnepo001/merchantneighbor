import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

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
      <Header />
      <NavBar />
      <div>{userData.username}</div>
      <div>{moment(userData.datejoined).format("MMM YYYY")}</div>
    </div>
  );
};

export default UserPage;
