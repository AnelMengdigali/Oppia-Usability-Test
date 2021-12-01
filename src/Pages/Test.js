import React, { Component } from 'react';

import { Button, ButtonLabel } from '../Components/Button.style';
import { TestContainer } from '../Components/Container.style';

import useFetch from '../Helpers/useFetch';

class Test extends Component {

    constructor(props) {

        super(props)

        this.state = {
            users: [],
            isLoading: false,
            isError: false
        }
        
    }

    async componentDidMount() {

        this.setState({ isLoading: true })
        ///
        const response = await fetch('http://localhost:8080/api/project/public')
        ///
        
        if (response.ok) {
          const users = await response.json()
          console.log(users);

          this.setState({ users: users, isLoading: false })
        } else {
          this.setState({ isError: true, isLoading: false })
        }

    }

    renderTableHeader = () => {
        return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
    }

    renderTableRows = () => {
        return this.state.users.map(user => {
            return (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{`${user.address.street}, ${user.address.city}`}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                </tr>
          )
        })
    }

    render() {

        const { users, isLoading, isError } = this.state
    
        if (isLoading) {
          return <div>Loading...</div>
        }
    
        if (isError) {
          return <div>Error</div>
        }
    
        return users.length > 0 ? 
        (
        <TestContainer>
            <table>
              <thead>
                <tr>
                  {this.renderTableHeader()}
                </tr>
              </thead>
              <tbody>
                {this.renderTableRows()}
              </tbody> 
            </table>
            <Button backgroundColor="lightblue"><ButtonLabel>Next</ButtonLabel></Button> 
            {/*<BlueButton>Next</BlueButton> */}
        </TestContainer>
        ) : (
          <TestContainer>No users.</TestContainer>
        )

    }

}

export default Test
