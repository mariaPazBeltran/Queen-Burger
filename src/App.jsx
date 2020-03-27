import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ProviderContext from './states/ProviderContext';
import Menu from './views/Menu';


function App() {
  return (
    <ProviderContext className="App">
      <Router>
        <Menu/>
      </Router>
    </ProviderContext>
  );
}

export default App;
