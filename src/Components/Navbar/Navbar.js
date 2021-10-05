import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <ul className='navbar'>
                <li className='nav-link'><a href='#'>Auto Application</a></li>
                <li className='nav-link left'><a href='#'>Admin portal</a></li>
                <li className='nav-link left'><a href='#'>Get Quote</a></li>
            </ul>
        </div>
    )
}
