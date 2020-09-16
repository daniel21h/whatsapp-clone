import React from 'react'

import './styles.css'

export default function MessageItem({ data, user }) {
  return (
    <div 
      className="messageLine"
      style={{
        justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
      }}
    >
      <div 
        className="messageItem"
        style={{
          backgroundColor: user.id === data.author ? '#dcf8c6' : '#fff'
        }}
      >
        <div className="messageText">{data.body}</div>
        <div className="messageDate">{data.hour}</div>
      </div>
    </div>
  )
}