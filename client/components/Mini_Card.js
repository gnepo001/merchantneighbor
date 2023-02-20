import React from "react";
import format from "number-format.js";
import Link from "next/link";

const Mini_Card = ({ id, title, image, price }) => {
  return (
    <Link
      className="flex-1 flex-col m-2 "
      href={{
        pathname: `/posts/${id}`,
      }}
      onClick={() => (window.location.href = `/posts/${id}`)}
    >
      <div className="bg-slate-100 w-full h-1/2 overflow-hidden">
        <img className="object-scale-down w-full h-full" src={image} />
      </div>

      <div>{title}</div>
      {price == 0 ? (
        <div className="font-bold">"FREE"</div>
      ) : (
        <div className="font-bold">
          {format("$ #,###", price, { enforceMaskSign: true })}
        </div>
      )}
    </Link>
  );
};

export default Mini_Card;
