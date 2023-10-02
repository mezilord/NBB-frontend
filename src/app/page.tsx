"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
      router.push("/HomePage");
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <button className="p-4 border bg-black text-white text-2xl" onClick={handleClick}>
        {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
      </button>
    </div>
  );
}
