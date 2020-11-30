import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/molecules/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
