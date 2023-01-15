import React from 'react'
import Menu from '../components/menu/Menu'
import SearchSlider from '../components/slider-pencarian/SearchSlider';
import NewUser from '../components/pengguna-baru/NewUser';
import Discount from '../components/discount/Discount';
import NavSearch from '../components/search/NavSearch';
import Store from '../components/newStore/Store';
import Pulsa from '../components/pulsa/Pulsa';
import Promo from '../components/promo/Promo';


const page = () => {
  return (
    <div>
        <Menu/>
        <SearchSlider/>
        <NewUser/>
        <Discount/>
        <Promo/>
        { window.innerWidth > 728 ? '' : <Pulsa/> }
        <NavSearch/>
        <Store/>
    </div>
  )
}

export default page