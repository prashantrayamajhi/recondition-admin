import { useState } from 'react'
import './Links.scss'
import { ChatBubbleOutline, Facebook, Instagram, Mail } from '@material-ui/icons'

function Links() {
  const [isOpen, setIsOpen ] = useState<Boolean>(false)
  return (
    <div className='links-wrapper'>
      <div className={`links ${isOpen ? 'open' : ''}`}>
        <a href="https://www.facebook.com/Sawari-Motors-pvtltd-112970613809540/" rel="noreferrer" target="_blank" ><Facebook className='link' /></a>
        <a href="/" target="_blank" rel="noreferrer"><Instagram className='link' /></a>
        <a href="/" target="_blank" rel="noreferrer"><Mail className='link' /></a>
      </div>
      <ChatBubbleOutline className='chat' onClick={() => {setIsOpen(prev => !prev)}} />
    </div>
  )
}

export default Links
