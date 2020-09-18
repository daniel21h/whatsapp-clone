import React from 'react'

import './styles.css'

import FacebookIcon from '@material-ui/icons/Facebook'
import api from '../../services/api'

export default function Login({ onReceive }) {
  const handleFacebookLogin = async () => {
    let result = await api.fbLogin()

    if (result) {
      onReceive(result.user)
    } else {
      alert('Erro!')
    }
  }

  return (
    <div className="login">
      <aside className="login">
        <p>Whatsapp CLN</p>
        <button onClick={handleFacebookLogin}>
          Entrar com
          <FacebookIcon style={{width: 50, height: 50, color: '#0268e2'}} />
        </button>
      </aside>
    </div>
  )
}