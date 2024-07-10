import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute top-20 z-10  flex gap-x-5 items-start px-4 max-w-4xl">
        {/* stick  */}
        <div className="flex flex-col max-h-fit items-center">
          <div className="w-9 h-9 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        {/* intro */}
        <div className="flex flex-col max-h-fit ">
          <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className="text-[#915eff]">Rohit</span></h1>
          <p className={`${styles.heroSubText}text-white max-w-lg`}>I develop 3D visuals, user interfaces and web applications</p>

        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
