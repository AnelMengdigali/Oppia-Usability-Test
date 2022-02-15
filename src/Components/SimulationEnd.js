import { useState } from 'react';
import elem from '../Helpers/SimulationData';
import console from '../Helpers/ConsoleData';
import MenuEnd from './SimulationMenuEnd';
import Button from './Button';

import '../Styles/Simulation.css';

const allCategories = ['Global State', ...new Set(elem.map(item => item.category))];

function Simulation() {
  const [menuElem, setMenuElem] = useState(elem);
  
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'Global State'){
      setMenuElem(console);
      return;
    }

    const filteredData = elem.filter(item => item.category ===  button);
    setMenuElem(filteredData)
    
  }


  return (
    <div className="App">
       
       <div className="title">
         <h1>
           Simulation Results
         </h1>
       </div>


      <Button button={buttons} filter={filter} />
      <MenuEnd menuElem={menuElem}/>

    </div>
  );
}

export default Simulation;