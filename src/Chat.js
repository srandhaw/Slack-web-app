import React, {  Component  } from  'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import  MessageForm from  './MessageForm'

class Chat extends Component{

    constructor(){
super()

this.state = {
     messages: [
        { id: 1,
          user: {
              uid: '23131231',
              displayName: 'Sehaj',
              email: 'srandhaw@purdue.edu'
          },
          body: "Hey whatsuppp!"
        },
        
        {
            id: 2,
            user: {
                uid: '13qescq123',
                displayName: 'Davey',
                email: 'davey@fretless.com'
            },
            body: "Good man!!!" 
        },
        
        
            ]
}
    }

    addMessage  = (body) => {
        const messages = [...this.state.messages]

        messages.push({
            id: Date.now(),
            user: {
                uid: '23132323dfv',
                displayName: 'Shiv',
                email: 'shiv@purdue.edu'
            },
            body: body,
        })

        this.setState({messages: messages})
    }
    

    render(){
        return(
           <div className =  'Chat'>
           <ChatHeader />
           <MessageList messages = {this.state.messages}/>
           <MessageForm addMessage = {this.addMessage}/>
           </div> 
        )
    }
}

export default Chat