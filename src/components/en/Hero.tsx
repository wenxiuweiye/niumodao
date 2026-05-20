import React, { Suspense, useEffect, useState } from "react";
import VideoPlayer from "@/components/MuxPlayer";
import CurvedLoop from "../CurvedLoop";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/button";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function Hero() {
  return (
    <div className="w-full h-screen relative flex ">
      <VideoPlayer />
      <div className=" w-full h-full absolute top-0   opacity-5 bg-gray-400"></div>
      
      {/* 内容层 */}
      <div className=" w-full relative flex flex-col items-center  min-h-screen text-center">
        {/* 主标题 */}
        <div className=" m-36">
          <h1 className=" text-xl  lg:text-7xl font-bold text-black  lg:max-w-5xl  flex flex-col items-center">
            <TypingAnimation loop className=" text-(--background)" pauseDelay={3000}>
              Premium Garment Manufacturer
            </TypingAnimation>
            <span className="block text-(--primary) mt-2 font-noto text-shadow-lg">
              for Global Brands
            </span>
          </h1>
        </div>

        <div className="w-full  absolute bottom-0 -z-1 opacity-30">
          <CurvedLoop
            marqueeText="15 Years Export Experience • Monthly Capacity 100K+ pcs & OEKO-TEX Certified • MOQ from 500 pcs"
            speed={2}
            curveAmount={400}
            direction="right"
            interactive
          />
        </div>
        <div className=" flex flex-col items-center absolute bottom-36">
          {/* CTA 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 ">
            <Button className=" bg-(--foreground)  shadow-2xl  backdrop-blur-lg text-(--background) cursor-pointer">View Our Capabilities</Button>
            <InteractiveHoverButton className=" rounded-none ">Interactive Hover Button</InteractiveHoverButton>
          </div>

        
        </div>
      </div>
    </div>
  );
}
