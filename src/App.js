import React from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/About'
import Contacts from './components/Contacts'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      {/* <Route exact path='/'>
        <About />
      </Route> */}
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path={['/about', '/']} component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Footer></Footer>
    </Router>
  )
}
//ask about switch instead of Route as a wrapper

export default App
