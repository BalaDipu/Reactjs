import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/index'
import About from './Pages/about'
import Services from './Pages/services'
import ContactUs from './Pages/contact'
import SignUp from './Pages/signUp'
import SignIn from './Pages/signIn'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App
