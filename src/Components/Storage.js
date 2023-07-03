import React from "react";
import StorageGrapth from "../SVGComponents/StorageGrapth";

const Storage = () => {

    return <>
        <div className="flex absolute w-[212px] h-[264px] mt-[680px] ml-[1188px] rounded-[16px] border-[1px] border-[#D9DCDF] bg-white">


        </div>

        <h1 className="flex absolute text-[20px] ml-[1204px] mt-[696px] font-semibold tracking-wide">Storage</h1>


        <div className="ml-[1205px] mt-[747px] flex absolute">
            <StorageGrapth/>
        </div>

        <h1 className="mt-[792px] ml-[1255px] absolute flex text-[24px] text-center font-semibold">88 GB</h1>

        <h1 className="mt-[828px] ml-[1229px] absolute text-[14px]">out of 100 GB (88%)</h1>




        <div type="button" className="flex absolute w-[180px] h-[48px] mt-[880px] ml-[1204px] rounded-[24px] border-[1px] border-[#0171FE]">

        </div>
        <h1 className="w-[109px] flex absolute mt-[894px] ml-[1247px] text-16px text-blue-600">View Details</h1>


    </>
};

export default Storage;