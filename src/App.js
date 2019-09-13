import React from 'react';
import Dashboard from "./Components/Dashboard/Dashboard"
import Header from "./Components/Header/Header"
import Wizard from "./Components/Wizard/Wizard"
import './App.css'
import {HashRouter, Link} from "react-router-dom";
import routes from "./routes";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Dashboard />
        <Header />
        <Wizard />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
