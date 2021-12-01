import { Block } from '@material-ui/icons';
import React, {useState} from 'react'
import {Table} from 'react-bootstrap';
import { Button, ButtonLabel } from './Button.style';
import '../Styles/Simulation.css';

function Menu({menuItem}) {

//     const [data, setData] = useState();
//     showMe : false
// //    function updateData() {
// //        setData(data+1)
// //    }

//     // function updateData() {
//     //     menuItem.map((item) => <p>{item.title}</p>)
//     // }

//     onClick : function() {
//         this.setState({ showMe : true} );
//      }

    return (
        <div>
            <div className="item">
                {
                    menuItem.map((item) =>{
                        return <div className="item-con" key={item.id} >       
                               <pre><h2>{item.title}</h2></pre>          
                        </div>
                    })
                }
            </div>
            <div id="div5">
                {/* <Button backgroundColor="#0C3564" ><ButtonLabel>Next</ButtonLabel></Button>  */}
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

export default Menu;

