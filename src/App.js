import React, { useState, useEffect } from 'react';

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'

import './App.css'
import NewChat from './components/NewChat';
import Login from './components/Login';

export default () => {
  const [chatlist, setChatlist] = useState([
    {chatId: 1, title: 'John Doe'},
    {chatId: 2, title: 'Daniel Hessel'},
    {chatId: 3, title: 'John Doe'},
    {chatId: 4, title: 'John Doe'},
    {chatId: 5, title: 'John Doe'},
    {chatId: 6, title: 'John Doe'},
    {chatId: 7, title: 'John Doe'},
    {chatId: 8, title: 'John Doe'},
  ])

  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState(null)

  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  const handleLoginDatas = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser)
  }

  if (user === null) {
    return <Login onReceive={handleLoginDatas} />
  }

  return (
    <div className="app-window">
      <aside className="sidebar">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

        <header>
          <img 
            className="avatar"
            src={user.avatar} 
            alt="Avatar"
          />

          <div className="header-buttons">
            <div className="header-button">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>

            <div className="header-button" onClick={handleNewChat}>
              <ChatIcon style={{ color: '#919191' }} />
            </div>

            <div className="header-button">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontS ize="small" style={{ color: '#919191' }} />
            <input 
              type="search" 
              placeholder="Procurar ou iniciar uma nova conversa" 
            />
          </div>
        </div>

        <main className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem 
              key={key} 
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])} 
            />
          ))}
        </main>
      </aside>

      <section className="contentarea">
        {activeChat.chatId !== undefined && 
          <ChatWindow
            user={user}
          />
        }
        
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </section>
    </div>
  )
}
