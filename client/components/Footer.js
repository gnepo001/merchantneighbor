import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row bg-[#0FE2D5] text-white justify-around">
      <div className="flex flex-col w-1/5">
        <div className="font-bold">About</div>
        <div>About Us</div>
        <div>About</div>
      </div>
      <div className="flex flex-col w-1/5">
        <div className="font-bold">Help</div>
        <div>Help Center</div>
        <div>Community</div>
      </div>
      <div className="flex flex-col w-1/5">
        <div className="font-bold">Careers</div>
        <div>Looking for a career?</div>
      </div>
    </div>
  );
};

export default Footer;
