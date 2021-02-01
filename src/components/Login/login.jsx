import React, { Component } from 'react'
import loginImg from './../../image/login.svg'
import './style.scss'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className='base-container'>
        <div className='header'>Sign In</div>
        <div className='content'>
          <div className='image'>
            <img src={loginImg} />
          </div>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' placeholder='username' />
            </div>
          </div>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' placeholder='password' />
            </div>
          </div>
          <div class='footer'>
            <span class='mas'>Sign In</span>
            <button type='button'>Sign In</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
