import React, { Component } from 'react';
import { Switch, Route ,Redirect, HashRouter } from 'react-router-dom'
import Main from "./components/main";
import Terminos from "./components/terminos_interlemd";


class App extends Component {
  render() {
    return (
      <HashRouter>
    <Switch >
      <Route path="/terminos" component={Terminos}/>
      <Route path="/home" component={Main}/>      
      <Route  path="/principal"> 
          <Redirect to="/home"/>
      </Route>
      <Route exact  path="/"> 
          <Redirect to="/terminos"/>
      </Route>     
      <Route component={() => (<div>404 Not found </div>)} />
      </Switch>
    </HashRouter>
    );
  }
}

//export default withRouter(App);
export default App;
