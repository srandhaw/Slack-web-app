import React, {  Component  } from  'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import  MessageForm from  './MessageForm'

import base from './base'

class Chat extends Component{

    constructor(){
super()

this.state = {
     messages: []
}
    }

componentDidMount(){
    this.messagesref = base.syncState(
        'messages/general',
        {
            context: this,
            state: 'messages',
            asArray: true
        }
    )
}

componentWillUnmount(){
    base.removeBinding(this.messagesref)
}

    addMessage  = (body) => {
        const messages = [...this.state.messages]
    

        messages.push({
            id: `${this.props.user.uid} - ${Date.now()}`,
            user: this.props.user,
            body: body,
        })

        this.setState({messages: messages})
    }
    

    render(){
        return(
           <div className =  'Chat' style = {styles.chat}>
           <ChatHeader room = {this.props.room}/>
           <MessageList messages = {this.state.messages} room = {this.props.room}/>
           <MessageForm addMessage = {this.addMessage}/>
           </div> 
        )
    }
}

export default Chat

const styles = {

    chat: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column' 
    }
}