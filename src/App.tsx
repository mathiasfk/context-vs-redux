import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export const enum ComponentRoutes {
  PROPS = "/props",
  CONTEXT = "/context",
  PROPS_EDIT = "/props-edit",
  CONTEXT_EDIT = "/context-edit",
  MULTIPLE_CONTEXTS = "/multiple-contexts",
  REDUX_101 = "/redux-101",
  REACT_REDUX = "/react-redux",
  REDUX_TOOLKIT = "/redux-toolkit",
}

function App() {
  return (
    <div className="App">
      <div className="Link">
        <Link to={ComponentRoutes.PROPS}>Props</Link>
      </div>
      <div className="Link">
        <Link to={ComponentRoutes.CONTEXT}>Context</Link>
      </div>
      <div className="Link">
        <Link to={ComponentRoutes.PROPS_EDIT}>Props edit</Link>
      </div>
      <div className="Link">
        <Link to={ComponentRoutes.CONTEXT_EDIT}>Context edit</Link>
      </div>
      <div className="Link">
        <Link to={ComponentRoutes.MULTIPLE_CONTEXTS}>Multiple contexts</Link>
      </div>
      <div className="Link">
        <Link to={ComponentRoutes.REDUX_101}>Redux 101</Link>
      </div>
      <div className="Link">
        <Link to={ComponentRoutes.REACT_REDUX}>React Redux</Link>
      </div>
      <div className="Link">
        <Link to={ComponentRoutes.REDUX_TOOLKIT}>Redux Toolkit</Link>
      </div>
    </div>
  );
}

export default App;
