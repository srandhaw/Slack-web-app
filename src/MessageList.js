import React from  'react'
import Message from './Message';


const MessageList = (props) => {

   

    return(
        <div className = 'MessageList' style = {styles.MessageList}>
         <div class="roomAnnouncement" style = {styles.roomAnnouncement}>
          <h3 style = {styles.h3}>#{props.room.name}</h3>
          <p>This is the very beginning of the #{props.room.name} room.</p>
        </div>
        { props.messages.map(msg => (
       <Message message = {msg} key = {msg.id} />
    )
        )}
        </div>
    )
}

export default MessageList

const styles = {
    MessageList: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
      },

      roomAnnouncement: {
        padding: '2rem 1rem',
      },

      h3 :{
        fontSize: '1.5rem',
      }
}


