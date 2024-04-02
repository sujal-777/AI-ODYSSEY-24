import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import CountdownTimer from "./components/Timer";
// import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
// import useCountdown from "./components/useCountdown";
// import useCountdown from "./components/useCountdown";
import EventRoadmap from "./components/EventRoadmap";
import Events from "./components/events";
// import particle from "./components/particle";
// import evaluater from "./components/evaluater";
import Pricing1 from "./components/pricing1";
// import Particles from "./components";

const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Particles /> */}
        <Header />
        <Hero />
        <Collaboration />
        <CountdownTimer />
        <Benefits />
        {/* <EventRoadmap /> */}
        {/* <particle /> */}
        
        <Events />
        <Services />
        <Pricing />
        <Pricing1 />
        {/* <evaluater /> */}
        {/* <Roadmap /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
