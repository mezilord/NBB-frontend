"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Madrid", "Rome", "Paris"],
    answer: "Paris",
    canAsk: true,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus", "Saturn"],
    answer: "Mars",
    canAsk: true,
  },
  {
    question: "What is the largest mammal in the world?",
    options: [
      "African Elephant",
      "Blue Whale",
      "Giraffe",
      "Hippopotamus",
      "Rhinoceros",
    ],
    answer: "Blue Whale",
    canAsk: true,
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen", "Methane"],
    answer: "Carbon Dioxide",
    canAsk: true,
  },
];

const QA = () => {
  const [questionObj, setQuestionObj] = useState(questions[0]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const setQuestion = () => {
    // Find a random question that can be asked
    let randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    while (!randomQuestion.canAsk) {
      randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    }

    setQuestionObj(randomQuestion);
    setSelectedOption("");
    setIsCorrect(false);
  };

  useEffect(() => {
    setQuestion();
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === questionObj.answer);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold my-8">Guess the Answer</h1>
      <p className="text-2xl font-normal mb-10">{questionObj.question}</p>

      <ul>
        {questionObj.options.map((option, index) => (
          <li key={index} className="text-xl">
            <label>
              <input
                className="mx-2 my-4"
                type="radio"
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      <button className="px-4 py-2 w-[200px] rounded-md cursor-pointer my-2 mx-auto bg-[#CF001C] text-white" onClick={() => setIsAnswered(true)}>Submit</button>
      {isAnswered && (
        <div className="absolute left-0 top-0 z-10 text-white w-screen h-screen justify-center items-center flex flex-col bg-[#CF001C]">
          {isCorrect ? (
            <h1 className="text-5xl font-bold">YOU WON</h1>
          ) : (
            <h1 className="text-5xl font-bold">YOU LOST</h1>
          )}
          <p className="my-4 text-2xl">Thank you for participating.</p>
          <Link
            href="\"
            className="px-4 py-2 rounded-md bg-yellow-300 text-white cursor-pointer"
          >
            Close
          </Link>
        </div>
      )}
    </div>
  );
};

export default QA;
