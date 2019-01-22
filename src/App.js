import React, { Component } from 'react';
import { Switch, Route ,Redirect, BrowserRouter} from 'react-router-dom'
import Main from "./components/main";
import Terminos from "./components/terminos_interlemd";
import './index.css';



class App extends Component {
  render() {
    console.log('process.env.PUBLIC_URL-->'+ process.env.PUBLIC_URL)
    return (
      <BrowserRouter basename="/pages" >
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
    </BrowserRouter>
    );
  }
}

//export default withRouter(App);
export default App;
