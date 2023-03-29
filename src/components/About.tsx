import React from "react";
import Image from "next/image";
//count up
import CountUp from "react-countup";
//intersection observer hook
//import { useInView } from "react-intersection-observer";

//variant
//import { fadeIn } from "../variants";
import png1 from "../../public/cod.jpg";
import { RevealWrapper } from "next-reveal";
export default function About(){
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // });
  return (
    <section className="section" id="about" >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-10 lg:flex-row mb-20 lg: items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          {/* <RevealWrapper
          origin='left' delay={200} duration={1000} distance='500px' reset={true}
          > */}
          <div
         

          className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
            <Image src={png1} alt="ume" className=" mt-16 rounded-2xl border-solid border-yellow-400 "></Image>
          </div>
          {/* </RevealWrapper> */}
          {/* text */}
          <div className="flex-1 "
          >
            <h2 className="h2 text-accent ">About me</h2>
            <h3 className="h3 mb-4 ">
              I am a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <p className="mb-6 ">
              The average Developer tends to be methodical, structured, and
              serious. They can be very organized and attentive to detail,
              especially when given plenty of personal space to think and work
              privately.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12  ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                 {/* {inView ?    <CountUp start={0} end ={5} duration={5} /> : null } */}
               

                </div>
                <div className="font-primary text-sm tracking-[2px]">
                
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                 {/* {inView ?    <CountUp start={0} end ={10} duration={5} /> : null } */}


                </div>
                <div className="font-primary text-sm tracking-[2px]">
                    
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                 {/* {inView ?    <CountUp start={0} end ={15} duration={5} /> : null } */}


                </div>
                <div className="font-primary text-sm tracking-[2px]">
                     <br/>
              
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg ">  Contact Me
              </button>
                <a href="#" className="text-gradient btn-link ">
                  My Portfolio
                </a>
              
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};


