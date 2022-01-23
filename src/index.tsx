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
import Redux101 from './pages/Redux101';
import ReactRedux from './pages/ReactRedux';

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
        <Route path="/redux101" element={<Redux101/>}/>
        <Route path="/react-redux" element={<ReactRedux/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
