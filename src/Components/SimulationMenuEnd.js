import React, {useState} from 'react'
import '../Styles/Simulation.css';

function MenuEnd({menuElem}) {

    return (
        <div>
            {menuElem.map((item) => {<div className="item"><div className="item-con" key={item.id} ><pre><h2>{item.title}</h2></pre></div></div>})}
        </div>
    )  
}

export default MenuEnd;

