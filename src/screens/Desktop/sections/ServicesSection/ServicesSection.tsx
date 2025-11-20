import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const servicesData = [
  {
    title: "Workflow Automation",
    description:
      "We take the repetitive, time-consuming tasks off your plate and make them run seamlessly. The goal isn't just speed, it's freeing your team to focus on work that actually matters, while the system quietly handles the rest.",
    image: "/image-53.png",
  },
  {
    title: "Process Optimization",
    description:
      "We don't just automate - we improve. By studying your workflows, we identify bottlenecks and inefficiencies, then create systems that work better every day.",
    image: "/image-50.png",
  },
  {
    title: "Custom AI Tools",
    description:
      "Every business has its own rhythm. We create custom AI tools designed specifically for your workflows, fitting seamlessly into your operations.",
    image: "/image-52.png",
  },
  {
    title: "Continuous Support & Growth",
    description:
      "Automation isn't a set-it-and-forget-it deal. We monitor, optimize, and update solutions as your business evolves, keeping you ahead of the curve",
    image: "/image-51.png",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pt-32 pb-0 px-4 w-full">
      <h2 className="[font-family:'Inter',Helvetica] font-bold text-[55px] text-center tracking-[0] leading-normal whitespace-nowrap">
        <span className="text-white">OUR </span>
        <span className="text-[#6940fe]">SERVICES</span>
      </h2>

      <p className="max-w-[688px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-normal">
        comprehensive ai solutions designed to accelerate your digital
        transformation and drive unprecedented growth.
      </p>

      <div className="w-full max-w-[1442px] px-4 md:px-[162px] py-[54px] mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1162px] mx-auto">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="bg-[#0a0222] rounded-[14px] overflow-hidden border-0 relative min-h-[295px]"
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt={service.title}
                src={service.image}
              />
              <CardContent className="relative z-10 flex flex-col items-center justify-center gap-6 p-10 min-h-[295px]">
                <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-normal">
                  {service.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-normal max-w-[487px]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
