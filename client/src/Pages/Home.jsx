import React from "react";
import FeatureCard from "../Components/FeatureCard/FeatureCard";

function Home() {
  return (
    <div className="dark:bg-gray-900">
      <div className="h-lvh relative pt-20 md:pt-16 dark:bg-gray-900">
        <div className="w-full h-[85vh] grid place-content-center relative mb-5 py-10">
          <img
            src="/bg.jpg"
            alt="Background"
            className="object-cover w-[80vw] h-[80vh] md:h-[75vh] rounded-3xl"
          />

          <div className="absolute inset-0  items-start justify-start top-6 left-14 md:top-20 md:left-40  ">
            <img src="/name.png" className="" alt="" />

            <h1 className="font-bold text-slate-600 text-xl md:text-4xl relative left-1">
              Your all-in-one solution
              <br /> for seamless Scooty service <br />
              and support.
            </h1>
          </div>
        </div>
      </div>

      <FeatureCard />
    </div>
  );
}

export default Home;
