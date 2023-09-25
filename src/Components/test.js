import React from 'react'

import '../Styles/Testbar.css'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'

function Testbar() {
  return (
    <>
        <div className='Testbar'>
        <div className='TestNotification'>
            <p>Enter the measured testing time below</p>
        </div>
        <div className='TestInputbar'>
            <p>Serial Numberm:</p>
            <p>Pressure in bar:</p>
            <form>
                <input type='text' id='input-text' value={undefined} placeholder="Enter the measured testing time" ></input>
                <FormCheckInput id='input-check'/>
                <span id='timer'>[20 sec]</span>
            </form>
            <p>UTE Close ..Ok</p>
            <p id='test-success'>Test run compleated Successfully.</p>
        </div>
        </div>
    </>
  )
}

export default Testbar