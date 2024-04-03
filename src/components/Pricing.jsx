import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import React from "react";
import "./design/Pricing";
import Button from "./Button";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          title="OUR SPEAKERS AND EVALUATORS"
        />

        <div className="relative">
          <img src="./" alt="" />
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="https://tally.so/r/mBXEe4"
          >
            EXPLORE FOR MORE DETAILS
          </a>
        </div>

        <div className = "flex justify-center mt-10">
          <Button className= "w-1/2" href="https://keepthescore.com/board/hjzxkggwrdcrr/">
            Leaderboard
          </Button>
        </div> */}

      
      </div>
    </Section>
  );
};

export default Pricing;
