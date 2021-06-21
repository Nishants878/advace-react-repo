import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CommonProps from './components/CommonProps'
import StateMachine from './components/StateMachine'
import StateMachineFetch from './components/StateMachineFetch';
import CompoundComponents from './components/CompoundComponents'


function App() {

  return (
    <div className="App">
    <CommonProps/>
    <StateMachine/>
    <StateMachineFetch/>
    <CompoundComponents/>
    </div>
  );
}

export default App;
