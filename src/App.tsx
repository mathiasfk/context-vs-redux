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
      <div className="Link">
        <Link to="/props-edit">Props edit</Link>
      </div>
      <div className="Link">
        <Link to="/context-edit">Context edit</Link>
      </div>
      <div className="Link">
        <Link to="/multiple-contexts">Multiple contexts</Link>
      </div>
      <div className="Link">
        <Link to="/redux101">Redux 101</Link>
      </div>
      <div className="Link">
        <Link to="/react-redux">Redux Redux</Link>
      </div>
    </div>
  );
}

export default App;
