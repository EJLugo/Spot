import React, { Component } from 'react';
import '../App.css'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <span><img className='pawprint' src='/pawprint.png' alt='pawprint'/></span>
        <h3 className='footer-text'>
          I am the paw-ter. Get it? Like a footer, but not.
        </h3>
      </div>
    )
  }
}

export default Footer;
