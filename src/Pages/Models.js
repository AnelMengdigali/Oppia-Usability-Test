import React, { useState } from 'react'
import "../Styles/Models.css";
import Select from 'react-select';
import CustomizedDialogs from '../Components/Dialog'
import Setup from '../Components/Setup';
import { useHistory } from 'react-router-dom'
import Table from './Table'

function Models () {

    const { push } = useHistory()
    var SysList = [
        {
            value: 1,
            label: "Version 1.0",
            description: "Description of System Model Version 1.0. This is the fast addition version with facts starting at every 10 seconds."
        },
        {
            value: 2,
            label: "Version 1.1", 
            description: "Description of System Model Version 1.1"
        },
        {
            value: 3,
            label: "Version 2.0", 
            description: "Description of System Model Version 2.0"
        }
    ];

    var CogList = [
        {
            value: 1,
            label: "Model 1",
            description: "Description of Cognitive Model Version 1. This is learing mode experiment by transfer of information for STM to LTM" 
        },
        {
            value: 2,
            label: "Model 2", 
            description: "Description of Cognitive Model Version 2"
        },
        {
            value: 3,
            label: "Model 3",
            description: "Description of Cognitive Model Version 3" 
        }
    ];

    const [result1, sysValue] = useState(SysList.label);
    const sysHandler = e => {
        sysValue(e.description);
    }

    const [result2, cogValue] = useState(CogList.label);
    const cogHandler = e => {
        cogValue(e.description);
    }
    
    return (
            <div>    
                <div id="div1">
                    <h4>System Models</h4>
                    <Select options={SysList} onChange={sysHandler}/>   
                    <CustomizedDialogs></CustomizedDialogs>    
                    <h3>{result1}</h3>  
                </div>
                <div id="div2">
                    <h4>Cognitive Models</h4>
                    <Select options={CogList} onChange={cogHandler}/>   
                    <CustomizedDialogs><Setup/></CustomizedDialogs>  
                    <h3>{result2}</h3>  
                </div>  
            </div>
        )
}

export default Models;

