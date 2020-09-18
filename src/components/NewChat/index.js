import React, { useState } from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import './styles.css'

export default function NewChat() {
  const [list, setList] = useState([
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
    {id: 123, avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png', name: 'Daniel Hessel'},
  ])

  return (
    <div className="newchat">
      <div className="newchat-header">
        <div className="newchat-backbutton">
          <ArrowBackIcon style={{ color: '#ffffff' }} />
        </div>
        <div className="newchat-headtitle">Nova conversa</div>
      </div>

      <div className="newchat-list">
        {list.map((item, key) => (
          <div className="newchat-item" key={key}>
            <img 
              src={item.avatar} 
              alt={item.name + 'Avatar'}
              className="newchat-itemavatar"
            />
            <div className="newchat-itemname">
              {item.name}
            </div>  
          </div>
        ))}
      </div>
    </div>
  )
}