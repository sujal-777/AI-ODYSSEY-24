import React from "react";

import "../assets/Styles/Timeline.scss";

const Timeline_Day2 = () => {
    return (
        <div>
            <div id="content">
                <ul className="timeline">
                    <li
                        className="event"
                        data-date="10:00 AM - 11:20 AM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Panel Discussion</h3>
                        <p>
                        Get ready for an exhilarating Panel Discussion where a powerhouse of experts will dazzle you with their insights and perspectives on the groundbreaking evolution of AI!
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="11:30 AM - 12:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Catch the Web and Strategic Stack</h3>
                        <p>
                        Experience Catch the Web: Hunt, Hint, and Win! at AI Odyssey’24, unraveling clues in a heart-pounding online race. Then, dive into Strategic Stack, strategically investing to conquer the financial arena and emerge victorious!
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="12:30 PM - 1:15 PM"
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
                        data-date="01:15 PM - 2:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Find the Glitch and TechnoTales</h3>
                        <p>
                        Step into the adventure of "TechnoTales," where stories become coding challenges. Then, become a digital detective in "Find the Glitch," racing against time to fix buggy code and conquer challenges, sharpening your skills.
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="2:30 PM - 4:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Mini Shark Tank and Artsy Voyage </h3>
                        <p>
                        Immerse yourself in 'ARTSY VOYAGE,' blending storytelling with AI creativity, then dive into the thrilling challenge of MINI SHARK TANK, testing your wits against business titans in a battle of innovation and quick thinking!
                        </p>
                    </li>
                    <li
                        className="event"
                        data-date="4:30 PM - 5:30 PM"
                        // data-aos="fade-left"
                        data-aos="fade-up"
                    >
                        <h3>Valedictory</h3>
                        <p>
                        All top performers at AI Odyssey will be honored with prizes and additional recognition for their outstanding achievements.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline_Day2;