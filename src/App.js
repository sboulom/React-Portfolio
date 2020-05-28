import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./components/About"
import Contacts from "./components/Contacts"
import Portfolio from "./components/Portfolio"

function App() {
  return (
   <Router>
     <Route exact path = "/">
      <About />
     </Route>

     <Route exact path = "/contacts" component = {Contacts} />
   </Router>
  );
}

export default App;
