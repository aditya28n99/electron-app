import React from 'react'

import '../App.css'
// import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Testbar from './Testbar'


function Content() {
  return (
    <>
    <div className='Contentbar'>
        <Navbar/>
        <Testbar />
    </div>
    </>
  )
}

export default Content