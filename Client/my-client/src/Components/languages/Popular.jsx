import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pop.css';

export default function Popular() {
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
        <button className="lang-btn" onClick={() => handleClick('c')}>C</button>
        <button className="lang-btn" onClick={() => handleClick('cpp')}>C++</button>
        <button className="lang-btn" onClick={() => handleClick('python')}>Python</button>
        <button className="lang-btn" onClick={() => handleClick('java')}>Java</button>
      </div>
    </div>
  );
}
