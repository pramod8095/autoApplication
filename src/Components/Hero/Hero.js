import React, { useState } from 'react'
import Card from '../Card/Card'
import Frca from '../FRCA/Frca'
import './Hero.css'

export default function Hero() {

    const [prefix, setPrefix] = useState()
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [pnumber, setPnumber] = useState()
    const [addr1, setAddr1] = useState()
    const [addr2, setAddr2] = useState()
    const [land, setLand] = useState()
    const [city, setCity] = useState()



    function submitHandler(){
        console.log('submitted')
    }
    return (
        
        <div className='hero-container'>
            
            <Frca />
            <Card>
            <h1>Basic info </h1>
            <form onSubmit={submitHandler}> 
                <label for='prefix' required >Prefix </label>
                <select id='prefix'>
                    <option value='mr'>Mr.</option>
                    <option value='mrs'>Mrs.</option>
                    <option value='miss'>Miss.</option>
                    <option value='ms'>Ms.</option>
                </select>
                <label for='fname' required> *First Name </label>
                <input type='text' id='firstname' placeholder='Enter Name' name='fname'/>

                <label for='lname' required> *Last Name </label>
                <input type='text' id='lastname' placeholder='Enter Name' name='lname'/><br/><br/>

                <label for='pnumber' required> Phone Number &nbsp; </label>
                <input type='text' id='phonenumber' placeholder='Phone number'name='pnumber'/> <br/> <br/>

                <label for='addr' required> Address(Street) </label>
                <input type='text' id='address1' placeholder='*Please enter the street name' name='addr1'/> <br/><br/>

                <label for='addr' required> Address(Street) </label>
                <input type='text' id='address2' placeholder='please enter road name' name='addr2'/><br/><br/>

                <label for='landmark'> Landmark &emsp;&emsp;  </label>
                <input type='text' id='landmark' placeholder='Landmark (optional)' name='landmark'/> <br/><br/>

                <label for='city' required> *City </label>&emsp;&emsp;&emsp;&emsp;&nbsp;
                <input type='text' id='city' placeholder='*City' name='city'/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

                <label for='postcode' required> *Postcode </label>
                <input type='number' id='postcode' placeholder='PIN code' name='pcode'/><br/><br/>

                
            </form>
            </Card>
            <Card>
                <h2>Vehicle infomation</h2>
                <form id='vehicle-info'>
                    <label for='vBody' >Vehicle body style &emsp;&emsp;</label>
                    <select id='vBodyData'>
                        <option value='hatchback'>Hatchback</option>
                        <option value='Sedan'>Sedan</option>
                        <option value='Convertible'>Convertible</option>
                        <option value='Coupe'>Coupe</option>
                        <option value='SUV'>SUV</option>
                        <option value='Wagon'>Wagon</option>
                        <option value='Van'>Van</option>
                    </select>&emsp;&emsp;
                    <label for='engine'>Engine Capacity &emsp;&emsp;</label>
                    <select id='capacitydata'>
                        <option value='cap1'>1,000</option>
                        <option value='cap2'>1,500</option>
                        <option value='cap3'>1,606</option>
                        <option value='cap4'>1,721</option>
                        <option value='cap5'>2,835</option>
                        <option value='cap6'>2,967</option>
                        <option value='cap7'>3,475</option>
                    </select><br/><br/>
                    <label for='add-drivers'>Additional Drivers&emsp;&emsp;&nbsp;</label>
                    <select id='addDrivers'>
                        <option value='dri1'>1</option>
                        <option value='dri2'>2</option>
                        <option value='dri3'>3</option>
                        <option value='dri4'>4</option>                        
                    </select><br/><br/>

                </form>
                <form >
                    <div>
                        <label for='purpose'>Will the vehicle be used for comertial purpose</label>
                        <label>
                            <input type="radio" name="choice-radio"/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="choice-radio"/>
                            No
                        </label><br/><br/>
                    </div>
                </form>
                <form>
                    <div>
                        <label for='registedState'>Will the vehicle be used outside Registered State</label>
                        <label>
                            <input type="radio" name="choice-radio"/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="choice-radio"/>
                            No
                        </label>
                    </div>
                </form>
                <form>
                    <label for='regist'> When was vehicle registered &emsp;&emsp;&nbsp;</label>
                    <input type='date' id='regist-date' />
                </form>
                
            </Card>
            <Card>
                <h1>Message</h1>
                <form>
                    <textarea>Some text...</textarea>
                </form>
                <button type='submit' id='submit'>Submit</button>
            </Card>
        </div>
       
    )
}
