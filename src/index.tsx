import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropsExample from './pages/PropsExample';
import ContextExample from './pages/ContextExample';
import PropsEditExample from './pages/PropsEditExample';
import ContextEditExample from './pages/ContextEditExample';
import MultipleContextsExample from './pages/MultipleContextsExample';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/props" element={<PropsExample/>}/>
        <Route path="/context" element={<ContextExample/>}/>
        <Route path="/props-edit" element={<PropsEditExample/>}/>
        <Route path="/context-edit" element={<ContextEditExample/>}/>
        <Route path="/multiple-contexts" element={<MultipleContextsExample/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
