import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import HomePage from '../HomePage/HomePage'
import LinkedList from '../LinkedList/LinkedList'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'
import { openLogin, closeLogin } from '../Login/LoginReducers'


export default class App extends Component {  
  constructor(props) {
    super(props)
    this.openLogin = this.openLogin.bind(this)
    this.closeLogin = this.closeLogin.bind(this)
  }
  
  openLogin () {
    this.props.dispatch(openLogin())
  }

  closeLogin () {
    const { dispatch } = this.props
    dispatch(closeModal())
  }

  render() {
    const {store, children} = this.props
    return ( 
      <div>
        <div className="menu-bar">
          <img className="logo" src="http://visualgo.net/img/heap.gif" />
          <Link to={'home'}><span className="title">Data.Structrz</span></Link>
          <span className="login" onClick={() => openLogin()}>LOGIN</span>
        </div>
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const login = state.login
  return {
    login
  }
}

export default connect(mapStateToProps)(App)
