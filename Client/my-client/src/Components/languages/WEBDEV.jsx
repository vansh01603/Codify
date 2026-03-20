import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pop.css'
export default function WEBDEV() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('cpp');

  const handleClick = (lang) => {
    setLanguage(lang);
    localStorage.setItem('LangOuter', lang);
    navigate(`/Components/CODEPART?lang=${lang}`);
  };
  return (
    <div className='lang-div'>
      <div className="btn-wrapper">
      <button className="lang-btn" onClick={() => handleClick('javascript')}>Java Script</button> 
           <button className="lang-btn" onClick={() => handleClick('php')}>PHP</button>
           <button className="lang-btn" onClick={() => handleClick('typescript')}>TypeScript</button>
    </div>
    </div>
  )
}
