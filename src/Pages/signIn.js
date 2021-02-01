import React from 'react'
import '../components/Login/style.scss'
import Login from '../components/Login/login.jsx'
import Register from '../components/Login/register.jsx'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogginActive: true,
    }
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add('right')
  }

  changeState() {
    const { isLogginActive } = this.state

    if (isLogginActive) {
      this.rightSide.classList.remove('right')
      this.rightSide.classList.add('left')
    } else {
      this.rightSide.classList.remove('left')
      this.rightSide.classList.add('right')
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }))
  }

  render() {
    const { isLogginActive } = this.state
    const current = isLogginActive ? 'Sign Up' : 'Sign In'
    const currentActive = isLogginActive ? 'login' : 'register'
    return (
      <div className='App'>
        <div className='login'>
          <div className='container' ref={(ref) => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    )
  }
}

const RightSide = (props) => {
  return (
    <div
      className='right-side'
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className='inner-container'>
        <div className='text'>{props.current}</div>
      </div>
    </div>
  )
}

export default SignIn

// import React from 'react'
// import Indexlog from '../components/Login'

// const SignIn = () => {
//   return (
//     <div className='Altapp'>
//       <Indexlog />
//     </div>
//   )
// }

// export default SignIn
