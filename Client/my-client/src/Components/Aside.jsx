import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchbox.css';

export default function Aside() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const languages = ['c', 'cpp', 'java', 'python', 'php', 'ruby','kotlin','javascript','typescrit'];

  const handleSearch = (lang) => {
    localStorage.setItem('LangOuter', lang.toLowerCase());
    navigate(`/Components/CODEPART?lang=${lang}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(search);
    }
  };

  return (
      
    <>
    <h1 style={{textAlign:"center"}}>Code Online with Codify</h1>
    <div className='Aside-div'>
      <div className='search-wrapper'>
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          id='inp1'
        />
        {search && (
          <div className='search-box'>
            {languages
              .filter(lang =>
                lang.toLowerCase().includes(search.toLowerCase())
              )
              .map((lang, i) => (
                <div id='list-n' key={i} onClick={() => handleSearch(lang)}>
                  {lang}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
