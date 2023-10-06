"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export const AppContext = createContext(undefined);

export function AppContextProvider({ children }: any) {
  const [CPR, setCPR] = useState("");
  const [winnerCPR, _] = useState("321");
  const [Phone, setPhone] = useState("");
  const [Color, setColor] = useState(); //B: Black, R: Red, Y: Yellow
  const [answer, setAnswer] = useState("25000");
  const [Prize, setPrize] = useState("25000");
  const [answerColor, setAnswerColor] = useState("R");

  const contextValue = {
    CPR,
    winnerCPR,
    setCPR,
    Phone,
    setPhone,
    Color,
    setColor,
    answerColor,
    setAnswerColor,
    answer,
    setAnswer,
    Prize,
    setPrize,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
