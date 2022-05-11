import React, {
  useEffect,
  lazy,
  Suspense
} from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home'
import { UserProvider } from "./context/user/UserContext";
import './App.css';

function App() {
  useEffect(() => {
    console.log('app loaded')
  }, [])


  return (
    <UserProvider>
      <Suspense fallback={<h5>loading route</h5>}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />

          </Routes>
        </Router>
      </Suspense>
    </UserProvider>
  );
}

export default App;
