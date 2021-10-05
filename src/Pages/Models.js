import React, { Component } from 'react'
import "../Styles/Models.css";
import {useState} from 'react';

export class Models extends Component {

    render() {
        return (
            <div className="dropdown">
                <div className="dropdown-btn"> Choose </div> 
                
                    <div className="dropdown-content"> 
                        <div className="dropdown-item"> Choose </div> 
                        <div className="dropdown-item"> Choose </div> 
                    </div> 
                
            </div>
        )
    }
}

export default Models
