import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CommonProps from './components/CommonProps'
import StateMachine from './components/StateMachine'
import StateMachineFetch from './components/StateMachineFetch';
import CompoundComponents from './components/CompoundComponents';
import MemoComponent from './components/MemoComponent';
import UseContextExample from './components/UseContextExample'
import ClousreAndCleanup from './components/ClousreAndCleanup'
import{ BrowserRouter, Route, Link } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      
  
    <div className="App">
    <CommonProps/>
    <StateMachine/>
    <StateMachineFetch/>
    <CompoundComponents/>
    <MemoComponent/>
    <UseContextExample/>
    <ClousreAndCleanup/>
    </div>
    </BrowserRouter>
  );
}

export default App;
