import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Header from './Header'
// import Button from '@material-ui/core/Button'
import SignIn from './SignIn'

function App() {
  return (
    <div className="App">
      <Header UserName="Whatever" />
      <header className="App-header">
        <SignIn />
      </header>
    </div>
  );
}

export default App;
