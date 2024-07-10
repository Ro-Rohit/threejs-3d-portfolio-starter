import React from "react";
import { BallCanvas } from './canvas';
import { Wrapper } from "../hoc";
import { technologies } from "../constants";



const Tech = () => {
  return (
    <section className="flex flex-row flex-wrap gap-x-4 gap-y-3 justify-center max-w-5xl mx-auto">
      {
        technologies.map((technology) => {
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          )
        })
      }
    </section>
  );
};

export default Tech;
