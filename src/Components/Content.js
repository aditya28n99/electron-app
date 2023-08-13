import React from 'react'

import '../App.css'
// import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Testbar from './Testbar'
import FileContent from './FileContent'


function Content() {
  return (
    <>
    <div className='Contentbar'>
        <Navbar/>
        <FileContent/>
        <Testbar />
    </div>
    </>
  )
}

export default Content