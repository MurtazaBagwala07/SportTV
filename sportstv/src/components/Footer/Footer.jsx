import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <p className='footer-desc'>Made with ❤️ by Murtaza</p>
        <div className="footer-socials">
            <i class="fab fa-twitter footer-icon"></i>
            <i class="fab fa-github footer-icon"></i>
            <i class="fab fa-linkedin-in footer-icon"></i>
        </div>
        <p className='footer-copyright'>
            © 2022 | SportsTV
        </p>
    </div>
  )
}

