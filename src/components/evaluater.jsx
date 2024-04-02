import { check } from "../assets";
import evaluater from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import { LeftLine , RightLine } from "./design/evaluater";
import React from "react";
import "./design/Pricing";
// import Button from "./Button";

const evaluater = ()=> {
    return (
        <Section className="overflow-hidden" id="pricing">
            {/* <div className="container relative z-2"> */}
                <Heading title="Evaluators"/>
                <div className="relative">
                    <Evaluatorlist />
                    <LeftLine />
                    <RightLine />
                </div>
            {/* </div> */}
        </Section>
    
    );

};

export default evaluater;