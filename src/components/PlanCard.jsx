import React, { useState } from "react";

const PlanCard = ({ img, title, price, month, changeCart, handleChange }) => {
  return (
    <div
      onClick={() => handleChange(title)}
      className={`border p-[20px] w-[200px]
     h-[200px] bg-[#fcfcfc] ${
       month||!month  ? "border-[#1c1753]" : ""
     } rounded-xl `}
    >
      <img src={img} alt="" />
      <h3 className="mt-[30px] mb-[15px] font-bold text-[#1c1753]">{title}</h3>
      <p className="text-[grey]">{price}</p>
      {!month ? (
        <p className="text-[#1c1753] text-[13px] mt-1 font-bold">
          2 months free
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default PlanCard;
