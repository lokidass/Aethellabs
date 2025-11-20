import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

const formFields = [
  { id: "name", label: "Your Name", width: "w-[240.17px]" },
  { id: "website", label: "Company Website", width: "w-[240.17px]" },
];

const fullWidthFields = [
  { id: "email", label: "Your Email" },
  { id: "services", label: "Services Of Interest" },
  { id: "timeline", label: "Project Timeline" },
  { id: "challenge", label: "Primary Business Challenge" },
];

const budgetOptions = [
  { id: "budget1", value: "50000", label: "$50000" },
  { id: "budget2", value: "100000", label: "$100000" },
  { id: "budget3", value: "150000", label: "$150000" },
  { id: "budget4", value: "200000", label: "$200000+" },
];

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="flex items-start justify-end gap-2.5 px-[91px] pt-28 pb-3.5 relative w-full mt-[-155px]">
      <div className="absolute w-[98.11%] h-[100.12%] top-[2.95%] left-0 pointer-events-none">
        <img
          className="absolute w-[99.72%] top-0 left-0 h-[904px] object-cover"
          alt="Background"
          src="/image-54.png"
        />

        <h2 className="absolute w-[45.45%] top-[3.94%] left-[3.61%] [font-family:'Inter',Helvetica] font-bold text-[55px] tracking-[0] leading-[normal]">
          <span className="text-white">Start </span>
          <span className="text-[#5f34fb]">Your </span>
          <span className="text-white">Automation Journey</span>
        </h2>

        <p className="absolute w-[41.33%] top-[22.01%] left-[3.61%] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
          Ready to transform your business with AI? Let&#39;s discuss how Chase
          AI can accelerate your digital transformation.
        </p>
      </div>

      <div className="relative w-[598px] h-[799.98px] bg-[#00000000] rounded-[11px] overflow-hidden border border-solid border-[#a975f8] shadow-[inset_0px_0px_26.5px_#5f34fb52,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] pointer-events-auto">
        <h3 className="absolute top-3.5 left-[211px] [font-family:'Inter',Helvetica] font-light text-white text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Contact Us
        </h3>

        <div className="absolute top-[105px] left-[62px] flex gap-[27px]">
          <div className="flex flex-col gap-[7px]">
            <Label
              htmlFor="name"
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]"
            >
              Your Name
            </Label>
            <Input
              id="name"
              className="w-[240.17px] h-8 bg-black rounded border border-solid border-[#5f34fb] text-white"
            />
          </div>

          <div className="flex flex-col gap-[7px]">
            <Label
              htmlFor="website"
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]"
            >
              Company Website
            </Label>
            <Input
              id="website"
              className="w-[240.17px] h-8 bg-black rounded border border-solid border-[#5f34fb] text-white"
            />
          </div>
        </div>

        {fullWidthFields.map((field, index) => (
          <div
            key={field.id}
            className={`absolute top-[${186 + index * 81}px] left-[62px] w-[511px] flex flex-col gap-[7px]`}
          >
            <Label
              htmlFor={field.id}
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]"
            >
              {field.label}
            </Label>
            <Input
              id={field.id}
              className="w-[509px] h-8 bg-black rounded border border-solid border-[#5f34fb] text-white"
            />
          </div>
        ))}

        <div className="absolute top-[510px] left-[62px]">
          <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
            Estimated Budget For This Project
          </Label>
        </div>

        <RadioGroup
          defaultValue="50000"
          className="absolute top-[546px] left-[62px] flex flex-col gap-[10px]"
        >
          {budgetOptions.map((option) => (
            <div key={option.id} className="flex items-center gap-[12px]">
              <RadioGroupItem
                value={option.value}
                id={option.id}
                className="w-[19px] h-[19px] rounded-[9.5px] border border-solid border-[#6600ff] text-[#6600ff]"
              />
              <Label
                htmlFor={option.id}
                className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button className="absolute top-[694px] left-[150px] w-[352px] h-[60px] bg-[#4e2bcd] rounded-[9px] shadow-[inset_0px_4px_4px_#a975f8] [font-family:'Inter',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[normal] hover:bg-[#4e2bcd]/90">
          Book a consultation
        </Button>
      </div>
    </section>
  );
};
