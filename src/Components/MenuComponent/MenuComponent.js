import React , {useState} from "react";
import {Link} from 'react-router-dom';
import './MenuComponent.css'

export const MenuComponent=()=>{
    const [isOpen,setIsOpen]=useState(true);
    return (
        <div className="menu-container">
        <button className={`btn btn-dark position-fixed top-0 ${isOpen? "openButton":"closeButton"}`}
        style={{top:'10px', zIndex:1000}}
        onClick={()=>setIsOpen(!isOpen)}>
          {isOpen?'<<':'>>'}
        </button>
        {isOpen? 
        <div className={`sidebar${isOpen?'open':''}`}>
        
        <div>
        <ul className='nav flex-column'>
          <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
          <li className='nav-item'><Link to="/table" className='nav-link'>Stream Records</Link></li>
        </ul>
        </div>
        </div> : ''
}
        </div>

    )
}