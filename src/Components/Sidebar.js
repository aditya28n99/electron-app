import React from 'react'

import '../Styles/Sidebar.css'
import ute from '../Images/UTE.png';

function Sidebar() {
  return (
   <>
   <div className='Sidebar'>
        <img id='sideimg' alt='background' src={ute}></img>
        <div className='Progressbar'>
            <div className='ShowProgress' id='start'></div>
            <div className='ShowProgress' id='process'></div>
            <div className='ShowProgress' id='success'></div>
            <div className='ShowProgress' id='error'></div>
        </div>
        <button className='ProgressBtn' id='continue'>Continue</button>
        <button className='ProgressBtn' id='accept'>Accept</button>
        <button className='ProgressBtn' id='retry'>Retry</button>
        <button className='ProgressBtn' id='cancel'>Cancel</button>
    </div>
   </>
  )
}

export default Sidebar