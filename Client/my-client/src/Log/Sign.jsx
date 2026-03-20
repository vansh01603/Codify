import React, { useState } from 'react';

export default function Sign({ setShowSignupModal, loginWithGoogle,onSuccess }) {
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignupSubmit = async (e) => {
  e.preventDefault();

  const SignInfo = {
    username: usernameValue,
    email_id: emailValue, // ⚠️ Must match field in your DB schema
    password: passwordValue,
  };

  try {
    const response = await fetch("http://localhost:1001/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SignInfo),
    });

    const data = await response.json();

    if (response.ok) {
  console.log("✅ User signed up:", data);

  const formattedUser = {
    name: data.user.username,
    picture: "https://cdn-icons-png.flaticon.com/512/847/847969.png", // default avatar
  };

  localStorage.setItem("data", JSON.stringify(formattedUser));
  setShowSignupModal(false);
  onSuccess(); // triggers UI update
} else {
      console.error("❌ Signup failed:", data.message || data.error);
      alert("Signup failed: " + (data.message || data.error));
    }
  } catch (error) {
    console.error("❌ Error sending signup request:", error);
    alert("Signup failed. Check server.");
  }
};

  return (
    <>
      <h2 style={{ color: '#F8F3CE' }}>Sign Up</h2>
      <form onSubmit={handleSignupSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#F8F3CE' }}>Username:</label>
          <input
            type="text"
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', background: "transparent", color: "#fff" }}
          />
        </div>
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
          Sign Up
        </button>
        <p style={{ textAlign: "center" }}>or</p>
        <button type="button" onClick={loginWithGoogle} style={googleBtnStyle}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" style={{ width: '18px' }} />
          Sign Up with Google
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
