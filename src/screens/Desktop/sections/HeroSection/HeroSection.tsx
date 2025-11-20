import React from "react";
import { Button } from "../../../../components/ui/button";

const navItems = [
  { label: "About" },
  { label: "Service" },
  { label: "Approach" },
  { label: "Contact us" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col min-h-[829px] items-start gap-64 pl-[62px] pr-2.5 pt-[27px] pb-10 relative w-full [background:url(..//hero.png)_50%_50%_/_cover]">
      <header className="flex w-full max-w-[1313px] items-center gap-[31px] relative">
        <div className="flex flex-col w-[213px] items-start gap-[22px] px-2 py-2.5 relative">
          <img
            className="relative self-stretch w-full h-10 object-cover"
            alt="Aethel Labs Logo"
            src="/image-45.png"
          />
        </div>

        <nav className="flex flex-1 max-w-[735px] h-[60px] items-center justify-center gap-5 px-0.5 py-0 relative bg-[#00000000] rounded-[20px] overflow-hidden shadow-[inset_0px_0px_25.1px_#5f34fb4c,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
          <div className="inline-flex h-[57px] items-center gap-5 relative flex-[0_0_auto]">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="relative w-[125px] [font-family:'Inter',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal] hover:opacity-80 transition-opacity cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex flex-col w-[261px] items-start gap-2.5 relative">
          <Button className="relative self-stretch w-full h-[60px] bg-[#4e2bcd] rounded-[9px] shadow-[inset_0px_4px_4px_#a975f8] hover:bg-[#4e2bcd]/90 [font-family:'Inter',Helvetica] font-medium text-white text-2xl">
            Get Started
          </Button>
        </div>
      </header>

      <div className="relative w-full max-w-[772px]">
        <h1 className="w-full max-w-[768px] [text-shadow:0px_4px_7.2px_#00000040] [font-family:'Inter',Helvetica] font-normal text-transparent text-[64px] tracking-[0] leading-[normal] mb-[276px]">
          <span className="font-bold text-white">
            We automate repetitive tasks so you can focus on{" "}
          </span>
          <span className="font-bold text-[#5f34fb]">growth</span>
          <span className="font-bold text-white">.</span>
        </h1>

        <p className="w-full max-w-[662px] [text-shadow:0px_4px_7.2px_#00000040] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] mb-[93px]">
          Aethel Labs helps businesses automate critical workflows, reduce
          costs, and scale efficiently with AI-powered systems.
        </p>

        <Button
          variant="outline"
          className="w-[304px] h-[61px] bg-[#00000000] rounded-[11px] border border-solid border-[#6701ff] shadow-[inset_0px_0px_39.3px_6px_#5f34fb0a,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] hover:bg-[#00000000] [font-family:'Inter',Helvetica] font-medium text-2xl"
        >
          <span className="text-[#f4f2f9]">Schedule a</span>
          <span className="text-[#fbfafe]">&nbsp;</span>
          <span className="text-[#f4f2f9]">meet</span>
        </Button>
      </div>
    </section>
  );
};
