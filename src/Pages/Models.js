import React, { useState } from 'react'
import "../Styles/Models.css";
import Select from 'react-select';

function Models () {

    var SysList = [
        {
            value: 1,
            label: "Version 1.0" 
        },
        {
            value: 2,
            label: "Version 1.1" 
        },
        {
            value: 3,
            label: "Version 2.0" 
        }
    ];

    var CogList = [
        {
            value: 1,
            label: "Model 1" 
        },
        {
            value: 2,
            label: "Model 2" 
        },
        {
            value: 3,
            label: "Model 3" 
        }
    ];

    const [result1, sysValue] = useState(SysList.label);
    const sysHandler = e => {
        sysValue(e.label);
    }

    const [result2, cogValue] = useState(CogList.label);
    const cogHandler = e => {
        cogValue(e.label);
    }
    return (
            <div>    
                <div id="div1">
                    <Select options={SysList} onChange={sysHandler}/>     
                    <h1>{result1}</h1>  
                </div>
                <div id="div2">
                    <Select options={CogList} onChange={cogHandler}/>     
                    <h1>{result2}</h1>  
                </div>     
            </div>
        )
}

export default Models;

