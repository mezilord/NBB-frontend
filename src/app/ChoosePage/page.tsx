"use client"
import React from "react";
import briefcase from "../../../public/briefcase.png";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ChoosePage = () => {
  const router = useRouter();
  const navigateToQAPage = () => {
    router.push('/QA');
  };
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-black text-4xl font-semibold my-14">Choose One</h1>
      <div className="flex gap-14 justify-center items-center">
        <div onClick={navigateToQAPage} className="hover:scale-105 cursor-pointer duration-200">
          <Image src={briefcase} alt="red box" />
        </div>
        <div onClick={navigateToQAPage} className="hover:scale-105 cursor-pointer duration-200">
          <Image src={briefcase} alt="yellow box" />
        </div>
        <div onClick={navigateToQAPage} className="hover:scale-105 cursor-pointer duration-200">
          <Image src={briefcase} alt="black box" />
        </div>
      </div>
    </div>
  );
};

export default ChoosePage;
