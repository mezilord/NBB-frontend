"use client";
import React, { useContext } from "react";
import briefcase1 from "../../../public/1.png";
import briefcase2 from "../../../public/2.png";
import briefcase3 from "../../../public/3.png";
import pattern from "../../../public/pattern.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AppContext } from "../context/data";

const ChoosePage = () => {
  const router = useRouter();
  const { setColor } = useContext(AppContext);

  const navigateToQAPage = (color) => {
    setColor(color);
    router.push("/QA");
  };

  return (
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
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
          <Image
            alt="bg"
            className="absolute top-0 left-0 w-screen h-screen opacity-40 -z-10"
            src={pattern}
          />

          <h1 className="text-black text-5xl font-semibold my-4 z-10">
            Choose One
          </h1>
          <div className="flex gap-4 justify-center items-center z-10">
            <div
              onClick={() => navigateToQAPage("R")}
              className="hover:scale-105 cursor-pointer duration-200"
            >
              <Image
                className="-my-14"
                width={250}
                src={briefcase1}
                alt="red box"
              />
            </div>
            <div
              onClick={() => navigateToQAPage("B")}
              className="hover:scale-105 cursor-pointer duration-200"
            >
              <Image
                className="-my-14"
                width={250}
                src={briefcase2}
                alt="black box"
              />
            </div>
            <div
              onClick={() => navigateToQAPage("Y")}
              className="hover:scale-105 cursor-pointer duration-200"
            >
              <Image
                className="-my-14"
                width={250}
                src={briefcase3}
                alt="yellow box"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChoosePage;
