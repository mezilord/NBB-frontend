"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export const AppContext = createContext(undefined);

export function AppContextProvider({ children }: any) {
  const [CPR, setCPR] = useState("");
  const [Phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("25000");
  const [Prize, setPrize] = useState("25000");
  const contextValue = {
    CPR,
    setCPR,
    Phone,
    setPhone,
    answer,
    Prize,
    setAnswer,
    setPrize,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
