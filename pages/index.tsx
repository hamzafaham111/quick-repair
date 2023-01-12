import type { NextPage } from "next";
import * as React from "react";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col-reverse md:flex-row  mx-6 sm:mx-8 md:mx-20">
      <div className="md:w-2/4 flex flex-col mt-3 md:mt-0">
        <div className="flex flex-col text-gray-800 items-start">
          <p className="text-xl lg:text-3xl sm:text-2xl font-extrabold leading-none">
            QUICK AND RELAIBLE
          </p>
          <p className="text-xl lg:text-3xl sm:text-2xl font-extrabold leading-none">
            APPLIANCE REPAIR SERVICE
          </p>
          <span className="text-white text-sm font-extrabold mt-1 bg-blue-600 px-2">
            YOUR TRUST OUR CONFIDENCE
          </span>
        </div>
        <p className="text-gray-800 mt-2 md:w-4/5">
          Our appliance repair service is quick and reliable. We understand the
          importance of getting your broken appliances fixed as soon as
          possible.
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500">
            CALL NOW
          </button>
          <button className="px-5 py-1 font-medium border-2 border-blue-500 text-blue-500">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="bg-gray-500 rounded-tl-lg">
        <Image
          src="/indexAssets/heroImage.png"
          className="object-cover bg-blue-500 z-50"
          style={{}}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Home;
