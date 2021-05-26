import React, { Component } from 'react';
import {BrowserRouter, NavLink, Route, Switch,} from 'react-router-dom';
import Login from './components/login/Login';
import ListAnimal from './components/animal/ListAnimal';
import Home from './components/home/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
          <NavLink activeClassName="active" to="/animal">Animal</NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/animal" component={ListAnimal}/>
          </Switch>
        </div>
      </BrowserRouter>
      
      </div>
    );
  }
}

export default App;