import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Room = (props) => {

  const handleClick = (ev) =>{
ev.preventDefault()
props.setCurrentRoom(props.roomName)
  }
  return (
    <li className={css(styles.item)} key={props.roomName}>
      <a href="/" className={css(styles.link)} onClick  = {handleClick}>
        {props.roomName}
      </a>
    </li>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default Room