import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import {auth} from './base'

class App extends Component {

  constructor(){
    super()


    const user =JSON.parse(localStorage.getItem('user'))

    this.state = {
      user: user||{},
}
  }


handleAuth = (oAuthUser) => {
  
    const user = {
      uid: oAuthUser.uid,
      displayName: oAuthUser.displayName,
      email: oAuthUser.email,
      photoUrl: oAuthUser.photoURL,
    }
   
  this.setState({user})
  localStorage.setItem('user', JSON.stringify(user))
}

componentDidMount(){
  auth.onAuthStateChanged(
    user =>{
      if(user){
        this.handleAuth(user)

      }else{
this.handleUnAuth()
      }
    }
  )
}

signedIn = () =>{
return this.state.user.uid
}

signOut = () => {
 
  auth.signOut()
  this.handleUnAuth()
  
}

handleUnAuth = () =>{
  this.setState({ user: {} })
  localStorage.removeItem('user')
}

  
  render() {
    return (
      <div className="App">
      {
        this.signedIn()
        ?<Main user = {this.state.user} signOut =  {this.signOut}/>
        :<SignIn handleAuth = {this.handleAuth}/>
      }
      </div>
    )
  }
}

export default App
