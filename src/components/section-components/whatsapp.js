
import React, { useEffect } from 'react';
import 'floating-whatsapp';

const Whatsapp = () => {
  useEffect(() => {
    const initializeWhatsApp = () => {
      window['$']('#WAButton').floatingWhatsApp({
        phone: '1231231231',
        headerTitle: 'Chat with us on WhatsApp!',
        popupMessage: 'Hello, how can we help you?',
        showPopup: true,
        buttonImage:
          '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />',
        position: 'right'
      });
    };

    if (window['$']) {
      initializeWhatsApp();
    } else {
      // Include jQuery script before initializing if not already loaded
      const script = document.createElement('script');
      script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      script.onload = initializeWhatsApp;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="WAButton" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      {/* WhatsApp button container */}
    </div>
  );
};

export default Whatsapp;
