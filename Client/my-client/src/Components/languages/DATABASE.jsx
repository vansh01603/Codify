import React from 'react'
import './pop.css'
import { useNavigate  } from 'react-router-dom'
export default function DATABASE() {
  const navigate = useNavigate();
  return (
    <div className="lang-div">
      <div className="btn-wrapper">
      <button className="lang-btn" onClick={() => navigate('/Components/CODEPART?lang=')} value="MongoDB">Mongo db</button>
      <button className="lang-btn">MY Sql</button>
    </div>
    </div>
  )
}