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
  };

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);

  return (
    <div className="bg-white text-black">
      <Header />
      <NavBar />
      <div className="mt-12 ml-8">
        <div className="font-bold text-xl">{userData.username}</div>
        <div>
          Memeber since {moment(userData.datejoined).format("MMM YYYY")}
        </div>
        <div>Items</div>
      </div>
    </div>
  );
};

export default UserPage;
