import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Setup from './Components/Setup';

import Home from './Pages/Home';
import Systems from './Pages/Systems';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Models from './Pages/Models';
import Table from './Pages/Table';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomizedDialogs from './Components/Dialog';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})


const App = () => {
  return (
    <div className="App">
      <Router>
        <Container>
        <NavBar/>
        <Switch> 
          <Route path="/" exact={true} component={Home} />
          <Route path="/systems" exact component={Systems} />
          <Route path="/models" exact component={Models} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} /> 
        </Switch>
        </Container>
       
        <Footer/>
      </Router>
    </div>
  )
}

const Container = styled.div`
  background: white;
`;

export default App;