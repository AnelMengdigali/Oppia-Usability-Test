import React from 'react'
import MaterialTable from 'material-table'

import { Button, ButtonLabel } from './Button.style';

function Menu({menuItem}) {

    const data=[
        {domain: 'Birds', fact: 'bird is a animal'},
        {domain: 'Birds', fact: 'bird can fly'},
        {domain: 'Fish', fact: 'fish is a animal'},
        {domain: 'Fish', fact: 'bird has feathers'}
    ]

    const columns=[
        {title:'Domain', field:'domain'},
        {title:'Fact', field:'fact'}
    ]
    
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <img src={item.image} alt=""/>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>{item.data}</p>
                        </div>
                    </div>
                })
            }
        
        <div id="div3">
        <MaterialTable
            title="Short-Term Memory"
            data={data}
            columns={columns}
            options={{
                search: false,
                paging: false,
                filtering: false,
                exportButton: false,
                cellEditable: false
        }}
        />
        </div>
        <div id="div4">
        <Button backgroundColor="#082b44"><ButtonLabel>Next</ButtonLabel></Button>
        </div>
    </div>
    )
}

export default Menu;