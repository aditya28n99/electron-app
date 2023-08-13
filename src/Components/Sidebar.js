import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
// import Button from 'react-bootstrap/Button';

import '../Styles/Sidebar.css'
import ute from '../Images/UTE.png';
import { useState } from 'react';

function Sidebar() {

  const [variant, setVariant] = useState('secondary');

  const varSuccess = () => {
    setVariant('success'); // Change the variant on button click
  };
  const varWarning = () => {
    setVariant('warning'); // Change the variant on button click
  };
  const varDanger = () => {
    setVariant('danger'); // Change the variant on button click
  };

  return (
    <>
      <div className='Sidebar'>
        <img id='sideimg' alt='background' src={ute}></img>
        <div className='Progressbar'>
          <Spinner id='spinner' animation="grow" variant={variant} />

        </div>
        {/* <div className='Progressbar'>
            <div className='ShowProgress' id='start'></div>
            <div className='ShowProgress' id='process'></div>
            <div className='ShowProgress' id='success'></div>
            <div className='ShowProgress' id='error'></div>
        </div> */}
        <button className='ProgressBtn' id='continue' onClick={varSuccess}>Continue</button>
        <button className='ProgressBtn' onClick={varSuccess} id='accept' >Accept</button>
        <button className='ProgressBtn' id='retry' onClick={varWarning}>Retry</button>
        <button className='ProgressBtn' id='cancel'onClick={varDanger}>Cancel</button>
      </div>
    </>
  )
}

export default Sidebar  