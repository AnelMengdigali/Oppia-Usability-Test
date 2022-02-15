import React, { useState } from 'react'
import "../Styles/Models.css";
import Select from 'react-select';
import CustomizedDialogs from '../Components/Dialog'
import Setup from '../Components/Setup';
import { useHistory, useLocation } from 'react-router-dom'
import Table from './Table'
import img1 from '../Assets/img1.png';

import { Button, ButtonLabel } from '../Helpers/Button.style';

function Models () {

    let navigate = useHistory();

    var OverList = [
        {
            value: 1,
            label: "Overall Model 1: Abstract",
            description: "Description: abstract overall model for people and dogs project"
        },
        {
            value: 2,
            label: "Overall Model 2: Concrete", 
            description: "Description: concrete overall model for people and dogs project"
        }
    ];

    var SysList = [
        {
            value: 1,
            label: "Version 1",
            description: "Description: person patting a dog"
        }
    ];

    var CogList = [
        {
            value: 1,
            label: "Version 1: Child",
            description: "Description: child aiming to pat a dog" 
        },
        {
            value: 2,
            label: "Version 2: John", 
            description: "Description: adult patting a dog"
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
                <div id="div3">
                    <h1>Interaction human-dog project</h1>
                    <h3>Stage: Pre-model</h3>
                    <h3>Access: Public</h3>
                    <h2>Please configure models to run the experiment by selecting Overall Model and corresponding System and Cognitive Models to it below.</h2>
                </div>          
                <div id="div3">
                    <h2>Overall Models</h2>
                    <Select options={OverList} onChange={overHandler}/>   
                    {/*<CustomizedDialogs></CustomizedDialogs>  */}  
                    <h2>{result}</h2>  
                </div>
                <div id="div1">
                    <h4>System Models</h4>
                    <Select options={SysList} onChange={sysHandler}/>   
                    {/*<CustomizedDialogs></CustomizedDialogs> */}  
                    <h2>{result1}</h2>  
                </div>
                <div id="div2">
                    <h4>Cognitive Models</h4>
                    <Select options={CogList} onChange={cogHandler}/>   
                    {/*<CustomizedDialogs><Setup/></CustomizedDialogs> */} 
                    <h2>{result2}</h2>  
                </div>  
                <div id="div4">
                    <Button backgroundColor="#082b44" 
                    onClick={() => {navigate.push('/simulationEnd')}}><ButtonLabel>Run: end result</ButtonLabel></Button>
                    <Button backgroundColor="#082b44" 
                    onClick={() => {navigate.push('/simulationMan')}}><ButtonLabel>Run: manual</ButtonLabel></Button>
                    <Button backgroundColor="#082b44" 
                    onClick={() => {navigate.push('/systems')}}><ButtonLabel>Go Back</ButtonLabel></Button>
                </div>
            </div>
        )
}

export default Models;

