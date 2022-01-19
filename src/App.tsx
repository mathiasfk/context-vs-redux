import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Link">
        <Link to="/props">Props</Link>
      </div>
      <div className="Link">
        <Link to="/context">Context</Link>
      </div>
    </div>
  );
}

export default App;
