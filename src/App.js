import React from 'react';
import QRCodeComponent from './components/QRCodeComponent';
import qrCodeImage from './assets/image-qr-code.png';

function App() {
  
  return (
    <div className="App">
       <QRCodeComponent qrCodeImage={qrCodeImage}  />
    </div>
  );
};

export default App;
