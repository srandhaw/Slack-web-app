import React, {  Component  } from  'react'
import SideBar from './Sidebar'
import Chat from './Chat'

class Main extends Component{
    render(){
        return(
<div style = {styles} className = "Main">
<SideBar user = {this.props.user} signOut = {this.props.signOut}/>
<Chat  user = {this.props.user}/>
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