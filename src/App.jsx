import React, { useState } from "react";
import Register from "./components/Register";
import Sitebar from "./components/Sitebar";

const App = () => {
  const [active, setActive] = useState("1");
  const handleClick = (click) => {
    setActive(click);
  };
  return (
    <div className="w-[100%] h-[115vh] sm:h-[100vh]">
      <div className="container mx-auto w-[100%] h-[100%] flex justify-center items-center">
        <div className="flex border p-[10px] w-full flex-wrap lg:flex-nowrap  bg-blue-700 relative ">
          <Sitebar active={active} />
          <Register active={active} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
