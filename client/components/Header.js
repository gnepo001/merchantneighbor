import React from "react";

// Header
const Header = () => {
  return (
    <div className="pt-3 flex flex-row justify-between items-center">
      <div className="flex flex-col text-[#0FE2D5] text-center w-1/5 ml-5">
        <div className="font-bold text-3xl">MerchantNeighbor</div>
        <div className="text-xs">Find things you need, Near you!</div>
      </div>
      <div className="flex flex-row justify-around font-bold text-lg w-1/5">
        <div>Cart</div>
        <div>Log in</div>
      </div>
    </div>
  );
};

export default Header;
