import React, { useState } from 'react'
import "../Styles/Models.css";
import Select from 'react-select';
import CustomizedDialogs from '../Components/Dialog'
import Setup from '../Components/Setup';
import { useHistory, useLocation } from 'react-router-dom'
import Table from './Table'

import { Button, ButtonLabel } from '../Components/Button.style';

function Models () {

    let navigate = useHistory();
    let location = useLocation();

    const dataPass = [{id: 1, name: 'Ford', color: 'red'}];

    const { data } = location.state;

    var OverList = [
        {
            value: 1,
            label: "Overall Model 1: Abstract",
            description: "Description of Overall Model Version 1.0. This is the fast addition version with facts starting at every 10 seconds."
        },
        {
            value: 2,
            label: "Overall Model 2: Concrete", 
            description: "Description of Overall Model Version 1.1"
        }
    ];

    var SysList = [
        {
            value: 1,
            label: "Version 1: System",
            description: "Description of System Model Version 1.0. This is the fast addition version with facts starting at every 10 seconds."
        },
        {
            value: 2,
            label: "Version 2: System", 
            description: "Description of System Model Version 1.1"
        },
        {
            value: 3,
            label: "Version 1", 
            description: "Description of System Model Version 1.1"
        },
        {
            value: 4,
            label: "Version 2", 
            description: "Description of System Model Version 1.1"
        }
    ];

    var CogList = [
        {
            value: 1,
            label: "Version 1: Child",
            description: "Description of Cognitive Model Version 1. This is learing mode experiment by transfer of information for STM to LTM" 
        },
        {
            value: 2,
            label: "Version 2: John", 
            description: "Description of Cognitive Model Version 2"
        }, 
        {
            value: 3,
            label: "Version 1", 
            description: "Description of Cognitive Model Version 2"
        },
        {
            value: 4,
            label: "Version 2", 
            description: "Description of System Model Version 1.1"
        }
    ];

    const [result, overValue] = useState(OverList.label);
    const overHandler = e => {
        overValue(e.description);
    }

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
                <h4>{data}</h4>
                <div id="div3">
                    <h4>Overall Models</h4>
                    <Select options={OverList} onChange={overHandler}/>   
                    {/*<CustomizedDialogs></CustomizedDialogs>  */}  
                    <h3>{result}</h3>  
                </div>
                <div id="div1">
                    <h4>System Models</h4>
                    <Select options={SysList} onChange={sysHandler}/>   
                    {/*<CustomizedDialogs></CustomizedDialogs> */}  
                    <h3>{result1}</h3>  
                </div>
                <div id="div2">
                    <h4>Cognitive Models</h4>
                    <Select options={CogList} onChange={cogHandler}/>   
                    {/*<CustomizedDialogs><Setup/></CustomizedDialogs> */} 
                    <h3>{result2}</h3>  
                </div>  
                <div id="div4">
                <Button backgroundColor="#082b44" 
                onClick={() => {navigate.push({ pathname: '/', state: dataPass})}}><ButtonLabel>Run</ButtonLabel></Button>
                </div>
            </div>
        )
}

export default Models;

