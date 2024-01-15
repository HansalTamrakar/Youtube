import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 m-3 bg-gray-200 rounded py-2 font-bold ">
        {name}
      </button>
    </div>
  );
};

export default Button;
