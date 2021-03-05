import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Welcome</h2>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/terms'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/support'>Support</Link>
            <Link to='/feedback'>Feedback</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Other</h2>
            <Link to='/'>Site Code</Link>
            <Link to='/'>Stretch Goals</Link>
            <Link to='/otherprojects'>Other Projects</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Iron Chess <i class="fas fa-chess-rook"></i>
            </Link>
          </div>
          <small class='website-rights'>Iron Chess <i class="fas fa-chess-rook"></i> © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
