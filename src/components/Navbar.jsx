import React, { useState } from "react";
import { Link } from 'react-scroll';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} py-5 z-20 fixed top-0 flex items-center w-full`}>
      <div className="w-full flex justify-between items-center mx-auto max-w-7xl">
        {/* logo  */}
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          onClick={() => { setActive(""); }}
          className="flex gap-x-5 items-center"
        >
          <img src={logo} alt="Logo" className="object-contain w-14 h-14 cursor-pointer rounded-full" />
          <p className="text-white text-[18px] font-bold cursor-pointer tracking-widest uppercase">Rohit
            <span className="sm:block hidden tracking-wider font-light text-sm">| MadWeb</span>
          </p>
        </Link>

        {/* links for desktop */}
        <ul className="hidden  sm:flex items-center gap-x-5 list-none">
          {navLinks.map((item) => {
            return (
              <li
                key={item.id}
                className={`${active === item.id ? 'text-white' : 'text-secondary'} cursor-pointer hover:text-white font-medium text-md`}
                onClick={() => { setActive(item.id) }}
              >
                <Link
                  to={item.id}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
        {/* links for mobile  */}
        <div className="sm:hidden block transition-all ease-in" onClick={() => setToggle(!toggle)}>
          <img src={`${toggle ? close : menu}`} alt="menuIcon" className="w-6 h-6 object-contain transition-all duration-150 " />

          <div className={`${toggle ? 'block' : 'hidden'} absolute top-20 right-4 mx-4 black-gradient rounded-lg w-fit h-fit transition-all duration-300`}>
            <ul className="flex flex-col items-center justify-center gap-y-5 list-none p-4">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`${active === item.id ? 'text-white' : 'text-secondary'} hover:text-white font-medium text-md`}
                    onClick={() => { setActive(item.id); setToggle(false); }}
                  >
                    <Link
                      to={item.id}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>

      </div>

    </nav>
  )

};

export default Navbar;
