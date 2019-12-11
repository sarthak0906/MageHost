import React from 'react';
import { Switch, Route  } from "react-router-dom";
import './App.css';
import SignIn from './SignIn'
import Home from './Home'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/" component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
