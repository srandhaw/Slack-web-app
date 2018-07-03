import React, { Component } from 'react'
import './App.css'
import Main from './Main'

class App extends Component {

  constructor(){
    super()

    this.state = {
      user: {
      uid: '23132323dfv',
      displayName: 'Shiv',
      email: 'shiv@purdue.edu'
    },
}
  }
  render() {
    return (
      <div className="App">
        <Main user = {this.state.user}/>
         
      </div>
    )
  }
}

export default App
