"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/data";

const ValuePage = () => {
  const { answer, setAnswer, prize, setPrize } = useContext(AppContext);

  return (
    <div>
      <div className="flex gap-2 m-2">
        <label>Answer</label>
        <input
          className="border"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <div className="flex gap-2 m-2">
        <label>Prize</label>
        <input
          className="border"
          type="text"
          value={prize}
          onChange={(e) => setPrize(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ValuePage;
