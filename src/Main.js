import React, {  Component  } from  'react'
import SideBar from './Sidebar'
import Chat from './Chat'

class Main extends Component{


    state = {
room: {
    name: "general",
    description: "Announcements and general chat"
}
    }


    render(){
        return(
<div style = {styles} className = "Main">
<SideBar user = {this.props.user} signOut = {this.props.signOut}/>
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