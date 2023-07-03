import React from "react";

import SideBar from "./Components/SideBar";
import RunningJobs from "./Components/RunningJobs";
import RunningFrames from "./Components/RunningFrames";
import Network from "./Components/Network";
import Balance from "./Components/Balance";
import Storage from "./Components/Storage";
import Header from "./Components/Header";
import SecondDataGrid from "./Components/SecondDataGrid";
import { Button } from 'antd';

import DataGridComponent from "./Components/DataGridComponent";


const App = () => {

  return <>

    <div className="flex relative w-screen h-screen bg-gray-200">

      <Header />

      <SideBar />

      <RunningJobs />

      <RunningFrames />

      <DataGridComponent />

      <Network />

      <Balance />

      <Storage />



    </div>

    <div className="h-fit flex flex-col justify-center items-center gap-y-12 w-full mt-12">

      <Button type="primary" className="text-black  font-bold">Poll Action</Button>

      <SecondDataGrid/>


    </div>






  </>
}

export default App;