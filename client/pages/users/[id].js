import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";

import { Header, NavBar, Footer, Mini_Card } from "../../components/index";

const UserPage = () => {
  //router allows to get param from pior link
  const router = useRouter();
  const { id } = router.query;

  const [userData, setUserData] = useState({});
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:8000/api/users/${id}`);
    setUserData(data.data[0]);
  };

  const fetchItems = async () => {
    const data = await axios.get(
      `http://localhost:8000/api/creatorAllPosts/${id}`
    );
    setItems(data.data);
  };

  //after checking that router has loaded, collecting user data
  //and user items will be fetched
  useEffect(() => {
    if (router.isReady) {
      fetchData();
      fetchItems();
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
        <div className="flex flex-row">
          {items.length !== 0 &&
            items.map((item) => (
              <Mini_Card
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
