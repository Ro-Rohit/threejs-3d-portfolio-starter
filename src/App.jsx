import { BrowserRouter } from "react-router-dom";
import {
  About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Works, StarsCanvas
} from './components';

import { motion } from "framer-motion";
import { useState } from "react";

const App = () => {
  const [isBottom, setIsBottom] = useState(false);

  document.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const isScrolledToBottom = window.scrollY >= scrollableHeight;
    setIsBottom(isScrolledToBottom)

  })


  return (
    <BrowserRouter>
      <div id="/" className="relative  z-0   bg-primary">

        <div className="w-full h-screen">
          <Navbar />
          <Hero />
          <div className="filter blur-sm absolute top-0 left-0 w-full -z-10 h-screen  bg-hero-pattern bg-no-repeat bg-cover"></div>
        </div>


        <About id='about' />
        <Experience />

        <Tech />
        <Works />

        <Feedbacks />


        <div id="contact" className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>


        <div className="fixed xs:bottom-5 bottom-[20%] w-full flex justify-center items-center cursor-pointer">
          <div onClick={() => !isBottom
            ? window.scrollBy(0, window.innerHeight)
            : window.scrollTo({ top: 0, behavior: 'smooth', duration: 2000 })}
            className="w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex py-1 justify-center"
          >
            <motion.div
              animate={{ y: [0, 35, 0] }}
              transition={{ duration: 1.7, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 "
            >
            </motion.div>
          </div>
        </div>

      </div>
    </BrowserRouter >
  )
}

export default App
