// Header.jsx
import React, { useState, useEffect } from 'react';
import './head.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginForm from '../Log/Login';
import SignupForm from '../Log/Sign';
import '@fortawesome/fontawesome-free'
export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  // Load profile on first render
  useEffect(() => {
    const storedProfile = localStorage.getItem("data");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const toggleMenu = () => {
    const navLinks = document.getElementById('navLinks');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    if (navLinks && loginBtn && signupBtn) {
      navLinks.classList.toggle('show');
      loginBtn.classList.toggle('show');
      signupBtn.classList.toggle('show');
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => setUser(tokenResponse),
    onError: (error) => console.error('Google Login Failed:', error),
  });

  // Google profile fetch
  useEffect(() => {
    if (user?.access_token) {
      axios
        .get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem('data', JSON.stringify(res.data));
          setShowLoginModal(false);
          setShowSignupModal(false);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  // Handle manual login success
  const handleManualLogin = () => {
    const loginInfo = JSON.parse(localStorage.getItem("data"));
    if (loginInfo) {
      setProfile(loginInfo);
      setShowLoginModal(false);
    }
  };

  // Handle manual signup success
  const handleManualSignup = () => {
    const signupInfo = JSON.parse(localStorage.getItem("data"));
    if (signupInfo) {
      setProfile(signupInfo);
      setShowSignupModal(false);
    }
  };

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
    localStorage.removeItem('data');
  };

  return (
    <div className='head-div'>
      <nav>
        <div className="logo">
          <i className="fas fa-code"></i>
          <span style={{ fontSize: "30px" }}>Codify</span>
        </div>
        <i className="fas fa-bars menu-icon" onClick={toggleMenu}></i>
        <ul className="nav-links" id="navLinks">
          <li><Link to='/' style={{ fontSize: "30px" }} className='Link-nav'>Home</Link></li>
          {/* <li><Link to='/Components/Challenge' style={{ fontSize: "30px" }} className='Link-nav'>Challenge</Link></li>   */}
          <li><Link to='/Components/Learn' style={{ fontSize: "30px" }} className='Link-nav'>Learn</Link></li>
          <li><Link to='/Components/CODEPART' style={{ fontSize: "30px" }} className='Link-nav'>Code</Link></li>
          <li><Link to='/about' style={{ fontSize: "30px" }} className='Link-nav'>About</Link></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {profile ? (
            <div style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {profile.picture && (
                <img src={profile.picture} alt="pic" style={{ width: '30px', borderRadius: '50%' }} />
              )}
              <span>{profile.name}</span>
              <button onClick={logOut} className='logout-btn'>Logout</button>
            </div>
          ) : (
            <>
              <button className="login-btn" id="loginBtn" onClick={() => setShowLoginModal(true)}>Login</button>
              <button className="login-btn" id="signupBtn" onClick={() => setShowSignupModal(true)}>Sign Up</button>
            </>
          )}
        </div>
      </nav>

      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal-box" style={{ backgroundColor: "#111", width: "300px" }}>
            <span className="close-modal" onClick={() => setShowLoginModal(false)}>&times;</span>
            <LoginForm
              setEmailValue={() => { }}
              setPasswordValue={() => { }}
              loginWithGoogle={loginWithGoogle}
              setShowLoginModal={setShowLoginModal}
              onSuccess={handleManualLogin}
            />
          </div>
        </div>
      )}

      {showSignupModal && (
        <div className="modal-overlay">
          <div className="modal-box" style={{ backgroundColor: "#111", width: "300px" }}>
            <span className="close-modal" onClick={() => setShowSignupModal(false)}>&times;</span>
            <SignupForm
              setUsernameValue={() => { }}
              setEmailValue={() => { }}
              setPasswordValue={() => { }}
              loginWithGoogle={loginWithGoogle}
              setShowSignupModal={setShowSignupModal}
              onSuccess={handleManualSignup}
            />
          </div>
        </div>
      )}
    </div>
  );
}
