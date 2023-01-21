import React from 'react'
import Image from "next/image";
const AboutSection = () => {
    return (
        <div className="flex items-center justify-between flex-col-reverse md:flex-row  mx-6 sm:mx-8 md:mx-20 py-20">
            <div className="md:w-2/4 flex flex-col mt-3 md:mt-0">
                <div className="flex flex-col text-gray-700 items-start">
                    <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                        WHO WE ARE
                    </span>
                    <p className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none">
                        ABOUT US
                    </p>
                    <div className="flex my-2">
                        <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                        <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                    </div>
                </div>
                <p className="text-gray-800 mt-2 md:w-4/5 font-medium">
                    Our appliance repair service is quick and reliable. We understand the
                    importance of getting your broken appliances fixed as soon as
                    possible.
                </p>
                <div className="mt-4">
                    <button className="bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500">
                        CALL NOW
                    </button>
                    <button className="px-5 py-1 font-medium border-2 border-blue-500 text-blue-500">
                        LEARN MORE
                    </button>
                </div>
            </div>
            <div className="">
                <Image
                    src="/AboutAssets/Hero.jpg"
                    className="object-cover z-50 p-4 rounded-sm"
                    style={{}}
                    width={550}
                    height={500}
                    alt=""
                />
            </div>
        </div>
    )
}

export default AboutSection