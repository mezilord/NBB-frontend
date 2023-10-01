"use client";
import Link from "next/link";
import { useState } from "react";
const HomePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [CPR, setCPR] = useState("");
  return (
    <div className="flex flex-col gap-4 bg-[#CF001C] w-screen h-screen justify-center items-center">
      {/* <Image src={} alt="Logo" /> */}
      <div className="flex flex-col">
        <label className="font-semibold text-lg text-white">CPR</label>
        <input
          required
          type="text"
          value={CPR}
          onChange={(e) => setCPR(e.target.value)}
          className="outline:none p-2 border rounded-md mt-2  bg-[#CF001C] w-[300px] focus:outline-none"
        />
      </div>
      <div className="flex flex-col my-4">
        <label className="font-semibold text-lg text-white">Phone Number</label>
        <input
          required
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="outline:none p-2 border rounded-md mt-2  bg-[#CF001C] w-[300px] focus:outline-none"
        />
      </div>
      <Link href="/ChoosePage" className="font-semibold px-4 py-2 bg-yellow-400 text-white text-center rounded-md w-[300px] mx-auto">
        Start Game
      </Link>
    </div>
  );
};

export default HomePage;
