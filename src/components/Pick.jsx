import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Pick = ({
  month,
  handleClick,
  changeAdd1,
  setchangeAdd1,
  changeAdd2,
  setchangeAdd2,
  changeAdd3,
  setchangeAdd3,
}) => {
  console.log(changeAdd1);
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className=" text-[50px] font-semibold text-[#140b63]">
          Pick add-ons
        </h1>
        <h3 className="pt-[10px] pb-[30px]">
          Add-ons help engance your gaming experience
        </h3>

        <div className="flex flex-col gap-5">
          <div
            onClick={() => setchangeAdd1(!changeAdd1)}
            className={`flex items-center gap-[20px] w-full border  p-5 rounded-lg ${
              changeAdd1 ? "border-[#140b63]" : ""
            }`}
          >
            {changeAdd1 ? (
              <FaCheckSquare className="text-[#5042cc] bg-[#fff]" />
            ) : (
              <MdCheckBoxOutlineBlank className="text-[#5042cc]" />
            )}
            <div className="flex justify-between items-center w-full">
              <div className="">
                <h3 className=" font-semibold">Online services</h3>
                <p className="text-[13px] font-semibold text-[#b8b8b8]">
                  Access to multiplayer games
                </p>
              </div>
              {month ? (
                <p className=" font-semibold text-[#5042cc]">+$1/mo</p>
              ) : (
                <p className=" font-semibold text-[#5042cc]">+$10/yr</p>
              )}
            </div>
          </div>
          <div
            onClick={() => setchangeAdd2(!changeAdd2)}
            className={`flex items-center gap-[20px] w-full border p-5 rounded-lg ${
              changeAdd2 ? "border-[#140b63]" : ""
            }`}
          >
            {changeAdd2 ? (
              <FaCheckSquare className="text-[#5042cc] bg-[#fff]" />
            ) : (
              <MdCheckBoxOutlineBlank className="text-[#5042cc]" />
            )}
            <div className="flex justify-between items-center w-full">
              <div className="">
                <h3 className=" font-semibold">Larger storage</h3>
                <p className="text-[13px] font-semibold text-[#b8b8b8]">
                  Extra 1TB of cloud save
                </p>
              </div>
              {month ? (
                <p className=" font-semibold text-[#5042cc]">+$2/mo</p>
              ) : (
                <p className=" font-semibold text-[#5042cc]">+$20/yr</p>
              )}
            </div>
          </div>
          <div
            onClick={() => setchangeAdd3(!changeAdd3)}
            className={`flex items-center gap-[20px] w-full border  p-5 rounded-lg ${
              changeAdd3 ? "border-[#140b63]" : ""
            }`}
          >
            {changeAdd3 ? (
              <FaCheckSquare className="text-[#5042cc] bg-[#fff]" />
            ) : (
              <MdCheckBoxOutlineBlank className="text-[#5042cc]" />
            )}
            <div className="flex justify-between items-center w-full">
              <div className="">
                <h3 className=" font-semibold">Customizable profile</h3>
                <p className="text-[13px] font-semibold text-[#b8b8b8]">
                  Custom theme on your
                </p>
              </div>
              {month ? (
                <p className=" font-semibold text-[#5042cc]">+$2/mo</p>
              ) : (
                <p className=" font-semibold text-[#5042cc]">+$20/yr</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleClick("2")}
          className=" py-[14px] px-[20px] mt-[100px] border  border-[#140b63] text-[grey] rounded-xl hover:text-white hover:bg-[#140b63]"
        >
          Bo Back
        </button>
        <button
          onClick={() => handleClick("4")}
          className=" py-[14px] px-[20px] mt-[100px] border  border-[#140b63] text-[grey] rounded-xl hover:text-white hover:bg-[#140b63]"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Pick;
