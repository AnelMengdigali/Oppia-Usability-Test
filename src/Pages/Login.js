import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            loggedIn: false
        };
        this.handleChange=this.handleChange.bind(this);
        this.submit=this.submit.bind(this);
    }
 
    handleChange(e){
        let name=e.target.name;
        let value=e.target.value;
        console.log(name, value);

        let data={};
        data[name]=value;
        this.setState(data);
    }
    render () {
        if(this.state.loggedIn){
            return <Redirect to='/' />
        }
        return (
            <div className="App">
                 <Container>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                            <Form onSubmit={this.submit}> 
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" name="password" placeholder="Password"/>
                                </Form.Group>
                                <Button variant="success btn-block" type="submit">
                                    Login
                                </Button>
                                <Button variant="success btn-block" type="submit">
                                    Register
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
    submit(e) {
        e.preventDefault();

        window.axios.post('api/auth/login', {email: this.state.email, password: this.state.password})
        .then(response=>{
            console.log(response);
            this.setState({loggedIn:true});
            localStorage.setItem('token', response.data.auth.access_token)
        });
    }
   
}

export default Login;
