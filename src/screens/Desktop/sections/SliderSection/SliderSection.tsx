import React from "react";

const sliderItems = [
  { text: "ACCELERATES", isActive: false },
  { text: "SIMPLIFIES", isActive: false },
  { text: "AUTOMATE", isActive: true },
  { text: "OPTIMIZES", isActive: false },
  { text: "STREAMLINES", isActive: false },
];

export const SliderSection = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-[55px] w-full py-12">
      {sliderItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center px-8 py-[22px] ${
            item.isActive
              ? "bg-[#00000000] rounded-[15px] border border-solid border-[#a975f8] shadow-[inset_0px_0px_26.5px_#5f34fb52,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]"
              : ""
          }`}
        >
          <div className="[font-family:'Inter',Helvetica] font-medium text-white text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};
