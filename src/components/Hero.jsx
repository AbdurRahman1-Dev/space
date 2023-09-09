import "./Hero.css";
import ship from "../../public/img/image 6.png";
import rocket from "../../public/img/image 8.png";
import fall from "../../public/img/image 9.png";
import planet from "../../public/img/image 7.png";
import light from "../../public/img/image 3.png";
import moon from "../../public/img/image 5.png";

import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg p-4 relative mb-60">
      <div className="p-4">
        <h3 className="text-hero text-3xl">Space</h3>
      </div>
      <div className="relative">
        <div className="h-screen flex justify-center relative ">
          <div className="text-white text-center w-1/2 mx-auto space-y-6 pt-5 z-50">
            <h1 className="text-8xl font-bold z-50">Go Beyond</h1>
            <p className="z-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy
            </p>
            <button className="px-16 rounded-xl py-3 bg-[#8846D2] z-50">
              Explore
            </button>
          </div>
          <h3 className="text-hero-s absolute -rotate-[20deg] z-0 top-[25%]">
            SPACE
          </h3>
        </div>

        <div className="p-3 bg-white rounded-xl absolute left-20 top-[30%]">
          <p className="text-base text-center">animate-bounce</p>
          <Image src={planet} alt="planet"></Image>
        </div>

        <div className="absolute bottom-[15%] right-[35%]  ">
          <Image src={ship} alt="ship"></Image>
        </div>
      </div>
      <div className="absolute -bottom-2 right-[25%]  ">
        <Image src={fall} alt="ship"></Image>
      </div>
      <div className="absolute -bottom-5 right-0 ">
        <Image src={rocket} alt="ship"></Image>
      </div>

      <div className="absolute -bottom-[40%] left-0 ">
        <Image src={moon} alt="moon"></Image>
      </div>

      <div className="absolute top-0 right-0 ">
        <Image src={light} alt="moon"></Image>
      </div>
    </div>
  );
};

export default Hero;
