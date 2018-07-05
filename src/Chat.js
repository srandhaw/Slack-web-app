import React, {  Component  } from  'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import  MessageForm from  './MessageForm'

class Chat extends Component{

    constructor(){
super()

this.state = {
     messages: []
}
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
           <ChatHeader />
           <MessageList messages = {this.state.messages}/>
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