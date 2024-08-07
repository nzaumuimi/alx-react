import React from 'react';
import pato from './pato.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pato} className="App-logo" alt="pato" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: '48px'
          }}
        >
          Mutiso the Hacker
        </a>
      </header>
    </div>
  );
}

export default App;