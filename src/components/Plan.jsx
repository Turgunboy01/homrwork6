import React, { useState } from "react";
import PlanCard from "./PlanCard";
import img1 from "../assets/icon-arcade.svg";
import img2 from "../assets/icon-advanced.svg";
import img3 from "../assets/icon-pro.svg";
const Plan = ({ handleClick, month, clickMonth, changeCart, handleChange }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className=" text-[50px] font-semibold text-[#140b63]">
          Select your plan
        </h1>
        <h3 className="pt-[10px] pb-[30px]">
          Your have the option of monthly or yearly billing.
        </h3>
        <div className="">
          {month ? (
            <div className=" grid grid-cols-1 justify-center sm:grid-cols-3 gap-2">
              <div
                onClick={() => handleChange("arcade")}
                className={`border p-[20px] w-full sm:max-w-[200px] h-[200px] bg-[#fcfcfc] ${
                  changeCart == "arcade" ? "border-[#1c1753]" : ""
                }  rounded-xl `}
              >
                <img src={img1} alt="" />
                <h3 className="mt-[30px] mb-[15px] font-bold text-[#1c1753]">
                  Arcade
                </h3>
                <p className="text-[grey]">$9/mo</p>
                {!month ? (
                  <p className="text-[#1c1753] text-[13px] mt-1 font-bold">
                    2 months free
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div
                onClick={() => handleChange("advences")}
                className={`border p-[20px] w-full sm:max-w-[200px] h-[200px] bg-[#fcfcfc]  rounded-xl ${
                  changeCart == "advences" ? "border-[#1c1753]" : ""
                }  `}
              >
                <img src={img2} alt="" />
                <h3 className="mt-[30px] mb-[8px] font-bold text-[#1c1753]">
                  Advenced
                </h3>
                <p className="text-[grey]">$12/mo</p>
                {!month ? (
                  <p className="text-[#1c1753] text-[13px] mt-1 font-bold">
                    2 months free
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div
                onClick={() => handleChange("pro")}
                className={`border p-[20px] w-full sm:max-w-[200px] h-[200px] bg-[#fcfcfc]  rounded-xl ${
                  changeCart == "pro" ? "border-[#1c1753]" : ""
                }  `}
              >
                <img src={img3} alt="" />
                <h3 className="mt-[30px] mb-[8px] font-bold text-[#1c1753]">
                  Pro
                </h3>
                <p className="text-[grey]">$15/mo</p>
                {!month ? (
                  <p className="text-[#1c1753] text-[13px] mt-1 font-bold">
                    2 months free
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            <div className="grid  grid-cols-1 sm:grid-cols-3 gap-2">
              <div
                onClick={() => handleChange("arcade")}
                className={`border p-[20px] sm:max-w-[200px] h-[200px] bg-[#fcfcfc] rounded-xl ${
                  changeCart == "arcade" ? "border-[#1c1753]" : ""
                }  `}
              >
                <img src={img1} alt="" />
                <div className="">
                  <h3 className="mt-[30px] mb-[8px] font-bold text-[#1c1753]">
                    Arcade
                  </h3>
                  <p className="text-[grey]">$90/yr</p>
                  {!month ? (
                    <p className="text-[#1c1753] text-[13px] mt-1 font-bold">
                      2 months free
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div
                onClick={() => handleChange("advenced")}
                className={`border p-[20px] sm:max-w-[200px] h-[200px] bg-[#fcfcfc] flex items-center gap-[20px] sm:block  rounded-xl ${
                  changeCart == "advenced" ? "border-[#1c1753]" : ""
                }  `}
              >
                <img src={img2} alt="" className="w-[50px]" />
                <div className="">
                  <h3 className="mt-[30px] mb-[8px] font-bold text-[#1c1753]">
                    Advenced
                  </h3>
                  <p className="text-[grey]">$120/yr</p>
                  {!month ? (
                    <p className="text-[#1c1753] text-[13px] mt-1 font-bold">
                      2 months free
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div
                onClick={() => handleChange("pro")}
                className={`border p-[20px] sm:max-w-[200px] h-[200px] bg-[#fcfcfc]  rounded-xl  ${
                  changeCart == "pro" ? "border-[#1c1753]" : ""
                } `}
              >
                <img src={img3} alt="" />
                <div className="">
                  <h3 className="mt-[30px] mb-[8px] font-bold text-[#1c1753]">
                    Pro
                  </h3>
                  <p className="text-[grey]">$150/yr</p>
                  {!month ? (
                    <p className="text-[#1c1753] text-[13px] mt-1 font-bold">
                      2 months free
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full bg-[#eee] flex justify-center mt-[50px] p-3 items-center">
          <div className="flex items-center gap-4">
            <p
              className={`text-[18px] font-bold  ${
                month ? "text-[#333] " : "text-[grey]"
              }`}
            >
              Monthly
            </p>
            <p
              onClick={() => clickMonth()}
              className="bg-[#140b63] w-[40px] relative h-[20px] transition-all rounded-xl flex items-center"
            >
              <span
                className={`w-[13px] h-[13px] bg-[#fff] absolute ${
                  month ? " left-1" : "right-1"
                } rounded-[50%] text-[#fff] text-[10px]`}
              >
                0
              </span>
            </p>
            <p
              className={`text-[18px] font-bold  ${
                !month ? "text-[#333] " : "text-[grey]"
              }`}
            >
              Yearly
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleClick("1")}
          className=" py-[14px] px-[20px] mt-[100px] border  border-[#140b63] text-[grey] rounded-xl hover:text-white hover:bg-[#140b63]"
        >
          Bo Back
        </button>{" "}
        <button
          disabled={changeCart == "" ? true : false}
          onClick={() => handleClick("3")}
          className=" py-[14px] px-[20px] mt-[100px] border  border-[#140b63] text-[grey] rounded-xl hover:text-white hover:bg-[#140b63]"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Plan;
