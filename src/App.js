import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'

import './App.css'

export default () => {
  const [chatlist, setChatlist] = useState([
    {},
    {},
    {},
    {}
  ])

  return (
    <div className="app-window">
      <aside className="sidebar">
        <header>
          <img 
            className="avatar"
            src="https://api.adorable.io/avatars/285/abott@adorable.png" 
            alt="Avatar"
          />

          <div className="header-buttons">
            <div className="header-button">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>

            <div className="header-button">
              <ChatIcon style={{ color: '#919191' }} />
            </div>

            <div className="header-button">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input 
              type="search" 
              placeholder="Procurar ou iniciar uma nova conversa" 
            />
          </div>
        </div>

        <main className="chatlist">
          
        </main>
      </aside>
      <section className="contentarea">
        ...
      </section>
    </div>
  )
}
