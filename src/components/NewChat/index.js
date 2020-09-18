import React, { useState } from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import './styles.css'

export default function NewChat({ chatlist, user, show, setShow }) {
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

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className="newchat" style={{left: show ? 0 : -415}}>
      <div className="newchat-header">
        <div className="newchat-backbutton" onClick={handleClose}>
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