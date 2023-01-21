import React, { useState } from "react";
import Link from "next/link";
import Popup from "./Popup";

// Header
const Header = ({ user }) => {
  const [popup, setPopup] = useState(false);

  const chidltoparent = (data) => {
    setPopup(data);
  };

  return (
    <div className="pt-3 flex flex-row justify-between items-center">
      <div className="flex flex-col text-[#0FE2D5] text-center w-1/5 ml-5">
        <div className="font-bold text-3xl">MerchantNeighbor</div>
        <div className="text-xs">Find things you need, Near you!</div>
      </div>
      <div className="flex flex-row justify-around font-bold text-lg w-1/5">
        {user ? (
          <div>Welcome, {user}</div>
        ) : (
          <button onClick={() => setPopup(!popup)}>
            <div>Log in</div>
          </button>
        )}
        <div>Cart</div>
        {popup && <Popup ctp={chidltoparent} />}
      </div>
    </div>
  );
};

export default Header;
