import React from "react";
import img from "../assets/sitebarDesctop.svg";
const Sitebar = ({ active }) => {
  return (
    <div className="w-full lg:w-[400px] h-[200px] lg:h-[700px] relative bg-[url('../assets/sitebarDesctop.svg')]  ">
      <img
        src={img}
        alt=""
        className="h-full rounded-lg w-full absolut object-bottom object-cover lg:object-cover"
      />
      <div
        className="absolute z-40 top-[25%] left-[20%] sm:left-[35%] lg:left-0 lg:top-[10px] lg:p-10 
       flex  lg:flex-col gap-[30px]"
      >
        <div className="flex  items-center gap-[20px]">
          <p
            className={`w-[30px] h-[30px] font-semibold  border border-[grey] flex justify-center items-center rounded-[50%] ${
              active == "1" ? "bg-[#89b9d4] text-[#140b63]" : "text-white"
            }`}
          >
            1
          </p>{" "}
          <div className="hidden lg:block">
            <h3 className=" text-[14px] text-[grey] uppercase font-semibold">
              step 1
            </h3>
            <h3 className=" font-bold text-[16px] text-white uppercase">
              your info
            </h3>
          </div>
        </div>
        <div className="flex  items-center gap-[20px]">
          <p
            className={`w-[30px] h-[30px] text-white  border border-[grey] flex justify-center items-center rounded-[50%]  ${
              active == "2" ? "bg-[#89b9d4] text-[#140b63]" : "text-white"
            } `}
          >
            2
          </p>{" "}
          <div className="hidden lg:block">
            <h3 className=" text-[14px] text-[grey]  uppercase font-semibold">
              step 2
            </h3>
            <h3 className=" font-bold text-[16px] text-white uppercase">
              {" "}
              select plan
            </h3>
          </div>
        </div>
        <div className="flex  items-center  gap-[20px]">
          <p
            className={`w-[30px] h-[30px] text-white  border border-[grey] flex justify-center items-center rounded-[50%]  ${
              active == "3" ? "bg-[#89b9d4] text-[#140b63]" : "text-white"
            } `}
          >
            3
          </p>{" "}
          <div className="hidden lg:block">
            <h3 className=" text-[14px] text-[grey]  uppercase font-semibold">
              step 3
            </h3>
            <h3 className=" font-bold text-[16px] text-white uppercase">
              {" "}
              add-ons
            </h3>
          </div>
        </div>
        <div className="flex  items-center gap-[20px]">
          <p
            className={`w-[30px] h-[30px] text-white  border border-[grey] flex justify-center items-center rounded-[50%]  ${
              active == "4" ? "bg-[#89b9d4] text-[#140b63]" : "text-white"
            } `}
          >
            4
          </p>{" "}
          <div className="hidden lg:block">
            <h3 className=" text-[14px] text-[grey]  uppercase font-semibold">
              step 4
            </h3>
            <h3 className=" font-bold text-[16px] text-white uppercase">
              {" "}
              summary
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
