import React, { useState } from "react";
import Wrapper from "./layout/wrapper";
import Header from "./components/header";
import About from "./components/about";
import OurCommands from "./components/ourCommands";
import BgSec from "./components/bgSec";
import WeProvide from "./components/weProvide";
import ImplementedProjects from "./components/implementedProjects";
import StarSec from "./components/starSec";
import TwoPicSec from "./components/twoPicSec";
import CurrentProjects from "./components/currentProjects";
import ExtoMedical from "./components/extoMedical";
import Welness from "./components/welness";
import Uchastok from "./components/uchastok";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SmenGengal from "./components/smenGengal";
import Spectrum from "./components/spectrum";
import Sss from "./components/sss";
import AfterT from "./components/afterT";
import ExtroGroup from "./components/extroGroup";
import Modal from "./components/modal";
import { Toaster } from "react-hot-toast";
import Year11 from "./components/11year";
import Map from "./components/map";
import SliderUPR from "./components/sliderUPR";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <About />
      <OurCommands />
      <BgSec />
      <WeProvide />
      <ImplementedProjects />
      <ExtroGroup />

      <Year11 />

      <SliderUPR />

      <StarSec />
      <TwoPicSec />
      <Spectrum />
      <Sss />
      <CurrentProjects />
      <AfterT />
      <ExtoMedical />
      <Map />
      <Welness />
      <Uchastok />
      <SmenGengal />
      <Contact setIsModalOpen={setIsModalOpen} />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
