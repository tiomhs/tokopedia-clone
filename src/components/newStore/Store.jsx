import React from 'react';
import Facility from './Facility';
import OpenStore from './OpenStore';
import SnK from './SnK';

const Store = () => {
  return (
    <div className='py-6'>
        <OpenStore/>
        <SnK/>
        <Facility/>
    </div>
  )
}

export default Store