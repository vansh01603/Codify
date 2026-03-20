import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './sec.css'
import { useNavigate } from 'react-router-dom';
export default function Section() {
    const navigate = useNavigate();
  return (
    <div className='sec-div'>
      <ToggleButtonGroup type="checkbox">
        <button
          className="custom-btn"
          onClick={() => navigate('./languages/popular')}
        >
          Popular
        </button>
        <button className="custom-btn" onClick={() => navigate('/languages/WEBDEV')}>Web</button>
        <button className="custom-btn" onClick={() => navigate('/languages/Programming')}>Programming</button>
        {/* <button className="custom-btn" onClick={() => navigate('/languages/DATABASE')}>Database</button> */}
      </ToggleButtonGroup>
    </div>
  )
}
