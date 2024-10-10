import React from 'react';

const ContactButton = () => {
  const handleSendEmail = () => {
    window.location.href = 'mailto:contatologangabriel@gmail.com';
  };

  return (
    <button onClick={handleSendEmail} style={buttonStyle}>
     Fala comigo!
    </button>
  );
};

const buttonStyle = {
  padding: '12px 20px',
  backgroundColor: '#ff8c00', 
  color: '#fff', 
  border: 'none',
  borderRadius: '20px', 
  cursor: 'pointer',
  fontSize: '16px', 
  fontWeight: '600', 
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)', 
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  outline: 'none',
  textAlign: 'center',
  textTransform: 'uppercase', 
};

export default ContactButton;
