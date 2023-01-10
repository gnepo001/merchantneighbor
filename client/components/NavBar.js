import React from "react";
import Link from "next/link";

const NavButton = ({ link, tag }) => {
  return <Link href={link}>{tag}</Link>;
};

const NavBar = () => {
  return (
    <div className="border-b-2 border-solid mt-5 pb-2">
      <div className="flex flex-row justify-around">
        <NavButton tag="Electronics" link={"/"} />
        <NavButton tag="Home & Garden" link={"/"} />
        <NavButton tag="Clothing" link={"/"} />
        <NavButton tag="Baby" link={"/"} />
        <NavButton tag="Vehicles" link={"/"} />
        <NavButton tag="Toys, Games, & Hobbies" link={"/"} />
        <NavButton tag="More" link={"/"} />
      </div>
    </div>
  );
};

export default NavBar;
