import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        
        <div className='navbar-container'>
            <ul className='navbar'>
                <li className='nav-link'><a to='/Hero'>Auto Application</a></li>
                <li className='nav-link left'><a to='Admin'>Admin portal</a></li>
                <li className='nav-link left'><a to='Hero'>Get Quote</a></li>
            </ul>
          
        </div>
        
    )
}
