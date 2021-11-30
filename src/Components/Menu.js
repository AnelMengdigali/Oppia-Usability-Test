import { Block } from '@material-ui/icons';
import {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap';
import { Button, ButtonLabel } from './Button.style';

function Menu({menuItem}) {

//    const [data, setData] = useState(menuItem);

//    function updateData() {
//        setData(data+1)
//    }

    function updateData() {
        menuItem.map((item) => <p>{item.title}</p>)
    }

    return (
        <div>
            <div id="div6">
                <table>
                        <thead>
                            <tr>
                                <td></td>
                            </tr>
                        </thead>
                        
                        {menuItem.map((item) => ( 
                        <tbody>
                            <tr>
                                <td>{item.title}</td>
                            </tr>
                        </tbody>
                        ))}
                </table>
            </div>
            <div id="div5">
                <Button backgroundColor="#0C3564" onClick={updateData}><ButtonLabel>Next</ButtonLabel></Button> 
            </div>
        </div>
    )
}

export default Menu;