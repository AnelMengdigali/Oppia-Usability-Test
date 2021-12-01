import { useState } from 'react';
import items from './Alldata';
import console from './Consoledata';
import Menu from './Menu';
import Button from './Button';

import '../Styles/Simulation.css';

const allCategories = ['Global State', ...new Set(items.map(item => item.category))];

function Simulation() {
  const [menuItem, setMenuItem] = useState(items);
  
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'Global State'){
      setMenuItem(console);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className="App">
       
       <div className="title">
         <h1>
           Simulation Results
         </h1>
       </div>


      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem}/>

    </div>
  );
}

export default Simulation;