"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo2.png";
import axios from "axios";
const HomePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [CPR, setCPR] = useState("");
  useEffect(() => {
    const getEntriesFromAirTable = async () => {
    //   const res = await axios.get(
    //     "https://api.airtable.com/v0/appHOwBAP6ICv8ERN/GUESS%20Question%20Game",
    //     {
    //       headers: {
    //         'Authorization': "Bearer patqsFkj6vXnhdVvx72cb06f684731e0d240e3faea32137bd91e7fd29c21bde7e50c3a08ac1dcb366",
    //       },
    //     });
    //   console.log(res.data);

    };
    getEntriesFromAirTable();
  }, []);

  return (
    <div className="flex flex-col gap-4  text-white bg-[#CF001C] w-screen h-screen justify-center items-center">
      <Image src={logo} alt="Logo" width={150} />
      <div className="border-2 rounded-md p-4 my-8 flex flex-col">
        <div className="flex flex-col relative z-10">
          <label className="font-semibold text-lg">CPR</label>
          <input
            required
            type="text"
            value={CPR}
            onChange={(e) => setCPR(e.target.value)}
            className="outline-none p-2 border-2 rounded-md mt-2 bg-[#CF001C] w-[300px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col my-4 relative z-10">
          <label className="font-semibold text-lg text-white">
            Phone Number
          </label>
          <input
            required
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="outline-none p-2 border-2 rounded-md mt-2 bg-[#CF001C] w-[300px] focus:outline-none"
          />
        </div>
        <Link
          href="/ChoosePage"
          className="w-full text-center font-semibold px-4 py-2 my-4 bg-yellow-400 text-white rounded-md mx-auto relative z-10"
        >
          Start Game
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
