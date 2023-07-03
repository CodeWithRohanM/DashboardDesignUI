import React from "react";
import { DataGrid } from '@mui/x-data-grid';



const DataGridComponent = () => {

    const columns = [
        { field: 'jobId', headerName: 'JOB ID', width: 100 },
        { field: 'projectId', headerName: 'PROJECT ID', width: 100 },
        { field: 'stage', headerName: 'STAGE', width: 100 },
        { field: 'sceneShotName', headerName: 'SCENE/SHOT NAME', width: 250 },
        { field: 'view', headerName: 'VIEW', width: 100 },
    ];

    const rows = [
        { id: 1, jobId: '1234567890', projectId: 'Pro_256', stage: 'Rendering', sceneShotName: 'KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)', view: 'view' },
        { id: 2, jobId: '1234567890', projectId: 'Pro_256', stage: 'Uploading', sceneShotName: 'KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)', view: 'view' },
        { id: 3, jobId: '1234567890', projectId: 'Pro_256', stage: 'Analysis', sceneShotName: 'KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)', view: 'view' },
        { id: 4, jobId: '1234567890', projectId: 'Pro_256', stage: 'Uploading', sceneShotName: 'KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)', view: 'view' },
        { id: 5, jobId: '1234567890', projectId: 'Pro_256', stage: 'Uploading', sceneShotName: 'KD1_00123_DPI_JK001_light assembly_v017.hip(/obj/...)', view: 'view' },
    ];



    return <>



        <div className="w-[634px] h-[328px] mt-[616px] ml-[296px] rounded-[16px] bg-white flex absolute">

            <div className="w-full h-full flex flex-col rounded-[16px] border-[#D9DCDF] border-[1px] relative bg-white">

                <h1 className="mt-[24px] ml-[16px] text-[20px] pb-4 tracking-wide font-semibold">Active Jobs</h1>

                <DataGrid rows={rows} columns={columns}
                    pagination
                    className="p-2" />

            </div>
        </div>






    </>
};

export default DataGridComponent;


