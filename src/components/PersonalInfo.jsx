import React, { useState } from "react";

const PersonalInfo = ({ handleClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameColor, setNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [numberColor, setNumberColor] = useState("");

  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errNumber, setErrNumber] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (name.length >= 4) {
      setErrName("");
      setNameColor("green");
    } else {
      setErrName("Name must be 4 letters long.");
      setNameColor("red");
    }
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (email.includes("@")) {
      setErrEmail("");
      setEmailColor("green");
    } else {
      setErrEmail("Email should have @");
      setEmailColor("red");
    }
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
    if (number.length > 4) {
      setErrNumber("");
      setNumberColor("green");
    } else {
      setErrNumber(
        "Email should have + or phone number must be 4 letters long"
      );
      setNumberColor("red");
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className=" text-[50px] font-semibold text-[#140b63]">
          Personal info
        </h1>
        <h3 className="pt-[10px] pb-[30px]">
          Place provide your name,email adress and phone number
        </h3>
        <form className="w-full">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              className="border w-full p-4 rounded-lg outline-0"
              placeholder="Enter Your Name..."
              style={{ borderColor: nameColor }}
              value={name}
              onChange={(e) => handleChangeName(e)}
            />
            <div className="flex justify-end mt-1">
              <p style={{ color: nameColor }}>{errName}</p>
            </div>
          </div>{" "}
          <div className="mt-4">
            <label>Email Adress</label>
            <input
              type="text"
              className="border w-full p-4 rounded-lg outline-0"
              placeholder="Enter Email..."
              style={{ borderColor: emailColor }}
              value={email}
              onChange={(e) => handleChangeEmail(e)}
            />
            <div className="flex justify-end mt-1">
              <p style={{ color: emailColor }}>{errEmail}</p>
            </div>
          </div>{" "}
          <div className="">
            <label>Phone Number</label>
            <input
              type="number"
              className="border w-full p-4 rounded-lg outline-0"
              placeholder="Enter  Your Phone Number..."
              style={{ borderColor: numberColor }}
              onChange={(e) => handleChangeNumber(e)}
              value={number}
            />
            <div className="flex justify-end mt-1">
              <p style={{ color: numberColor }}>{errNumber}</p>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          disabled={email == "" && name == "" && number == "" ? true : false}
          onClick={() => handleClick("2")}
          className=" py-[14px] px-[20px] mt-[100px] border  border-[#140b63] text-[grey] rounded-xl hover:text-white hover:bg-[#140b63]"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
