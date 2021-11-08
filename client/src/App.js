import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <Landing /> } />
        <Route path = '/dashboard' element = { <Dashboard /> } />
      </Routes>
   </Router> 
  )
}

export default App;