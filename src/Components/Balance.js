import React from "react";

const Balance = () => {

    return <>

        <div className="flex absolute w-[212px] h-[264px] mt-[680px] ml-[954px] rounded-[16px] border-[1px] border-[#D9DCDF] bg-white">


        </div>

        <h1 className="flex absolute text-[20px] ml-[970px] mt-[696px] font-semibold tracking-wide">Balance</h1>

        <div className="ml-[970px] mt-[744px] flex absolute text-[28px] font-semibold items-baseline tracking-wide">
            <sup className="text-s">$</sup>
            <span className="text-3xl font-bold">458</span>
        </div>

        {/* <h1 className="ml-[970px] mt-[744px] flex absolute text-[28px] font-semibold items-baseline">$458</h1> */}



        <div className="flex flex-row absolute gap-x-[24px] ml-[970px] mt-[793px] items-center">

            <div className="flex flex-col gap-y-[8px]">
                <h1 className="text-[14px] tracking-wide text-gray-500">Coupon</h1>
                <h1>$25</h1>
            </div>

            <hr className="border-[1px] w-[40px] border-[#D9DCDF] rotate-90"></hr>

            <div className="flex flex-col gap-y-[8px]">
                <h1 className="text-[14px] tracking-wide text-gray-500">Credits</h1>
                <h1>$0</h1>
            </div>
        </div>


        <div type="button" className="flex absolute w-[180px] h-[48px] mt-[880px] ml-[970px] rounded-[24px] border-[1px] border-[#0171FE]">

        </div>


        <h1 className="w-[109px] flex absolute mt-[894px] ml-[1006px] text-16px text-blue-600">Recharge Now</h1>

    </>

};

export default Balance;