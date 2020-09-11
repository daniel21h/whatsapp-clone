import React from 'react'

import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'

import './styles.css'

export default function ChatWindow() {
  return (
    <div className="chatwindow">
      <div className="chatwindow-header">
        <div className="chatwindow-headerinfo">
          <img 
            className="chatwindow-avatar" 
            src="https://api.adorable.io/avatars/285/abott@adorable.png" 
            alt="Avatar"
          />
          <p>Daniel Hessel</p>
        </div>

        <div className="chatwindow-headerbuttons">
          <div className="chatwindow-button">
            <SearchIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatwindow-button">
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>

      <div className="chatwindow-body"></div>

      <div className="chatwindow-footer">
        <div className="chatwindow-pre">
          <div className="chatwindow-button">
            <InsertEmoticonIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatwindow-button">
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>
        </div>

        <div className="chatwindow-inputarea">
          <input 
            className="chatwindow-input" 
            type="text"
            placeholder="Digite uma mensagem..."
          />
        </div>

        <div className="chatwindow-pos">
          <div className="chatwindow-button">
            <SendIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>
    </div>
  )
}