import React from 'react'
import './Hero.css'

export default function Hero() {
    return (
        <div className='hero-container'>
            <select id='nameprefix'>
                <option value='mr'>Mr.</option>
                <option value='mrs'>Mrs.</option>
                <option value='miss'>Miss.</option>
                <option value='ms'>Ms.</option>
            </select>
            <label for='name'> *First Name </label>
            <input type='text' id='firstname' placeholder='Enter Name'/>

            <label for='name'> *Last Name </label>
            <input type='text' id='lastname' placeholder='Enter Name'/><br/><br/>

            <label for='name'> Phone Number </label>
            <input type='text' id='phonenumber' placeholder='Phone number'/>

            <label for='name'> *Address </label>
            <input type='text' id='address1' placeholder='Line 1'/>

            <label for='name'> Landmark </label>
            <input type='text' id='name' placeholder='Enter Name'/>
        </div>
    )
}
