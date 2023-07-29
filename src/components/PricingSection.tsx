"use client";

import React, { useState } from "react";
import Heading from "@/components/Heading";
import { pricingItems } from "@/constants/pricing";
import PricingCard from "@/components/PricingCard";
import { PricingMode } from "@/types/interfaces";

const PricingSection = () => {
  const [mode, setMode] = useState<PricingMode>("monthly");
  const tabStyle =
    "basis-1/2 text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer";
  return (
    <section id="pricing" className="flex flex-col gap-8">
      <Heading title="Find a plan to power your projects" isCentered />
      <div className="max-w-[12rem] w-full mx-auto p-1 flex text-base bg-slate-800 rounded-lg">
        <p
          className={`${tabStyle} ${mode === "monthly" && "bg-sky-600"}`}
          onClick={() => setMode("monthly")}
        >
          monthly
        </p>
        <p
          className={`${tabStyle} ${mode === "annually" && "bg-sky-600"}`}
          onClick={() => setMode("annually")}
        >
          annually
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingItems.map((item, index) => (
          <PricingCard key={index} {...item} mode={mode} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
