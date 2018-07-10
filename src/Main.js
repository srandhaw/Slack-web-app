import React, {  Component  } from  'react'
import SideBar from './Sidebar'
import Chat from './Chat'

class Main extends Component{


    state = {
room: {
    name: "general",
    description: "Announcements and general chat"
},

rooms: {
    s3afternoon: {
      name: 's3afternoon',
      description: 'Ask questions and share code',
    },

    general: {
      name: 'general',
      description: 'Chat about whatever',
    },

    random: {
      name: 'random',
      description: 'Cat GIFs, etc.',
    }
  }


}

setCurrentRoom = (roomName) => {
    const room = this.state.rooms[roomName]
    this.setState({ room })
    
  }
    
    


    render(){
        return(
<div style = {styles} className = "Main">
<SideBar user = {this.props.user} signOut = {this.props.signOut} rooms = {this.state.rooms} setCurrentRoom = {this.setCurrentRoom}/>
<Chat user = {this.props.user} room={this.state.room}/>
</div>
        )
    }
}


const styles  = {
 display: 'flex',
 alignItems: 'stretch',
 height: '100vh',
}

export default Main