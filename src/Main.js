import React, {  Component  } from  'react'
import SideBar from './Sidebar'
import Chat from './Chat'
import base from './base'
import RoomForm from './RoomForm'

class Main extends Component{


    state = {
room: {
    name: "general",
    description: "Announcements and general chat"
},

rooms: {},
showRoomForm: false,

}

setCurrentRoom = (roomName) => {
    const room = this.state.rooms[roomName]
    this.setState({ room })
    
  }

  showRoomForm = () => {
    this.setState({ showRoomForm: true })
  }

  hideRoomForm = () => {
    this.setState({ showRoomForm: false })
  }

  componentDidMount() {
    this.roomsRef = base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
        defaultValue: {
          general: {
            name: 'general',
            description: 'Chat about whatever',
          },
        }
      }
    )
  }

  componentWillUnmount() {
    base.removeBinding(this.roomsRef)
  }
    
    
  addRoom = room => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = room

    this.setState({ rooms })
  }

    render(){
      if (this.state.showRoomForm) {
        return <RoomForm addRoom={this.addRoom} />
      }
        return(
<div style = {styles} className = "Main">
<SideBar user = {this.props.user} signOut = {this.props.signOut} rooms = {this.state.rooms} setCurrentRoom = {this.setCurrentRoom} showRoomForm={this.showRoomForm}/>
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