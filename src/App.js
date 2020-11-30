import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/molecules/Header'
import Top from './components/molecules/Top'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Top />
      </Router>
    </div>
  );
}

export default App;
