import React from 'react'
import MaterialTable from 'material-table'

export const Table=()=> {
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
        <div>
            <MaterialTable
            title="Memory Structure"
            data={data}
            columns={columns}
            options={{
                search: true,
                paging: true,
                filtering: false,
                exportButton: false,
                cellEditable: true
            }}
            />
        </div>
    )
}

export default Table
