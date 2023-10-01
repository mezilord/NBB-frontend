"use client";
import React from "react";
import briefcase1 from "../../../public/1.png";
import briefcase2 from "../../../public/2.png";
import briefcase3 from "../../../public/3.png";
import pattern from "../../../public/pattern.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ChoosePage = () => {
  const router = useRouter();
  const navigateToQAPage = () => {
    router.push("/QA");
  };
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <Image alt="bg" className="absolute top-0 left-0 w-screen h-screen -z-10 opacity-70" src={pattern} />
      <h1 className="text-black text-6xl font-semibold my-8">Winning Prize: $25,000</h1>
      <h1 className="text-black text-5xl font-semibold my-4">
        Choose One
      </h1>
      <div className="flex gap-4 justify-center items-center">
        <div
          onClick={navigateToQAPage}
          className="hover:scale-105 cursor-pointer duration-200"
        >
          <Image className="-my-14" width={250} src={briefcase1} alt="red box" />
        </div>
        <div
          onClick={navigateToQAPage}
          className="hover:scale-105 cursor-pointer duration-200"
        >
          <Image className="-my-14" width={250} src={briefcase2} alt="yellow box" />
        </div>
        <div
          onClick={navigateToQAPage}
          className="hover:scale-105 cursor-pointer duration-200"
        >
          <Image className="-my-14" width={250} src={briefcase3} alt="black box" />
        </div>
      </div>
    </div>
  );
};

export default ChoosePage;
