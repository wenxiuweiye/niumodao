import React from "react";
import { SparklesText } from "./ui/sparkles-text";
import { AuroraText } from "./ui/aurora-text";
import { NumberTicker } from "./ui/number-ticker";
import { Ripple } from "./ui/ripple";
export default function Trust({
  title,
  descriptions,
}: {
  title: string;
  descriptions: {
    label: string;
    value: number;
  }[];
}) {
  return (
    <section className="w-full h-full lg:h-screen relative flex flex-col items-center justify-center bg-(--background) pt-32 pb-32 lg:mt-0 lg:mb-0 ">
      <Ripple numCircles={18} mainCircleSize={300} mainCircleOpacity={0.6} />

      <div className=" z-10 w-full h-screen relative flex flex-col items-center justify-center gap-24">
        <div className="text-xl lg:text-7xl text-(--foreground)  ">
          <SparklesText>{title}</SparklesText>
        </div>

        <div className="text-lg lg:text-2xl flex flex-col lg:flex-row justify-center items-center  text-center  gap-16 ">
          {descriptions.map((desc, index) => (
            <>
              <div key={index} className="flex flex-col  gap-4">
                <span className="text-(--foreground)">{desc.label}</span>
                <NumberTicker
                  className="text-(--foreground) text-bold text-5xl "
                  value={desc.value}
                ></NumberTicker>
              </div>
              {index < descriptions.length - 1 && (
                <div className=" w-1/2 h-1 lg:w-1 lg:h-1/2 bg-(--muted-foreground) rounded-2xl"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
