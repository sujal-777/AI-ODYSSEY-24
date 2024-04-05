import React, { useState, useEffect } from 'react';
import Heading from "./Heading";
import '../style.css'

const CountdownTimer = () => {
    const targetDate = new Date('00 00 00'); //  Set the target date
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const timeRemaining = targetDate - currentDate;

            setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;

    return (
        <div className='container relative z-2'>
            <Heading
                className="md:max-w-md lg:max-w-2xl"
                title="Event Registration is closed"
            />
            {/* <h2 className='neon flex justify-center'>{formattedTime}</h2> */}
        </div>
    );
};

export default CountdownTimer;