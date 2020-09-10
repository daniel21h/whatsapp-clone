import React from 'react'
import './styles.css'

export default function ChatListItem({ onClick, active }) {
  return (
    <div 
      className={`chatitem ${active?'active' : ''}`} 
      onClick={onClick}
    >
      <img 
        className="chatitem-avatar"
        src="https://api.adorable.io/avatars/285/abott@adorable.png
        " 
        alt="Avatar"
      />

      <section className="chatitem-lines">
        <div className="chatitem-line">
          <div className="chatitem-name">John Doe</div>
          <div className="chatitem-date">19:00</div>
        </div>
        <div className="chatitem-line">
          <div className="chatitem-lastmessage">
            <p>Hello, what's up!</p>
          </div>
        </div>
      </section>
    </div>
  )
}