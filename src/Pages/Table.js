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
function CellHeaderStyling() {
  return (
    <MaterialTable
      title="Cell Header Styling Preview"
      columns={[
        {
          title: 'Name', field: 'name',
          cellStyle: {
            backgroundColor: '#039be5',
            color: '#FFF'
          },
          headerStyle: {
            backgroundColor: '#039be5',
          }
        },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        }
      }}
    />
  )
}
