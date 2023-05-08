import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Popup } from "./index.js";

import { logout } from "../services/index";

// Header
const Header = () => {
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [ID, setID] = useState("");

  const chidltoparent = (data) => {
    setPopup(data);
  };
  const chidltoparent2 = (data1) => {
    //console.log(data1);

    localStorage.setItem("token", data1.token);
    localStorage.setItem("email", data1.email);
    localStorage.setItem("ID", data1.id);
    location.reload();
  };

  const logouthandle = () => {
    setUser("");
    setEmail("");
    setID("");
    localStorage.setItem("token", "");
    localStorage.setItem("email", "");
    localStorage.setItem("ID", "");
    //logout(user);
  };

  useEffect(() => {
    setUser(localStorage.getItem("token"));
    setEmail(localStorage.getItem("email"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div>
      <div className="pt-3 flex flex-row justify-between items-center">
        <Link
          href="/"
          className="flex flex-col text-[#0FE2D5] text-center w-1/5 ml-5"
        >
          <div className="font-bold text-3xl">MerchantNeighbor</div>
          <div className="text-xs">Find things you need, Near you!</div>
        </Link>

        <div className="flex flex-row justify-around font-bold text-lg w-1/5">
          {user == null || user === "" ? (
            <button onClick={() => setPopup(!popup)}>
              <div>Log in</div>
            </button>
          ) : (
            <div className="flex flex-row">
              <Link
                href={{
                  pathname: `../users/${ID}`,
                }}
                className="hover:underline"
              >
                Welcome, {email}
              </Link>
              <button onClick={() => logouthandle()}>
                <div className="ml-3">Log out</div>
              </button>
            </div>
          )}
          <Link href="/postCreation">
            <div>Sell</div>
          </Link>
          <div>Cart</div>
          {popup && <Popup ctp={chidltoparent} ctp2={chidltoparent2} />}
        </div>
      </div>
      <div className="w-full flex">
        <input
          className="bg-white border-2 rounded-lg w-1/3 mx-auto"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Header;
