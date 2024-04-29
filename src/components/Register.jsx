import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Pick from "./Pick";
import Finish from "./Finish";

const Register = ({ active, handleClick }) => {
  const [month, setMonth] = useState(true);
  const [changeCart, setChangeCart] = useState("");
  const [changeAdd1, setchangeAdd1] = useState(false);
  const [changeAdd2, setchangeAdd2] = useState(false);
  const [changeAdd3, setchangeAdd3] = useState(false);
  const clickMonth = () => {
    setMonth(!month);
  };
  const handleChange = (change) => {
    setChangeCart(change);
  };

  return (
    <div className="px-[50px] py-[50px] rounded-lg  lg:m-0  mt-[-80px] z-50 bg-[#fff] w-full">
      {active === "1" && <PersonalInfo handleClick={handleClick} />}
      {active === "2" && (
        <Plan
          handleChange={handleChange}
          changeCart={changeCart}
          handleClick={handleClick}
          month={month}
          clickMonth={clickMonth}
          active={active}
        />
      )}
      {active === "3" && (
        <Pick
          month={month}
          handleClick={handleClick}
          changeAdd1={changeAdd1}
          changeAdd2={changeAdd2}
          changeAdd3={changeAdd3}
          setchangeAdd1={setchangeAdd1}
          setchangeAdd2={setchangeAdd2}
          setchangeAdd3={setchangeAdd3}
        />
      )}
      {active === "4" && (
        <Finish
          handleClick={handleClick}
          changeCart={changeCart}
          month={month}
          changeAdd1={changeAdd1}
          changeAdd2={changeAdd2}
          changeAdd3={changeAdd3}
        />
      )}
    </div>
  );
};

export default Register;
