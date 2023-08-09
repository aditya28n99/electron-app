import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import navbg from '../Images/PA.png'
import '../Styles/Navbar.css'

function Navbar() {

    return (
        <>
            <nav className='Navbar'>
                <img src={navbg} alt='bg' />
            </nav>
            <nav className='Navbar'>
                <Dropdown className='Dropdown'>
                    <Dropdown.Toggle className='NavBtns' >
                        Close
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <span className='Saperator'>|</span>
                <Dropdown className='Dropdown'>
                    <Dropdown.Toggle className='NavBtns'>
                        Settings
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-3">Select File</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Other Settings</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <span className='Saperator'>|</span>
                <Dropdown className='Dropdown'>
                    <Dropdown.Toggle className='NavBtns' >
                        Language
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown >
                <span className='Saperator'>|</span>
                <Dropdown className='Dropdown'>
                    <Dropdown.Toggle className='NavBtns' >
                        Help
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown >
                <span className='Saperator'>|</span>
                <Dropdown id='tool' className='Dropdown'>
                    <Dropdown.Toggle className='NavBtns'  >
                        Tools
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </>
    )
}

export default Navbar