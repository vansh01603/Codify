import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './pop.css'
export default function Programming() {
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
        <button className="lang-btn" onClick={() => handleClick('c')}>C</button>
        <button className="lang-btn" onClick={() => handleClick('cpp')}>C++</button>
        <button className="lang-btn" onClick={() => handleClick('python')}>Python</button>
        <button className="lang-btn" onClick={() => handleClick('java')}>Java</button>
        <button className="lang-btn" onClick={() => handleClick('ruby')}>Ruby</button>
        <button className="lang-btn" onClick={() => handleClick('kotlin')}>Kotlin</button>

    </div>
    </div>
  )
}
