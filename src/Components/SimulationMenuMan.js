import { Block } from '@material-ui/icons';
import React, {useState} from 'react'
import {Table} from 'react-bootstrap';
import '../Styles/Simulation.css';
import { Button, ButtonLabel } from '../Helpers/Button.style';

function MenuMan({menuItem}) {

    const [count, setCount] = useState(0)
    // const [check, setCheck] = useState(false)
//     const [data, setData] = useState();

    function changeNext() {
        setCount(prevCount => prevCount + 1);
    }

    function changePrev() {
        setCount(prevCount => 
            prevCount ? prevCount - 1 : 0);
    }

    // function viewAll() {
    //     // setCheck(prevCheck => 
    //     //     !prevCheck);
    //     menuItem.map((item) => {<div className="item-con" key={item.id} ><pre><h2>{item.title}</h2></pre></div>})
    // }

    return (
        <div>
            <div className="item">
                <div className="item-con" key={menuItem[`${count}`].id} >       
                    { menuItem[`${count}`] ===  menuItem[menuItem.length - 1] ? <pre><h2>END</h2></pre> : <pre><h2>{menuItem[`${count}`].title}</h2></pre>}          
                </div>
                {/* {check &&
                <div>
                    {menuItem.map((item) => {<div className="item-con" key={item.id} ><pre><h2>{item.title}</h2></pre></div>})}
                </div>} */}
            </div>
            <div id="div5">
                <Button backgroundColor="#0C3564" onClick={changePrev}><ButtonLabel>Prev</ButtonLabel></Button>
                <Button backgroundColor="#0C3564" onClick={changeNext}><ButtonLabel>Next</ButtonLabel></Button> 
                {/* <Button backgroundColor="#0C3564" onClick={viewAll}><ButtonLabel>All</ButtonLabel></Button>  */}
            </div>
        </div>
    )  

    // return (
    //     <div>
    //         <div id="div6">
    //             <Table>
    //                     <thead>
    //                         <tr>
    //                             <td></td>
    //                         </tr>
    //                     </thead>
                        
    //                     {menuItem.map((item) => ( 
    //                     <tbody>
    //                         <tr>
    //                             <td>{item.title}</td>
    //                         </tr>
    //                     </tbody>
    //                     ))}
    //             </Table>
    //         </div>
    //         <div id="div5">
    //             <Button backgroundColor="#0C3564" onClick={updateData}><ButtonLabel>Next</ButtonLabel></Button> 
    //         </div>
    //     </div>
    // )
}

export default MenuMan;

