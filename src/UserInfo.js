import React from 'react'
import Avatar from './Avatar'
import SignOutButton from './SignOutButton'

const UserInfo = (props) => {
  return (
    <div
      className="UserInfo"
      style={styles.userInfo}
    >
      <Avatar user = 'props.user'/>
      <div style={styles.user}>
        {props.user.displayName}
      </div>

      <SignOutButton />
      
    </div>
  )
}

const styles = {
  userInfo: {
    padding: '0 1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  user: {
    flex: 1,
  }
}

export default UserInfo