import React, { useState } from "react";
import Link from "next/link";
import Popup from "./Popup";

// Header
const Header = () => {
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState("");
  const [email, SetEmail] = useState(false);

  const chidltoparent = (data) => {
    setPopup(data);
  };

  const chidltoparent2 = (data1) => {
    //e.preventDefault();
    console.log(data1);
    SetEmail(data1.email);
    setUser(data1.token);
    localStorage.setItem("token", data1.token);
    localStorage.setItem("email", data1.email);

    //console.log("tester");
  };

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
        {user ? (
          <div>Welcome, {email}</div>
        ) : (
          <button onClick={() => setPopup(!popup)}>
            <div>Log in</div>
          </button>
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
