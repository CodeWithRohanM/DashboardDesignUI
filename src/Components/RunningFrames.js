import React from "react";
import Circular from "../SVGComponents/Circular";
import Waiting from "../SVGComponents/Waiting";
import Completed from "../SVGComponents/Completed";
import Failed from "../SVGComponents/Failed";
import DownArrow from "../SVGComponents/DownArraow";



const RunningFrames = () => {

    return <>

        <div className="flex absolute w-[634px] h-[208px] top-[384px] ml-[296px]">

            <div className="w-full h-full flex rounded-[16px] border-[#D9DCDF] border-[1px] relative bg-white">

                <h1 className="mt-[24px] ml-[16px] text-[20px] text-[#011627] font-semibold tracking-wide">Running Frames</h1>

                <div className="flex flex-row gap-x-[4px] ml-[524px] mt-[26px] absolute items-center">
                    <h1 className="text-[14px] text-[#011627] font-semibold">This Week</h1>

                    <div className="w-[24px] h-[24px]">
                        <DownArrow/>
                    </div>

                </div>

                <div className="w-[40px] h-[40px] ml-[16px] mt-[80px] absolute">
                    <Circular />
                </div>



                <div className="flex flex-col gap-y-[12px] mt-[136px] ml-[16px] absolute">
                    <h1 className="text-[14px] text-gray-500">RENNDERING JOBS</h1>

                    <h1 className="text-[24px] font-semibold">14</h1>

                </div>

                <div className="w-[40px] h-[40px] ml-[187px] mt-[80px] absolute">
                    <Waiting />
                </div>


                <div className="flex flex-col gap-y-[12px] mt-[136px] ml-[187px] absolute">
                    <h1 className="text-[14px] text-gray-500">WAITING JOBS</h1>

                    <h1 className="text-[24px] font-semibold">14</h1>

                </div>

                <div className="w-[40px] h-[40px] ml-[334px] mt-[80px] absolute">
                    <Completed />
                </div>


                <div className="flex flex-col gap-y-[12px] mt-[136px] ml-[335px] absolute">
                    <h1 className="text-[14px] text-gray-500">COMPLETED JOBS</h1>

                    <h1 className="text-[24px] font-semibold">14</h1>

                </div>

                <div className="w-[40px] h-[40px] ml-[509px] mt-[80px] absolute">
                    <Failed />
                </div>



                <div className="flex flex-col gap-y-[12px] mt-[136px] ml-[509px] absolute">
                    <h1 className="text-[14px] text-gray-500">FAILED JOBS</h1>

                    <h1 className="text-[24px] font-semibold">14</h1>

                </div>




            </div>

        </div>

    </>
};

export default RunningFrames;