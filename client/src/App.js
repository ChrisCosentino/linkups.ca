import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.css';

import * as Routes from './constants/routes';
import UserComponent from './components/UserComponent';
import FormComponent from './components/FormComponent';
import Landing from './components/Landing';



class App extends Component{
  render() {
    return (
      <Router>
        <Route exact path={Routes.LANDING} render={props => (
          <Landing />
        )}/>


        <Route path="/:username" render={props => {
          if(props.match.url === '/admin'){
            return(
              <FormComponent />
            )
          }else{
            if(props.match.url === "/api" || props.match.url == "/api/links"){
              
            }else{
              return (
                <UserComponent {...props} />
              )
            }
            
          }
        }}
        />

      </Router>
    );
  }
}

export default App;
