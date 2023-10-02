"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import winning from "../../../public/winning.png";
import losing from "../../../public/losing.png";
import Image from "next/image";
import ReactConfetti from "react-confetti";
import Airtable from "airtable";
import pattern from "../../../public/pattern.png";
import { AppContext } from "../context/data";
import { AnimatePresence, motion } from "framer-motion";
import coin from "../../../public/coin.png";
const QA = () => {
  const { CPR, Phone, Prize, answer, Color, answerColor, setCPR, setPhone } =
    React.useContext(AppContext);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [guessedValue, setGuessValue] = useState("");
  const date = new Date().toISOString();

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
        Timestamp: date,
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

    if (answer == guessedValue && Color == answerColor) {
      setIsCorrect(true);
      saveEntryToAirTable(true);
    } else {
      setIsCorrect(false);
      saveEntryToAirTable(false);
    }
    setCPR("");
    setPhone("");
  };
  const onChange = (e: any) => {
    const value = e.target.value;
    const guessedValue = value.toLocaleString();
    setGuessValue(guessedValue);
  };
  useEffect(() => {
    console.log("date", date);
  }, []);

  return (
    <>
      <div
        className={`${
          isLoading ? "block" : "hidden"
        } bg-white top-0 left-0 flex justify-center items-center z-20 absolute w-screen h-screen`}
      >
        <Image
          src={coin}
          alt="loading..."
          className={`z-30 ${isLoading ? "loader" : "hidden"}`}
        />
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
            <h1 className="text-5xl font-semibold my-12">Guess the Value</h1>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center mx-auto items-center gap-4">
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="guess"
                    value="10000"
                    onChange={onChange}
                  />
                  <label>10,000</label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="guess"
                    value="25000"
                    onChange={onChange}
                  />
                  <label>25,000</label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="guess"
                    value="50000"
                    onChange={onChange}
                  />
                  <label>50,000</label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="guess"
                    value="100000"
                    onChange={onChange}
                  />
                  <label>100,000</label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="guess"
                    value="650000"
                    onChange={onChange}
                  />
                  <label>650,000</label>
                </div>
              </div>
              <button
                className="px-4 py-2 w-[200px] rounded-md cursor-pointer my-8 mx-auto bg-[#CF001C] text-white"
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
                    href="\HomePage"
                    className="w-[300px] text-2xl text-center px-4 py-2 my-4 rounded-md bg-yellow-300 text-white cursor-pointer"
                  >
                    Close
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default QA;
