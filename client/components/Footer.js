import React from "react";

// Footer bottom page info
const Footer = () => {
  return (
    <div className="flex flex-col bg-[#0FE2D5] mt-5 pt-5">
      <div className="flex flex-row  text-white justify-around flex-1 mb-auto">
        <div className="flex flex-col w-1/5">
          <div className="font-bold">Shop</div>
          <div>How it works</div>
          <div>How to Stay safe</div>
        </div>
        <div className="flex flex-col w-1/5">
          <div className="font-bold">About</div>
          <div>Our Mission</div>
          <div>Our Technology</div>
          <div>Careers</div>
        </div>
        <div className="flex flex-col w-1/5">
          <div className="font-bold">Help</div>
          <div>FAQs</div>
          <div>Support</div>
          <div>Community</div>
        </div>
        <div className="flex flex-col w-1/5">
          <div className="font-bold">Careers</div>
          <div>Looking for a career?</div>
        </div>
      </div>
      <div className="ml-8 text-white border-t-2 mt-5 mb-5">
        © 2023 MerchantNeighbor Inc.
      </div>
    </div>
  );
};

export default Footer;
