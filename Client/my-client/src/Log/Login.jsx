import React, { useState } from 'react';

export default function Login({ setShowLoginModal, loginWithGoogle, onSuccess }) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const loginInfo = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const response = await fetch("http://localhost:1001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user info for header
        const profile = {
          name: data.user.username || data.user.name || data.user.email,
          email: data.user.email,
          picture: data.user.picture || "https://cdn-icons-png.flaticon.com/512/847/847969.png",
        };

        localStorage.setItem("data", JSON.stringify(profile));
        onSuccess(); // Notify parent (Header) to update profile UI
        setShowLoginModal(false);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("❌ Error during login:", err);
      alert("Login failed. Server error.");
    }
  };

  return (
    <>
      <h2 style={{ color: '#F8F3CE' }}>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#F8F3CE' }}>Email:</label>
          <input
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', background: "transparent", color: "#fff" }}
          />
        </div>
        <div style={{ marginBottom: '10px', position: 'relative' }}>
          <label style={{ color: '#F8F3CE' }}>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', background: "transparent", color: "#fff" }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '8px 0', marginBottom: '12px' }}>
          Login
        </button>
        <p style={{ textAlign: "center" }}>or</p>
        <button type="button" onClick={loginWithGoogle} style={googleBtnStyle}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" style={{ width: '18px' }} />
          Login with Google
        </button>
      </form>
    </>
  );
}

const googleBtnStyle = {
  width: '100%',
  padding: '8px 0',
  backgroundColor: '#fff',
  color: '#333',
  border: '1px solid #ccc',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  marginBottom: '12px'
};
