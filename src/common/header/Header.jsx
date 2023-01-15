import React from 'react'
import Head from './Head';
import Navbar from './Navbar';
import NavDesk from './NavDesk';

const Header = () => {
  return (
    <div className='lg:sticky lg:top-0 z-50'>
        <Head/>
        <Navbar/>
        <NavDesk/>
    </div>
  )
}

export default Header