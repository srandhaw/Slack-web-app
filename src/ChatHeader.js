import React from  'react'

const ChatHeader = (props) => {

    return(
        <header className="ChatHeader" style = {styles.ChatHeaderStyle}>
            <div className="roomInfo">
            <h2 style = {styles.h2}>#general</h2>
            <p style = {styles.p}>Announcements and general chat</p>
            </div>
        </header>
        )

}

export default ChatHeader

const styles = {
    ChatHeaderStyle: {
        backgroundColor: '#f3f3f3',
        borderBottom: '1px solid #ccc',
        height: '3rem',
        padding: '0 1rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      
      h2: {
        fontSize: '1.1rem',
        margin: '0'
      },
      
       p: {
        color: '#999',
        margin: '0',
        fontSize: '0.8rem',
      }
}