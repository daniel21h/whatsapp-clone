import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

import MessageItem from '../MessageItem'

import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'

import './styles.css'

export default function ChatWindow() {
  let recognition = null
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition()
  }

  const [emojiOpen, setEmojiOpen] = useState(false)
  const [text, setText] = useState('')
  const [listening, setListening] = useState(false)
  const [list, setList] = useState([{}, {}, {}])

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji)
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }

  const handleSendMessage = () => {
    
  }

  const handleMicVoiceMessage = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true)
      }

      recognition.onend = () => {
        setListening(false)
      }

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript)
      }

      recognition.start()
    }
  }

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

      <div className="chatwindow-body">
        {list.map((item, key) => (
          <MessageItem 
            key={key}
            data={item}
          />
        ))}
      </div>

      <div 
        className="chatwindow-emojiarea"
        style={{height: emojiOpen ? '200px' : '0px'}}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatwindow-footer">
        <div className="chatwindow-pre">
          <div 
            className="chatwindow-button" 
            onClick={handleCloseEmoji}
            style={{width: emojiOpen ? 40 : 0}}
          >
            <CloseIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatwindow-button" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
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
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>

        <div className="chatwindow-pos">
          {text === '' &&
            <div className="chatwindow-button" onClick={handleMicVoiceMessage}>
              <MicIcon style={{ color: listening ? '#126ece' : '#919191' }} />
            </div>  
          }

          {text !== '' &&
            <div className="chatwindow-button" onClick={handleSendMessage}>
              <SendIcon style={{ color: '#919191' }} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}