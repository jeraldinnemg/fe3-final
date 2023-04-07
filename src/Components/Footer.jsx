import React, {useContext} from 'react'
import { ContextGlobal } from "../Components/utils/global.context";
const Footer = () => {

  useContext(ContextGlobal)
  
  return (
    <footer>
            <button className='back-to-top' onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>VOLVER ARRIBA</button>
        <div className='footer-container'>
        <p>Powered by</p>
          <div className='footer-img'>
            <img src="/images/DH.png"  alt='DH-logo'/>
          </div>
          <div className='social-icons'>
            <a className='social-media' href="https://www.facebook.com" rel="noreferrer" target="_blank"><img class= "icon" src="/images/ico-facebook.png"  alt='ico-facebook'/></a>
            <a className='social-media' href="https://www.instagram.com" rel="noreferrer" target="_blank"><img class= "icon" src="/images/ico-instagram.png"  alt='ico-instagram'/></a>
            <a className='social-media' href="https://www.tiktok.com" rel="noreferrer" target="_blank"><img class= "icon" src="/images/ico-tiktok.png"  alt='ico-tiktok'/></a>
            <a className='social-media' href="https://www.whatsapp.com" rel="noreferrer" target="_blank"><img class= "icon" src="/images/ico-whatsapp.png"  alt='ico-whatsapp'/></a>
          </div>
        </div>

        
    </footer>
  )
}

export default Footer
