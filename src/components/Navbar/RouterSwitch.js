import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../Pages'
import About from '../../Pages/about'
import ContactUs from '../../Pages/contact'
import Services from '../../Pages/services'
import SignIn from '../../Pages/signIn'
import SignUp from '../../Pages/signUp'
import Navbar from './Navbar'

function RouterSwitch() {
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
export default RouterSwitch
