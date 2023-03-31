import React, { useEffect, useState } from "react";
import Link from "next/link";
import Popup from "./Popup";

import { logout } from "../services/index";

// Header
const Header = () => {
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const chidltoparent = (data) => {
    setPopup(data);
  };
  const chidltoparent2 = (data1) => {
    //console.log(data1);

    localStorage.setItem("token", data1.token);
    localStorage.setItem("email", data1.email);
    location.reload();
  };

  const logouthandle = () => {
    setUser("");
    setEmail("");
    localStorage.setItem("token", "");
    localStorage.setItem("email", "");
    //logout(user);
  };

  useEffect(() => {
    setUser(localStorage.getItem("token"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
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
            <div>Welcome, {email}</div>
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
  );
};

export default Header;
