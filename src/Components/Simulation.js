import { useState } from 'react';
import items from './Alldata';
import Menu from './Menu';
import Button from './Button';

import '../Styles/Simulation.css';

const allCategories = [...new Set(items.map(item => item.category))];

console.log(allCategories);

function Simulation() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    {/*if(button === 'Action'){
      setMenuItem(items);
      return;
    } */}

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className="Simulation">
       
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