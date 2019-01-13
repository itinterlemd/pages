import React, { Component } from 'react';
import { Switch, BrowserRouter ,Route, Redirect } from 'react-router-dom'
import {MainLayout,EmptyLayout} from './layouts/main_layout';
import Main from "./components/main";
import Terminos from "./components/terminos_interlemd";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>   
      <Route exact path="/">
        <Redirect to="/terminos" />
      </Route>
      <EmptyLayout exact path="/terminos" component={Terminos}/>
      <MainLayout path="/home" component={Main}/>
    
      
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
