import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import navbg from '../Images/PA.png'
import '../Styles/Navbar.css'

function Navbar() {

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Getting filepath into console
            const filePath = URL.createObjectURL(selectedFile);
            console.log('Selected file path:', filePath);

            //Reading file 
            const reader = new FileReader();

            reader.onload = (event) => {
                const fileContent = event.target.result;
                console.log('Selected file content:', fileContent);
                document.getElementById('fileData').innerText = fileContent;
            };
            reader.readAsText(selectedFile);
        }
    };
    return (
        <>
            <nav className='Navbar'>
                <img src={navbg} alt='bg' />
            </nav>
            <nav className='Navbar'>
                {/* <Dropdown className='Dropdown'>
                    <Dropdown.Toggle className='NavBtns' >
                        Close
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <span className='Saperator'>|</span> */}



                <Dropdown className='Dropdown'>
                    <Dropdown.Toggle className='NavBtns'>
                        Settings
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-3" onClick={() => document.getElementById('fileInput').click()}><input type="file" id="fileInput" style={{ display: 'none' }} accept=".xml,.txt, .ini" onChange={handleFileChange} />Open file</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Other Settings</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <span className='Saperator'>|</span>



                {/* <Dropdown className='Dropdown'>
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
                </Dropdown> */}
            </nav>
        </>
    )
}

export default Navbar