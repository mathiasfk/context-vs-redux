import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { ComponentRoutes } from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropsExample from './pages/PropsExample';
import ContextExample from './pages/ContextExample';
import PropsEditExample from './pages/PropsEditExample';
import ContextEditExample from './pages/ContextEditExample';
import MultipleContextsExample from './pages/MultipleContextsExample';
import Redux101 from './pages/Redux101';
import ReactRedux from './pages/ReactRedux';
import ReduxToolkit from './pages/ReduxToolkit';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path={ComponentRoutes.PROPS} element={<PropsExample/>}/>
        <Route path={ComponentRoutes.CONTEXT} element={<ContextExample/>}/>
        <Route path={ComponentRoutes.PROPS_EDIT} element={<PropsEditExample/>}/>
        <Route path={ComponentRoutes.CONTEXT_EDIT} element={<ContextEditExample/>}/>
        <Route path={ComponentRoutes.MULTIPLE_CONTEXTS} element={<MultipleContextsExample/>}/>
        <Route path={ComponentRoutes.REDUX_101} element={<Redux101/>}/>
        <Route path={ComponentRoutes.REACT_REDUX} element={<ReactRedux/>}/>
        <Route path={ComponentRoutes.REDUX_TOOLKIT} element={<ReduxToolkit/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
