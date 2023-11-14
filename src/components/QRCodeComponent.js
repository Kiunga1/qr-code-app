import React from 'react'
import QRCode from 'qrcode.react';
import './qrstyles.css';


const QRCodeComponent = ({ qrCodeImage }) => {
  return (
  <div>
    <div id="qrCode" className='qr-container' >
      <img src={qrCodeImage} alt="QR Code" />
      <h1 id="qr-heading" className="qr-heading">Improve your front-end skills by building projects</h1>
      <p  className="qr-description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
</div>
  )
}

export default QRCodeComponent
