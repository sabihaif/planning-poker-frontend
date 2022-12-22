import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'; 

let socket;

function App() {
  useEffect(() => {
    socket = io('ws://localhost:5000');
    socket.on('connection', socket => {
      console.log("Connection happened")
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
