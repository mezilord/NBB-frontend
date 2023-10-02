"use client";
import Link from "next/link";
import React, { useState } from "react";
import winning from "../../../public/winning.png";
import losing from "../../../public/losing.png";
import Image from "next/image";
import ReactConfetti from "react-confetti";
import Airtable from "airtable";
import pattern from "../../../public/pattern.png";
import { AppContext } from "../context/data";
import { AnimatePresence, motion } from "framer-motion";
import coin from '../../../public/coin.png'
const QA = () => {
  const { CPR, Phone, Prize, answer } = React.useContext(AppContext);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [guessedValue, setGuessValue] = useState("");

  const saveEntryToAirTable = async (isWin: any) => {
    var base = new Airtable({
      apiKey:
        "patqsFkj6vXnhdVvx.72cb06f684731e0d240e3faea32137bd91e7fd29c21bde7e50c3a08ac1dcb366",
    }).base("appHOwBAP6ICv8ERN");

    base("GUESS Question Game").create(
      {
        CPR,
        Phone,
        Prize,
        Timestamp: new Date().toISOString(),
        WIN: isWin ? "1" : "0",
      },
      function (err: any) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  };
  const handleSubmission = async () => {
    setIsAnswered(true);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    if (answer == guessedValue) {
      setIsCorrect(true);
      saveEntryToAirTable(true);
    } else {
      setIsCorrect(false);
      saveEntryToAirTable(false);
    }
    
  };
  const onChange = (e: any) => {
    const value = e.target.value;
    const guessedValue = value.toLocaleString();
    setGuessValue(guessedValue);
  };

  return (
    <>
    <div className={`${isLoading ? "block" : "hidden"} bg-white top-0 left-0 flex justify-center items-center z-20 absolute w-screen h-screen`}>
      
    <Image src={coin} alt="loading..."className={`z-30 ${isLoading ? "loader" : "hidden"}`} />
    </div>
    <AnimatePresence mode="wait">
      <motion.div
        // key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <Image
            alt="bg"
            className="absolute top-0 left-0 w-screen h-screen opacity-40 -z-10"
            src={pattern}
          />
          <h1 className="text-5xl font-semibold my-12">Type the Guess</h1>
          <div className="flex justify-center items-center">
            <span className="text-red-500 text-4xl">$</span>
            <input
              className="border-b-2 text-2xl border-red-400 outline-none bg-transparent p-2 m-4"
              type="text"
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
                <Image
                  width={600}
                  src={losing}
                  className=""
                  alt="winning logo"
                />
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
      </motion.div>
    </AnimatePresence>
    </>

  );
};

export default QA;
