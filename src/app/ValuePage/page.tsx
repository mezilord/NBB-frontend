import React, { useState } from "react";

const page = () => {
  const [winningValue, setWinningValue] = useState("123"); //change winning value from here
  return (
    <div>
      <input
        type="text"
        value={winningValue}
        onChange={(e) => setWinningValue(e.target.value)}
      />
    </div>
  );
};

export default page;
