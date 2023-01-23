import React from "react";
import { TiDelete } from "react-icons/ti";

const Popup = ({ ctp }) => {
  return (
    <div className="absolute w-screen h-screen top-0 bg-[#00000066] -translate-x-[40%] pt-28">
      <div className="bg-white z-100 rounded-lg w-1/3 h-3/5 mx-auto mt-22 max-w-md">
        <div className="flex flex-row ml-40 justify-between w-1/2 ">
          <h1 className="text-center pt-5 text-2xl">Login In</h1>
          <button className="text-gray-500" onClick={() => ctp(false)}>
            Cancel
          </button>
        </div>
        <div className="font-bold text-3xl text-[#0FE2D5] text-center mt-4">
          MerchantNeighbor
        </div>
        <form className="flex flex-col w-2/3 mx-auto mt-6">
          <label for="email">Email</label>
          <input
            className="bg-white border-2 rounded-lg"
            type="text"
            id="email"
            name="email"
          />
          <label for="email">Password</label>
          <input
            className="bg-white border-2 rounded-lg"
            type="password"
            id="password"
            name="password"
          />
          <input
            className="bg-[#0FE2D5] rounded-xl mt-5"
            type="submit"
            value="Log In"
          />
        </form>
        <div className="text-gray-500 font-sans w-1/2 mx-auto text-sm mt-3">
          Don't Have an Account? Create One here
        </div>
      </div>
    </div>
  );
};

export default Popup;
