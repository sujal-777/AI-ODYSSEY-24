import React from "react";

import "../assets/Styles/Timeline.scss";

const Timeline_Day1 = () => {
    return (
        <div>
            <div id="content">
                <ul className="timeline">
                    <li
                        className="event"
                        data-date="10:00 AM - 10:30 AM"
                        data-aos="fade-up"
                    >
                        <h3>Inauguration</h3>
                        <p>
                        The event kicks off with the ceremonial lighting of the lamp, followed by extending a warm welcome to our esteemed judges and sponsors.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="10:30 AM - 11:15 AM"
                        data-aos="fade-up"
                    >
                        <h3>Keynote</h3>
                        <p>
                        Join us for our keynote session to delve into AI technologies and explore intriguing topics that spark curiosity.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="11:30 AM - 1:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Pixel Puzzle and Scan & Hunt</h3>
                        <p>
                        Experience the visually engaging 'Pixel Puzzle,' finding objects with algorithms, then dive into the adrenaline-fueled 'Scan & Hunt,' racing to capture hidden QR codes within a time limit, testing your skills to the max!
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="1:30 PM - 2:15 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Lunch</h3>
                        <p>
                        Break for lunchtime to unwind and recharge your energy before resuming your activities refreshed and revitalized.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="2:15 PM - 3:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Ideathon and Imaginate AI</h3>
                        <p>
                        Ideathon is a competition where contestants submit their ideas to judges; in Imaginate AI, pairs use AI to create images, which ignites a creative frenzy.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="3:30 PM - 3:45 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Break</h3>
                        <p>Take a break to rest and recharge.</p>
                    </li>
                    <li
                        className="event"
                        data-date="3:45 PM - 5:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Ideathon and DataVerse</h3>
                        <p>
                        Prepare to let your creativity run wild in Ideathon and show off your data wizardry in Dataverse, where excitement and discovery abound every minute!
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline_Day1;