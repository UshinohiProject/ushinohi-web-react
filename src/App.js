import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/molecules/ScrollToTop'
import Header from './components/molecules/Header'
import Footer from './components/molecules/Footer'
import Top from './components/molecules/Top'
import Members from './components/molecules/Members'
import Projects from './components/molecules/Projects'
import Business from './components/molecules/Business'
import DigitalHackDay2021 from './components/molecules/DigitalHackDay2021'
import Chiko from './components/molecules/Chiko'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <div className='main-body'>
          <Route exact path='/' component={Top}/>
          <Route path='/Members' component={Members}/>
          <Route path='/Projects' component={Projects}/>
          <Route path='/Business' component={Business}/>
          <Route path='/DigitalHackDay2021' component={DigitalHackDay2021}/>
          <Route path='/Chiko' component={Chiko}/>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
