import React from 'react'

import './styles.css'

export default function MessageItem() {
  return (
    <div className="messageLine">
      <div className="messageItem">
        <div className="messageText">Hello Man!</div>
        <div className="messageDate">19:00</div>
      </div>
    </div>
  )
}