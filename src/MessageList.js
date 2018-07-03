import React from  'react'
import Message from './Message';


const MessageList = () => {

    const  messages = [
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

    return(
        <div className = 'MessageList'>
        { messages.map(msg => (
       <Message message = {msg} key = {msg.id} />
    )
        )}
        </div>
    )
}

export default MessageList


