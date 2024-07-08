import React, { memo } from "react";
import { sum } from "./service";

export const Page = memo(() => {
  const number = sum(1, 2);

  const handleClick = () => {
    console.log("加一");
  };

  return (
    <div>
      <div>sumResult : {number}</div>
      <button onClick={handleClick}>加一</button>
    </div>
  );
});
