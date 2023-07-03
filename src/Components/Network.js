import React from "react";
import Graph from "../SVGComponents/Graph";
import Dot from "../SVGComponents/Dot";
import Highlight from "../SVGComponents/Highlight";


const Network = () => {

    return <>

        <div className="flex absolute w-[446px] h-[504px] mt-[152px] ml-[954px] rounded-[16px] border-[#D9DCDF] border-[1px] bg-white">

        </div>

        <h1 className="flex absolute text-[20px] mt-[168px] ml-[970px] tracking-wide font-semibold">Network</h1>

        <div className="flex flex-row justify-center items-center absolute gap-x-[16px] mt-[247px] ml-[970px]">
            <h1 className="text-gray-500 tracking-wide">320</h1>
            <hr className="w-[368px] border-[1px] border-[#D9DCDF] rotate-0"></hr>

        </div>


        <div className="flex flex-row justify-center items-center absolute gap-x-[16px] mt-[298px] ml-[970px]">
            <h1 className="text-gray-500 tracking-wide">260</h1>
            <hr className="w-[368px] border-[1px] border-[#D9DCDF]"></hr>
        </div>


        <Graph className="" />

        <hr className="w-[194px] mt-[465px] ml-[1170px] border-[2px] -rotate-90 border-black absolute z-10"></hr>

        <div className="w-[18px] -rotate-180 h-[18px] mt-[352px] ml-[1009px] z-10">

            <Dot/>

        </div>

        <div className="absolute mt-[332px] ml-[1150px] rounded-[8px] z-10">
            <Highlight/>
        </div>

        {/* <h1 className="w-[18px] -rotate-180 h-[18px] mt-[357px] ml-[1002px] border-[2px] border-black rounded-full fill-current"></h1> */}



        <div className="flex flex-row justify-center items-center absolute gap-x-[16px] mt-[349px] ml-[970px]">
            <h1 className="text-gray-500 tracking-wide">220</h1>
            <hr className="w-[368px] border-[1px] border-[#D9DCDF]"></hr>
        </div>
        <div className="flex flex-row justify-center items-center absolute gap-x-[16px] mt-[400px] ml-[970px]">
            <h1 className="text-gray-500 tracking-wide">180</h1>
            <hr className="w-[368px] border-[1px] border-[#D9DCDF]"></hr>
        </div>

        <div className="flex flex-row justify-center items-center absolute gap-x-[16px] mt-[451px] ml-[970px]">
            <h1 className="text-gray-500 tracking-wide">140</h1>
            <hr className="w-[368px] border-[1px] border-[#D9DCDF]"></hr>
        </div>

        <div className="flex flex-row justify-center items-center absolute gap-x-[16px] mt-[502px] ml-[970px]">
            <h1 className="text-gray-500 tracking-wide">100</h1>
            <hr className="w-[368px] border-[1px] border-[#D9DCDF]"></hr>
        </div>

        <div className="flex flex-row justify-center items-center absolute gap-x-[34px] mt-[553px] ml-[970px]">
            <h1 className="text-gray-500 tracking-wide">0</h1>
            <hr className="w-[368px] border-[1px] border-[#D9DCDF]"></hr>
        </div>

        <h1 className="w-[40px] h-[48px] flex text-center flex-col absolute ml-[1029px] mt-[584px] tracking-wide text-gray-500">21 JAN</h1>

        <h1 className="w-[40px] h-[48px] flex text-center flex-col absolute ml-[1101px] mt-[584px] tracking-wide text-gray-500">22 JAN</h1>

        <h1 className="w-[40px] h-[48px] flex text-center flex-col absolute ml-[1173px] mt-[584px] tracking-wide text-gray-500">23 JAN</h1>

        <h1 className="w-[40px] h-[48px] flex text-center flex-col absolute ml-[1245px] mt-[584px] tracking-wide text-black">24 JAN</h1>

        <h1 className="w-[40px] h-[48px] flex text-center flex-col absolute ml-[1317px] mt-[584px] tracking-wide text-gray-500">25 JAN</h1>


    </>
}

export default Network;