import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Checkbox } from '@mui/material';
import {FilterOutlined} from "@ant-design/icons"; 

const SecondDataGrid = () => {

    const columns = [
        { field: 'srno', headerName: 'SR NO.', width: 100 },
        { field: 'poolname', headerName: 'POOL NAME', width: 100 },
        { field: 'project', headerName: 'PROJECT', width: 100 },
        { field: 'nodes', headerName: 'NO. OF NODES', width: 250 },
        
    ];

    const rows = [
        { id: 1, srno: '01', poolname: 'Standby_Pool', project: 'Dummy Project', nodes: '40'},
        { id: 2, srno: '02', poolname: 'dths_test pool', project: 'Dev 88p Troll', nodes: '20'},
    ];

    const renderCheckbox = (params) => {
        return (
            <Checkbox
                checked={params.value}
                inputProps={{ 'aria-label': 'Select Row' }}
                color="primary"
            />

            
        );
    };


    return <>

        <div className="bg-white flex flex-row justify-center w-3/4">


                <DataGrid rows={rows} columns={columns}
                    checkboxSelection
                    components={{
                      Checkbox: renderCheckbox,
                    }}
                        pagination
                    className="p-2" />

        </div>



    </>
};

export default SecondDataGrid;