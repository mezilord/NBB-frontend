"use client";
import Link from "next/link";
import React, { useState } from "react";
// import axios from "axios";
import winning from "../../../public/winning.png";
import losing from "../../../public/losing.png";
import Image from "next/image";
import ReactConfetti from "react-confetti";
// import Airtable from "airtable"

// { CPR, Phone, Prize }: any
const QA = () => {
  const answer = "123";
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [guessedValue, setGuessValue] = useState("");

  // const saveEntryToAirTable = async (isWin: boolean) => {
  // try {
  //   const res = await axios.post(
  //     "https://api.airtable.com/v0/appHOwBAP6ICv8ERN/GUESS%20Question%20Game",
  //     {
  //       records: [
  //         {
  //           fields: {
  //             CPR,
  //             Phone,
  //             Prize,
  //             Win: isWin,
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       headers: {
  //         'Authorization': "Bearer patqsFkj6vXnhdVvx.72cb06f684731e0d240e3faea32137bd91e7fd29c21bde7e50c3a08ac1dcb366",
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   console.log(res.data);
  // } catch (error) {
  //   console.error(error);
  // }

  //   var base = new Airtable({
  //     apiKey:
  //       "patqsFkj6vXnhdVvx.72cb06f684731e0d240e3faea32137bd91e7fd29c21bde7e50c3a08ac1dcb366",
  //   }).base("appHOwBAP6ICv8ERN");

  //   base("GUESS Question Game").create(
  //     {
  //       fields: {
  //         // CPR,
  //         Phone,
  //         Prize,
  //         Win: isWin,
  //       },
  //     },
  //     function (err: any, records: any) {
  //       if (err) {
  //         console.error(err);
  //         return;
  //       }
  //       records.forEach(function (record: any) {
  //         console.log(record.getId());
  //       });
  //     }
  //   );
  // };
  const handleSubmission = () => {
    setIsAnswered(true);
    if (answer == guessedValue) {
      setIsCorrect(true);
      // saveEntryToAirTable(true);
    } else {
      setIsCorrect(false);
      // saveEntryToAirTable(false);
    }
  };
  const onChange = (e: any) => {
    const value = e.target.value;
    const guessedValue = value.toLocaleString();
    setGuessValue(guessedValue);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold my-12">Type the Guess</h1>
      <div className="flex justify-center items-center">
        <span className="text-red-500 text-4xl">$</span>
        <input
          className="border-b-2 text-2xl border-red-400 outline-none bg-transparent p-2 m-4"
          type="number"
          value={guessedValue}
          onChange={onChange}
        />
      </div>
      <button
        className="px-4 py-2 w-[200px] rounded-md cursor-pointer my-4 mx-auto bg-[#CF001C] text-white"
        onClick={handleSubmission}
      >
        Submit
      </button>
      {isAnswered && (
        <div className="absolute left-0 top-0 z-10 text-white w-screen h-screen justify-center items-center flex flex-col bg-[#CF001C]">
          {isCorrect ? (
            <>
              <ReactConfetti
                width={window.innerWidth}
                height={window.innerHeight}
              />
              <Image width={600} src={winning} alt="winning logo" />
            </>
          ) : (
            <Image width={600} src={losing} className="" alt="winning logo" />
          )}
          <Link
            href="\"
            className="w-[300px] text-2xl text-center px-4 py-2 my-4 rounded-md bg-yellow-300 text-white cursor-pointer"
          >
            Close
          </Link>
        </div>
      )}
    </div>
  );
};

export default QA;
