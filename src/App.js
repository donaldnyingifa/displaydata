import React, {
  useEffect
} from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home'
import './App.css';

function App() {
  useEffect(() => {
    console.log('app loaded')
  }, [])


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
