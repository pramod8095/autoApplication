import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import './AdminPortal.css'

export default function AdminPortal() {
    return (
        <div>
            <Navbar />
            <Card>
            <h1>Admin Portal </h1>
            <ul>
                <label for=''>Driver ID?</label>&nbsp;&nbsp;
                <input className='area' type='number' placeholder='driver id' />
                <button className='getbutton'>--GET--</button> <br/>

                <label for=''>Driver ID?</label>&nbsp;&nbsp;
                <input className='area'  type='number' placeholder='driver id'/>
                <button className='getbutton'>Delete </button><br/>

                <label for=''>Driver ID?</label>&nbsp;&nbsp;
                <input className='area last'  type='number' placeholder='driver id'/>&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <input className='area last'  type='number' placeholder='Phone number'/>
                <button className='getbutton'>--Update-- </button>
            </ul>
            </Card>
        </div>
    )
}
