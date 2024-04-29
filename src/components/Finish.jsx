import React, { useState } from "react";
import thankImg from "../assets/icon-thank-you.svg";

const Finish = ({
  handleClick,
  month,
  changeCart,
  changeAdd1,
  changeAdd2,
  changeAdd3,
}) => {
  const [endPage, setEndPage] = useState(false);
  console.log(changeCart, !month);
  return (
    <div className="h-full">
      {!endPage ? (
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className=" text-[50px] font-semibold text-[#140b63]">
              Finishing up
            </h1>
            <h3 className="pt-[10px] pb-[30px]">
              Double-check everything looks OK before confiriming.
            </h3>
            <div className="bg-[#f5f5f5] p-6 rounded-xl">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="">
                  <h3 className=" capitalize text-[20px] font-bold text-[#140b63]">
                    {changeCart.length > 0 ? changeCart : "not changed"} (
                    {month ? "Montherly" : "Yearly"})
                  </h3>
                  <p className=" underline">Change</p>
                </div>
                {changeCart == "arcade" && month ? (
                  <p className="  text-[16px] font-bold text-[#140b63]">
                    $9/mo
                  </p>
                ) : (
                  ""
                )}
                {changeCart == "arcade" && !month ? (
                  <p className="  text-[16px] font-bold text-[#140b63]">
                    $90/yr
                  </p>
                ) : (
                  ""
                )}
                {changeCart == "advences" && month ? (
                  <p className="  text-[16px] font-bold text-[#140b63]">
                    $12/mo
                  </p>
                ) : (
                  ""
                )}
                {changeCart == "advences" && !month ? (
                  <p className="  text-[16px] font-bold text-[#140b63]">
                    $120/yr
                  </p>
                ) : (
                  ""
                )}
                {changeCart == "pro" && month ? (
                  <p className="  text-[16px] font-bold text-[#140b63]">
                    $15/mo
                  </p>
                ) : (
                  ""
                )}
                {changeCart == "pro" && !month ? (
                  <p className="  text-[16px] font-bold text-[#140b63]">
                    $150/yr
                  </p>
                ) : (
                  ""
                )}
              </div>
              {changeAdd1 && (
                <div className="flex justify-between items-center py-[10px]">
                  <p className="text-[#a8a8a8] text-[15px]">Online services</p>
                  <p className=" text-[16px] font-semibold text-[#140b63]">
                    ${month ? "1/mo" : "10/yr"}
                  </p>
                </div>
              )}
              {changeAdd2 && (
                <div className="flex justify-between items-center  py-[10px]">
                  <p className="text-[#a8a8a8] text-[15px]">Larger storage</p>
                  <p className=" text-[16px] font-semibold text-[#140b63]">
                    ${month ? "2/mo" : "20/yr"}
                  </p>
                </div>
              )}{" "}
              {changeAdd3 && (
                <div className="flex justify-between items-center  py-[10px]">
                  <p className="text-[#a8a8a8] text-[15px]">
                    Costomizable profile
                  </p>
                  <p className=" text-[16px] font-semibold text-[#140b63]">
                    ${month ? "2/mo" : "20/yr"}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => handleClick("3")}
              className=" py-[14px] px-[20px] mt-[100px] border  border-[#140b63] text-[grey] rounded-xl hover:text-white hover:bg-[#140b63]"
            >
              Bo Back
            </button>
            <button
              onClick={() => setEndPage(!endPage)}
              className=" py-[14px] px-[20px] mt-[100px] border  border-[#4232cc] rounded-xl text-white bg-[#4232cc] transition-all hover:shadow-md  hover:shadow-yellow-950"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full flex-col text-center gap-5">
          <img src={thankImg} alt="" />
          <h3 className=" text-[40px] font-semibold text-[#140b63]">
            Thank You!
          </h3>

          <p className="text-[#a8a8a8] text-[16px]">
            Thanks gor confirming your subscription! We hope you have fun using
            our platform.If you ever need support, plase feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      )}
    </div>
  );
};

export default Finish;
