import React from "react";

import DownArrow from "../SVGComponents/DownArraow";
import Gift from "../SVGComponents/Gift";
import Bell from "../SVGComponents/Bell";
import Human from "../SVGComponents/Human";


const Header = () => {

    return <>

        <div className="flex absolute items-center w-full h-[72px] border-[1px] border-[#D9DCDF] bg-white">

        </div>

        <div className="flex flex-row items-center absolute mt-[24px] ml-[296px] gap-x-[8px]">

            <h1 className="flex text-[16px] w-fit">Default Project</h1>
            <DownArrow className="flex w-[24px] h-[24px]" />
            {/* <img src="/Images/tv.png" className="flex w-[24px] h-[24px]"></img> */}

        </div>


        <div className="flex absolute ml-[1127px] mt-[24px] w-[24px] h-[24px]">

            <Gift />
        </div>

        <div className="flex absolute ml-[1175px] mt-[24px] w-[24px] h-[24px]">

            <Bell />
        </div>



        <div className="flex flex-row justify-center items-center absolute mt-[16px] ml-[1239px] gap-x-[8px] ">

            <div className="flex flex-row justify-center items-center gap-x-[8px]">

                {/* <div className="w-[24px] h-[24px]">
                    <Human/>
                </div> */}

                <img src="/Images/profile.png" className="w-[40px] h-[40px]"></img>
                <h1 className="text-[16px]">Daren</h1>
            </div>

            <DownArrow className="w-[12px] h-[6px]" />

            {/* <img src="/Images/tv.png" className="w-[12px] h-[6px]"></img> */}

        </div>





    </>
};

export default Header;