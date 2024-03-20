import React from "react";
import { useState } from "react";
import Heading from "./Heading";

import classes from "../assets/Styles/Events.module.scss";
import Timeline_Day1 from "./Timeline_Day1";
import Timeline_Day2 from "./Timeline_Day2";


const Events = () => {
    const [show, setShow] = useState(false);

    const timelineHandler = () => {
        show = setShow(false);
    };

    const timelineHandler2 = () => {
        show = setShow(true);
    };

    return (
        <div className={classes.rootEvents}>
            <Heading
                className="md:max-w-md lg:max-w-2xl"
                title="Schedule of Event"
            />

            <div className={classes.buttons}>
                <div className={classes.button} onClick={timelineHandler}>
                    <p>
                        5<sup>th</sup> April
                    </p>
                </div>

                <div className={classes.button} onClick={timelineHandler2}>
                    <p>
                        6<sup>th</sup> April
                    </p>
                </div>
            </div>

            {show ? <Timeline_Day2 /> : <Timeline_Day1 />}

            <div id="speakers"></div>
        </div>
    );
};

export default Events;
