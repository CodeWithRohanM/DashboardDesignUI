import React from "react";
import DashboardIcon from "../SVGComponents/DashboardIcon";
import Assets from "../SVGComponents/Assets";
import Analysis from "../SVGComponents/Analysis";
import Jobs from "../SVGComponents/Jobs";
import Reports from "../SVGComponents/Reports";
import Transfers from "../SVGComponents/Transfers";
import Projects from "../SVGComponents/Projects";
import Settings from "../SVGComponents/Settings";
import Support from "../SVGComponents/Supports";
import Feedback from "../SVGComponents/Feedback";
import RaiseTicket from "../SVGComponents/RaiseTicket";


const SideBar = () => {

    return <>

        <div className="w-[256px] h-[984px] rounded-r-[32px] bg-[#011627] flex flex-col relative">


            <div className="flex flex-row gap-x-6 p-4 absolute items-center w-[224px] h-[48px] mt-[174px] ml-[16px] rounded-[8px] bg-[#0171FE]">
                <DashboardIcon className="w-[24px] h-[24px] mt-[186px]"></DashboardIcon>

                <button type="button" className="text-white">Dashboard</button>
            </div>

            <div className="flex flex-col text-[#8D969E] absolute w-[112px] h-[264px] mt-[242px] ml-[32px] gap-y-[36px] border-1 border-gray-100">

                <div className="flex flex-row gap-x-6 items-center">

                    <Assets className="w-[24px] h-[24px] mt-[186px]"></Assets>
                    <h1 className="text-[16px]">Assets</h1>

                </div>

                <div className="flex flex-row gap-x-6 items-center">

                    <Analysis className="w-[24px] h-[24px] mt-[186px]"></Analysis>
                    <h1 className="text-[16px]">Assets</h1>

                </div>

                <div className="flex flex-row gap-x-6 items-center">

                    <Jobs className="w-[24px] h-[24px] mt-[186px]"></Jobs>
                    <h1 className="text-[16px]">Assets</h1>

                </div>

                <div className="flex flex-row gap-x-6 items-center">

                    <Reports className="w-[24px] h-[24px] mt-[186px]"></Reports>
                    <h1 className="text-[16px]">Assets</h1>

                </div>

                <div className="flex flex-row gap-x-6 items-center">

                    <Transfers className="w-[24px] h-[24px] mt-[186px]"></Transfers>
                    <h1 className="text-[16px]">Assets</h1>

                </div>


            </div>


            <h1 className="flex absolute w-[224px] mt-[546px] ml-[16px] border-[#1F3241] border-[1px]"></h1>


            <div className="flex flex-col gap-y-[36px] w-[140px] h-[274px] mt-[710px] ml-[32px]">

                <div className="flex flex-row gap-x-6 text-[#8D969E]">


                    <Projects className="w-[24px] h-[24px] mt-[186px]"></Projects>
                    <h1 className="text-[16px]">Projects</h1>

                </div>

                <div className="flex flex-row gap-x-6 text-[#8D969E]">


                    <Settings className="w-[24px] h-[24px] mt-[186px]"></Settings>
                    <h1 className="text-[16px]">Settings</h1>

                </div>

                <div className="flex flex-row gap-x-6 text-[#8D969E]">


                    <Support className="w-[24px] h-[24px] mt-[186px]"></Support>
                    <h1 className="text-[16px]">Support</h1>

                </div>

                <div className="flex flex-row gap-x-6 text-[#8D969E]">


                    <Feedback className="w-[24px] h-[24px] mt-[186px]"></Feedback>
                    <h1 className="text-[16px]">Feedback</h1>

                </div>

                <div className="flex flex-row gap-x-6 text-[#8D969E] w-fit">


                    <RaiseTicket className="w-[24px] h-[24px] mt-[186px]"></RaiseTicket>
                    <h1 className="text-[16px] w-fit">Raise Ticket</h1>

                </div>





            </div>


        </div>

    </>
};

export default SideBar;