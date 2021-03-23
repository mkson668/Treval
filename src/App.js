import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
