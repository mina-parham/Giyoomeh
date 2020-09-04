import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import MainHome from './components/MainHome';
import Terms from './components/Terms';
import Pri from './components/Pri';
import Style from './components/Style';

class App extends Component {
  render() {
    return (
    <Router>
        <div>


          <Route exact path={"/"} component={MainHome}/>
          <Route path={"/terms"} component={Terms}/>
          <Route path={"/privacy"} component={Pri}/>
            <Route path={"/style"} component={Style}/>

     </div>
    </Router>

    );
  }
}

export default App;
