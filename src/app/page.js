"use client";

import Hero from "@/components/Hero";
import Mars from "@/components/Mars";
import Planets from "@/components/models/Planets";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div>
        <div className="">
          <h3 className="text-4xl text-center font-bold text">The Mars</h3>
          <div className="lg:flex gap-4 items-center container mx-auto">
            <div className="lg:w-1/2">
              <p className="text-xl text ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora officiis voluptatibus qui earum, saepe eveniet eum, non
                molestias, reprehenderit necessitatibus tempore adipisci!
                Nesciunt deserunt quo, maiores tempore mollitia corrupti dolores
                laudantium
              </p>
            </div>
            <div className="lg:w-1/2 ">
              <Planets></Planets>
              {/* <Mars /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
