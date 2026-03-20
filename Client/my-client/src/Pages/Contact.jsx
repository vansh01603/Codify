import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', color: 'skyblue' }}>
        <u>Get in Touch with Us!</u>
      </h1>
      
      <p style={introStyle}>
        Have a question, suggestion, or feedback?  
        We'd love to hear from you! Whether you want to report an issue, suggest a new feature, 
        or simply share your thoughts, our team is always ready to listen and improve.
      </p>

      <form onSubmit={handleSubmit} style={formStyle}>
        <label><b>Name</b></label><br />
        <input type="text" placeholder="Enter your name" required  style={{ inputStyle, color: 'white' }} /><br />

        <label><b>Email</b></label><br />
        <input type="email" placeholder="Enter your email" required style={{ inputStyle, color: 'white' }} /><br />

        <label><b>Message / Suggestion</b></label><br />
        <textarea 
          placeholder="Write your message or suggestion here..." 
          rows="5" 
          required 
          style={{ inputStyle, color: 'white' }}  
        ></textarea><br />

        <button type="submit" style={buttonStyle}>SEND MESSAGE</button>
      </form>

      <div style={contactInfoStyle}>
        <h3>Other Ways to Reach Us</h3>
        <p>📧 Email: support@codify.com</p>
        <p>📞 Phone: +1 234 567 890</p>
        <p>💬 Socials: 
          <a href="#" style={linkStyle}> Instagram</a> | 
          <a href="#" style={linkStyle}> Twitter</a> | 
          <a href="#" style={linkStyle}> LinkedIn</a>
        </p>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: '700px',
  margin: '40px auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#111',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  color:'white'
};

const introStyle = {
  fontSize: '16px',
  color: '#555',
  marginBottom: '20px',
  textAlign: 'center',
  color:'white'
};

const formStyle = {
  marginBottom: '20px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '15px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  padding: '10px 15px',
  fontSize: '15px',
  backgroundColor: '#111',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  width: '100%'
};

const contactInfoStyle = {
  marginTop: '30px',
  padding: '15px',
  backgroundColor: '#111',
  borderRadius: '8px',
  textAlign: 'center'
};

const linkStyle = {
  color: 'skyblue',
  textDecoration: 'none',
  margin: '0 5px'
};

export default Contact;