import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
export default function Footer(){
  const navigate = useNavigate();
      const [language, setLanguage] = useState('cpp');
    
      const handleClick = (lang) => {
        setLanguage(lang);
        localStorage.setItem('LangOuter', lang);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/Components/CODEPART?lang=${lang}`);//main thing
      };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3><b>Codify.COM</b></h3><br />
          <ul>
            <li><Link to="/about" id="abt">About</Link></li>
            <li><Link to="/contact" id="con">Contact</Link></li>
          </ul><br />
          <h3><u>SOCIAL</u></h3>
          <ul className="icons">
            <li><a href="#"><i className="fa-brands fa-linkedin-in fa-beat"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-square-facebook fa-beat"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram fa-beat"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter fa-beat"></i></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3><u>LANGUAGES</u></h3>
          <div className="language-column">
            <ul>
              <li><button className="footer-custom-btn" onClick={() => handleClick('javascript')}>JavaScript</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('python')}>Python</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('java')}>Java</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('c')}>C</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('cpp')}>C++</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('ruby')}>Ruby</button></li>
            </ul>
            <ul>
              <li><button className="footer-custom-btn" onClick={() => handleClick('kotlin')}>Kotlin</button></li>
              <li><button className="footer-custom-btn" onClick={() => handleClick('typescript')}>TypeScript</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <h3><u>MORE</u></h3>
          <ul>
            <li><button className="footer-custom-btn" onClick={() => alert("Piston API is used.")}>API</button></li>
            <li><Link to='/Components/Learn'>Quiz</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <u><b>2025 Codify.COM</b></u>
      </div>
    </footer>
  );
};